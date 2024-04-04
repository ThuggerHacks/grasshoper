(() => {
    const imageURL = "src/20240403_101217.jpg";
    let result = {} // Variable to store the result of the image processing
    let lbcount = 0;
    let app, image;
    let firstPress = false;
    let verticallRuller = false;
    let isMoving = true;
    let firstDistance = 0;
    let firstDistanceY = 0;
    let fx = fy = fx2 = fy2 = 0;
    let fvx = fvy = fvx2 = fvy2 = 0;
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
            image = p.loadImage(imageURL);
        }

        p.setup = () => {
            p.createCanvas(image.width, image.height);
            p.background(0);
            createImage();
            overlayCanvas = createOverlayCanvas(app); // Create the overlay canvas
        }

        p.draw = () => {}

        p.mouseMoved = () => {
            if (isMoving && showRuller && !verticallRuller) {
                overlayCanvas.clearRect(0, 0, overlayCanvas.canvas.width, overlayCanvas.canvas.height); // Clear the overlay canvas
                overlayCanvas.strokeStyle = 'rgba(255, 255, 50, 0.5)'; // Set the color with opacity for the ruler lines
                overlayCanvas.lineWidth = 30;
                overlayCanvas.beginPath();
                overlayCanvas.moveTo(0, p.mouseY);
                overlayCanvas.lineTo(p.width, p.mouseY);
                overlayCanvas.stroke();
            }

            if(isMoving && verticallRuller && showRuller) {
                overlayCanvas.clearRect(0, 0, overlayCanvas.canvas.width, overlayCanvas.canvas.height); // Clear the overlay canvas
                overlayCanvas.strokeStyle = 'rgba(255, 255, 50, 0.5)'; // Set the color with opacity for the ruler lines
                overlayCanvas.lineWidth = 30;
                overlayCanvas.beginPath();
                overlayCanvas.moveTo(p.mouseX, 0);
                overlayCanvas.lineTo(p.mouseX, p.height);
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
                const label = `line_${lbcount++}`;
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

                }else if(firstDistanceY === 0) {
                    firstDistanceY = distance;
                    // Calculate the distance between the points
                    p.fill(255);
                    p.textSize(60);
                    p.text(`Total Distance: ${distance.toFixed(2)} = 100%, x1 = ${px}, y1 = ${py}, x2 = ${x}, y2 = ${y}`, 0, p.height - i);
                    fvx = px;
                    fvy = py;
                    fvx2 = x;
                    fvy2 = y;
                } else {
                    // Calculate the distance between the points  and the percentage of the distance compared to the first distance
                    let percentage = (distance / firstDistanceY) * 100;
                    p.text(`Distance: ${distance.toFixed(2)} = ${percentage.toFixed(2)}%, x1 = ${calculatePercentage(fx,fx2,px)}%, y1 = ${calculatePercentageY(fvy,fvy2,py)}%, x2 = ${calculatePercentage(fx,fx2,x)}%, y2 = ${calculatePercentageY(fvy,fvy2,y)}%`, 0, p.height - i);
                }

                result = {...result, [label]: {
                    x1: calculatePercentage(fx, fx2, px),
                    y1: calculatePercentageY(fvy, fvy2, py),
                    x2: calculatePercentage(fx, fx2, x),
                    y2: calculatePercentageY(fvy, fvy2, y),
                }};

                isMoving = true;
                firstPress = false;
                i += 90;

                console.log(result)
            }
        }

        // Reset values when delete key is pressed
        p.keyPressed = () => {
            if (p.key == 'Delete') {
                p.background(0);
                createImage();
                resetValues();
            }

            if (p.key == 'Enter' && !verticallRuller) {
                overlayCanvas.clearRect(0, 0, overlayCanvas.canvas.width, overlayCanvas.canvas.height); // Clear the overlay canvas
                overlayCanvas.strokeStyle = 'rgba(255, 255, 50, 0.5)'; // Set the color with opacity for the ruler lines
                overlayCanvas.lineWidth = 30;
                overlayCanvas.beginPath();
                overlayCanvas.moveTo(0, p.mouseY);
                overlayCanvas.lineTo(p.width, p.mouseY);
                overlayCanvas.stroke();
                isMoving = false;
            }

            if(p.key == 'Enter' && verticallRuller) {
                overlayCanvas.clearRect(0, 0, overlayCanvas.canvas.width, overlayCanvas.canvas.height); // Clear the overlay canvas
                overlayCanvas.strokeStyle = 'rgba(255, 255, 50, 0.5)'; // Set the color with opacity for the ruler lines
                overlayCanvas.lineWidth = 30;
                overlayCanvas.beginPath();
                overlayCanvas.moveTo(p.mouseX, 0);
                overlayCanvas.lineTo(p.mouseX, p.height);
                overlayCanvas.stroke();
                isMoving = false;
            }

            if(p.key == 'r') {
                showRuller = !showRuller;
                if(!showRuller) {
                    overlayCanvas.clearRect(0, 0, overlayCanvas.canvas.width, overlayCanvas.canvas.height); // Clear the overlay canvas
                }
            }

            if(p.key == 'v') {
                verticallRuller = !verticallRuller;
                if(verticallRuller) {
                    overlayCanvas.clearRect(0, 0, overlayCanvas.canvas.width, overlayCanvas.canvas.height); // Clear the overlay canvas
                }
            }
        }
    }

    const calculatePercentage = (x1, x2, x3) => {
        return (((x3 - x1) / (x2 - x1)) * 100).toFixed(2);
    };

    const calculatePercentageY = (y1, y2, y3) => {
        return (((y3 - y1) / (y2 - y1)) * 100).toFixed(2);
    };

})();
