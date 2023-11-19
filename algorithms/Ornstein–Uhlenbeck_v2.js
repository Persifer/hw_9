function generateOrnsteinUhlenbeck(numSteps, stepSize, theta, mu, sigma, initialX) {
    // Initialize variables
    let path = [initialX];  // Initial value
    let currentX = initialX;

    // Generate the path
    for (let i = 1; i < numSteps; i++) {
        // Generate a random value from a normal distribution
        const randomValue = randn_bm();

        // Calculate the drift and diffusion components
        const drift = theta * (mu - currentX) * stepSize;
        const diffusion = sigma * Math.sqrt(stepSize) * randomValue;

        // Update the current value using the Ornstein-Uhlenbeck process formula
        currentX = currentX + drift + diffusion;

        // Add the current value to the path
        path.push(currentX);
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



