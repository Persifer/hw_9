function generateArithmeticBrownianMotion(numSteps, stepSize, initialPrice, drift, volatility) {
    // Initialize variables
    let path = [initialPrice];  // Initial price
    let currentPrice = initialPrice;

    // Generate the path
    for (let i = 1; i < numSteps; i++) {
        // Generate a random value from a normal distribution
        const randomValue = randn_bm();
        
        // Update the current price using the arithmetic brownian motion formula
        currentPrice += drift * stepSize + volatility * randomValue * Math.sqrt(stepSize);

        // Add the current price to the path
        path.push(currentPrice);
    }

    return path;
}

// Function to generate a random value from a normal distribution
function randn_bm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

