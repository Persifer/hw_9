function generateHullWhitePath(numSteps, stepSize, meanReversion, volatility, initialRate) {
    // Initialize variables
    let path = [initialRate];  // Initial short rate
    let currentRate = initialRate;

    // Generate the path
    for (let i = 1; i < numSteps; i++) {
        // Generate a random value from a normal distribution
        const randomValue = randn_bm();

        // Calculate the mean reversion and diffusion components
        const meanReversionComponent = meanReversion * (currentRate - 0) * stepSize;
        const diffusionComponent = volatility * Math.sqrt(stepSize) * randomValue;

        // Update the current short rate using the Hull–White model
        currentRate += meanReversionComponent - diffusionComponent;

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

// // Example usage
// const numSteps = 100;         // Number of steps
// const stepSize = 0.1;         // Step size
// const meanReversion = 0.1;    // Mean reversion speed
// const volatility = 0.02;      // Volatility
// const initialRate = 0.03;     // Initial short rate

// const path = generateHullWhitePath(numSteps, stepSize, meanReversion, volatility, initialRate);
// console.log("Hull–White Path:", path);
