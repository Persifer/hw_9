function generateVasicekPath(numSteps, stepSize, initialRate, kappa, theta, sigma) {
    // Initialize variables
    let path = [initialRate];  // Initial short rate
    let currentRate = initialRate;

    // Generate the path
    for (let i = 1; i < numSteps; i++) {
        // Generate a random value from a normal distribution
        const randomValue = randn_bm();

        // Calculate the mean reversion and diffusion components
        const meanReversion = kappa * (theta - currentRate) * stepSize;
        const diffusion = sigma * Math.sqrt(stepSize) * randomValue;

        // Update the current short rate using the Vasicek model
        currentRate += meanReversion + diffusion;

        // Add the current short rate to the path
        path.push(currentRate);
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

// Example usage
// const numSteps = 100;         // Number of steps
// const stepSize = 0.1;         // Step size
// const initialRate = 0.03;     // Initial short rate
// const kappa = 0.1;            // Mean reversion speed
// const theta = 0.05;           // Long-term mean
// const sigma = 0.02;           // Volatility

// const path = generateVasicekPath(numSteps, stepSize, initialRate, kappa, theta, sigma);
// console.log("Vasicek Path:", path);
