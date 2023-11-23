function generateChenModelBinaryPath(numSteps, stepSize, initialVolatility, kappa, theta, sigma) {
    // Initialize variables
    let binaryPath = [1]; // Iniziamo con un valore arbitrario, ad esempio 1.

    // Generate the path
    for (let i = 1; i < numSteps; i++) {
        // Generate a random value from a normal distribution
        const epsilonVolatility = randn_bm();

        // Update volatility using the Chen model
        const dWVolatility = Math.sqrt(stepSize) * epsilonVolatility;
        const volatilityIncrement = kappa * (theta - binaryPath[i - 1]) * stepSize + sigma * binaryPath[i - 1] * dWVolatility;
        const newVolatility = Math.sign(binaryPath[i - 1] + volatilityIncrement);

        // Add the new value to the path
        binaryPath.push(newVolatility);
    }

    return binaryPath;
}
