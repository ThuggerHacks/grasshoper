(() => {
    const imageURL = "src/20240403_104553.jpg";
    let app, image;
    let firstPress = false;
    let isMoving = true;
    let firstDistance = 0;
    let fx = fy = fx2 = fy2 = 0;
    let x = y = px = py = 0;
    let showRuller = true;
    let i = 190;
    let overlayCanvas; // Variable to store the overlay canvas

    window.onload = () => {
        app = document.getElementById('root');
        new p5(sketct, app);
    }

    const sketct = (p) => {
        const createImage = () => {
            p.image(image, 0, 0, image.width, image.height);
        }

        const resetValues = () => {
            firstPress = false;
            firstDistance = 0;
            i = 20;
            x = y = px = py = 0;
            isMoving = true;
        }

        // Function to create an overlay canvas
        const createOverlayCanvas = (parent) => {
            let overlay = document.createElement('canvas');
            overlay.width = parent.offsetWidth;
            overlay.height = parent.offsetHeight;
            overlay.style.position = 'absolute';
            overlay.style.left = '0';
            overlay.style.top = '0';
            parent.appendChild(overlay);
            return overlay.getContext('2d');
        }

        p.preload = () => {
            image = p.loadImage(ImageURL);
        }

        p.setup = () => {
            p.createCanvas(image.width, image.height);
            p.background(0);
            createImage();
            overlayCanvas = createOverlayCanvas(app); // Create the overlay canvas
        }

        p.draw = () => {}

        p.mouseMoved = () => {
            if (isMoving && showRuller) {
                overlayCanvas.clearRect(0, 0, overlayCanvas.canvas.width, overlayCanvas.canvas.height); // Clear the overlay canvas
                overlayCanvas.strokeStyle = 'rgba(255, 255, 50, 0.5)'; // Set the color with opacity for the ruler lines
                overlayCanvas.lineWidth = 30;
                overlayCanvas.beginPath();
                overlayCanvas.moveTo(0, p.mouseY);
                overlayCanvas.lineTo(p.width, p.mouseY);
                overlayCanvas.stroke();
            }
        }

        p.mousePressed = () => {
            if (!firstPress) {
                // Store the first point when mouse is pressed for the first time 
                firstPress = true;
                px = p.mouseX;
                py = p.mouseY;
            } else {
                // Draw line between two points if mouse is pressed again and calculate distance between the points 
                x = p.mouseX;
                y = p.mouseY;
                p.stroke(0, 255, 0);
                p.strokeWeight(30);
                p.line(px, py, x, y);
                let distance = p.dist(px, py, x, y);
                p.strokeWeight(3);
                // Store the distance between the points when mouse is pressed again 
                if (firstDistance === 0) {
                    firstDistance = distance;
                    // Calculate the distance between the points
                    p.fill(255);
                    p.textSize(60);
                    p.text(`Total Distance: ${distance.toFixed(2)} = 100%, x1 = ${px}, y1 = ${py}, x2 = ${x}, y2 = ${y}`, 0, p.height - 20);
                    fx = px;
                    fy = py;
                    fx2 = x;
                    fy2 = y;

                } else {
                    // Calculate the distance between the points  and the percentage of the distance compared to the first distance
                    let percentage = (distance / firstDistance) * 100;
                    p.text(`Distance: ${distance.toFixed(2)} = ${percentage.toFixed(2)}%, x1 = ${calculatePercentage(fx,fy,fx2,fy2,px)}%, y1 = ${calculatePercentageY(fx,fy,fx2,fy2,py)}%, x2 = ${calculatePercentage(fx,fy,fx2,fy2,x)}%, y2 = ${calculatePercentageY(fx,fy,fx2,fy2,y)}%`, 0, p.height - i);
                }
                isMoving = true;
                firstPress = false;
                i += 90;
            }
        }

        // Reset values when delete key is pressed
        p.keyPressed = () => {
            if (p.key == 'Delete') {
                p.background(0);
                createImage();
                resetValues();
            }

            if (p.key == 'Enter') {
                overlayCanvas.clearRect(0, 0, overlayCanvas.canvas.width, overlayCanvas.canvas.height); // Clear the overlay canvas
                overlayCanvas.strokeStyle = 'rgba(255, 255, 50, 0.5)'; // Set the color with opacity for the ruler lines
                overlayCanvas.lineWidth = 30;
                overlayCanvas.beginPath();
                overlayCanvas.moveTo(0, p.mouseY);
                overlayCanvas.lineTo(p.width, p.mouseY);
                overlayCanvas.stroke();
                isMoving = false;
            }

            if(p.key == 'r') {
                showRuller = !showRuller;
                if(!showRuller) {
                    overlayCanvas.clearRect(0, 0, overlayCanvas.canvas.width, overlayCanvas.canvas.height); // Clear the overlay canvas
                }
            }
        }
    }

    const calculatePercentage = (x1, y1, x2, y2, x3) => {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const distanceToX3 = Math.abs(x3 - x1);
        const percentage = (distanceToX3 / distance) * 100;
        return percentage.toFixed(2);
    };

    const calculatePercentageY = (x1, y1, x2, y2, y3) => {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const distanceToY3 = Math.abs(y3 - y1);
        const percentage = (distanceToY3 / distance) * 100;
        return percentage.toFixed(2);
    };

})();
