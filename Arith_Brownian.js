function generateArithmeticBrownianMotion(numSteps, stepSize) {
    // Initialize variables
    let path = [0];  // Initial point
    let currentPrice = 0;

    // Generate the path
    for (let i = 1; i < numSteps; i++) {
        // Generate a random value from a normal distribution
        const randomValue = randn_bm();
        
        // Update the current price using the arithmetic brownian motion formula
        currentPrice += stepSize * randomValue;

        // Add the current price to the path
        path.push(currentPrice);
    }

    return path;
}

function generateBinaryArray(path) {
    // Initialize variables
    let binaryArray = [];

    // Generate the binary array based on the path
    for (let i = 1; i < path.length; i++) {
        // If the current value is greater than the previous, add 1; otherwise, add -1
        binaryArray.push(path[i] > path[i - 1] ? 1 : -1);
    }

    return binaryArray;
}

// Function to generate a random value from a normal distribution
function randn_bm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}


