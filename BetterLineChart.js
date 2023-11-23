
    // Function to create a simple Line Chart
    function createLineChart(ctx, data) {
        let canvasWidth = ctx.canvas.width;
        let canvasHeight = 700;
         
        

        // Draw the axes
        ctx.beginPath();
        ctx.moveTo(50, 10);
        ctx.lineTo(50, canvasHeight - 30);
        ctx.lineTo(canvasWidth - 30, canvasHeight - 30);
        ctx.stroke();

        // Draw the data points and connect with lines
        const numPoints = data.length;
        let xIncrement = (canvasWidth - 10) / (numPoints - 1);

        ctx.beginPath();
        function getRandomNumber() {
            return Math.floor(Math.random() * 20) + 1;
        }


        const colors =[
            '#FF5733', '#33FF57', '#5733FF', '#FF33A8', '#A833FF',
            '#33C5FF', '#FFD333', '#FF3333', '#33FFD9', '#B233FF',
            '#FF854D', '#4DFF85', '#854DFF', '#FF4D85', '#FFB84D',
            '#B84DFF', '#4DB8FF', '#FF9E4D', '#4DFF9E', '#9E4DFF',
            '#FF6633', '#33FF66', '#6633FF', '#FF3366', '#FFCC33',
            '#CC33FF', '#33CCFF', '#FF9933', '#33FF99', '#9933FF'
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


