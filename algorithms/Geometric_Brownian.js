function generateGeometricBrownianMotion(numSteps, stepSize, probability, drift, volatility) {
    result = []
    for (let i = 1; i < numSteps; i++) {
        // Generate a random value from a normal distribution
        const randomValue = randn_bm();

        // Calculate the next price using the geometric brownian motion formula
        const diffusion = volatility * randomValue;
        const driftFactor = drift - 0.5 * volatility * volatility;
        currentProb = 1 / Math.exp((driftFactor * stepSize) + diffusion);

        // Add the current price to the path
        if (currentProb > probability){
            result.push(1)
        }else{
            result.push(-1) 
        }
    }

    return result;
}

// Function to generate a random value from a normal distribution
function randn_bm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

