function generateOrnsteinUhlenbeck(numSteps, stepSize, probability, theta, mu, sigma) {
    // Initialize variables
    let result = []
    currentX = 0.4

    // Generate the path
    for (let i = 1; i < numSteps; i++) {
        // Generate a random value from a normal distribution
        const randomValue = randn_bm();

        // Calculate the drift and diffusion components
        const drift = theta * (mu - currentX) * stepSize;
        const diffusion = sigma * Math.sqrt(stepSize) * randomValue;

        // Update the current value using the Ornstein-Uhlenbeck process formula
        currentProb = sigmoid(currentX + drift + diffusion);

        // Add the current value to the path
        if(currentProb > probability){
            result.push(1)
        }else{
            result.push(-1)
        }
    }

    return result;
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

// Function to generate a random value from a normal distribution
function randn_bm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

// Example usage

