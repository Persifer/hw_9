
    // Function to create a simple Line Chart
    function createLineChart(ctx, data) {
        const canvasWidth = ctx.canvas.width;
        const canvasHeight = ctx.canvas.height;

        // Draw the axes
        ctx.beginPath();
        ctx.moveTo(50, 10);
        ctx.lineTo(50, canvasHeight - 30);
        ctx.lineTo(canvasWidth - 30, canvasHeight - 30);
        ctx.stroke();

        // Draw the data points and connect with lines
        const numPoints = data.length;
        const xIncrement = (canvasWidth - 80) / (numPoints - 1);

        ctx.beginPath();
        function getRandomNumber() {
            return Math.floor(Math.random() * 20) + 1;
        }


        let colors = [
            "red",
            "green",
            "blue",
            "yellow",
            "cyan",
            "magenta",
            "orange",
            "purple",
            "lime",
            "coral",
            "steelblue",
            "indianred",
            "mediumseagreen",
            "darkorange",
            "mediumpurple",
            "mediumspringgreen",
            "lightcoral",
            "mediumseagreen",
            "royalblue",
            "darkkhaki"
        ];
        ctx.strokeStyle = colors[getRandomNumber()];
        ctx.lineWidth = 2;
        ctx.moveTo(50, canvasHeight - 30 - data[0] * 100);

        for (let i = 1; i < numPoints; i++) {
            const x = 50 + i * xIncrement;
            const y = canvasHeight - 30 - data[i] * 100;
            ctx.lineTo(x, y);
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
        }
        

        ctx.stroke();

        // Display the title
        //ctx.font = '14px Arial';
        //ctx.fillStyle = 'black';
        //ctx.fillText(title, canvasWidth / 2 - title.length * 3, 20);
    }


