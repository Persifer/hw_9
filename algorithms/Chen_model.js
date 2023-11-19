function generateChenModelPath(numSteps, stepSize, initialPrice, initialVolatility, kappa, theta, sigma) {
    // Initialize variables
    let pricePath = [initialPrice];
    let volatilityPath = [initialVolatility];

    // Generate the path
    for (let i = 1; i < numSteps; i++) {
        // Generate random values from normal distributions
        const epsilonPrice = randn_bm();
        const epsilonVolatility = randn_bm();

        // Update volatility using the Chen model
        const dWVolatility = Math.sqrt(stepSize) * epsilonVolatility;
        const volatilityIncrement = kappa * (theta - volatilityPath[i - 1]) * stepSize + sigma * volatilityPath[i - 1] * dWVolatility;
        const newVolatility = Math.max(volatilityPath[i - 1] + volatilityIncrement, 0);

        // Update stock price using the Chen model
        const dWPrice = Math.sqrt(stepSize) * epsilonPrice;
        const diffusion = volatilityPath[i - 1] * Math.sqrt(stepSize) * dWPrice;
        const newPrice = pricePath[i - 1] + diffusion;

        // Add the new values to the paths
        pricePath.push(newPrice);
        volatilityPath.push(newVolatility);
    }

    return { pricePath, volatilityPath };
}

// Function to generate a random value from a normal distribution
function randn_bm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

// Example usage
// const numSteps = 100;          // Number of steps
// const stepSize = 0.01;         // Step size
// const initialPrice = 100.0;    // Initial stock price
// const initialVolatility = 0.2; // Initial volatility
// const kappa = 1.0;             // Mean reversion speed for volatility
// const theta = 0.2;             // Long-term mean for volatility
// const sigma = 0.3;             // Volatility parameter

// const { pricePath, volatilityPath } = generateChenModelPath(numSteps, stepSize, initialPrice, initialVolatility, kappa, theta, sigma);
// console.log("Chen Model Stock Price Path:", pricePath);
// console.log("Chen Model Volatility Path:", volatilityPath);
