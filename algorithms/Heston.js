function generateHestonVolatilityPath(numSteps, stepSize, initialVolatility, kappa, theta, xi, rho) {
    // Initialize variables
    let volatilityPath = [initialVolatility];

    // Generate the path
    for (let i = 1; i < numSteps; i++) {
        // Generate random values from normal distributions
        const epsilonVolatility = randn_bm();

        // Update volatility using the Heston model
        const dWVolatility = Math.sqrt(stepSize) * epsilonVolatility;
        const gamma = Math.sqrt(Math.max(volatilityPath[i - 1], 0));
        const volatilityIncrement = kappa * (theta - gamma) * stepSize + xi * gamma * dWVolatility;
        const newVolatility = Math.max(volatilityPath[i - 1] + volatilityIncrement, 0);

        // Add the new value to the path
        volatilityPath.push(newVolatility);
    }

    return volatilityPath;
}

// Example usage
// const numSteps = 100;          // Number of steps
// const stepSize = 0.01;         // Step size
// const initialVolatility = 0.2; // Initial volatility
// const kappa = 1.0;             // Mean reversion speed for volatility
// const theta = 0.2;             // Long-term mean for volatility
// const xi = 0.3;                // Volatility of volatility
// const rho = -0.5;              // Correlation between stock price and volatility

// const hestonModelVolatilityPath = generateHestonVolatilityPath(numSteps, stepSize, initialVolatility, kappa, theta, xi, rho);
// console.log("Heston Model Volatility Path:", hestonModelVolatilityPath);
