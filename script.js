let canvas = document.getElementById('grid');

function createSquareCanvasWithGivenLength (L) {
    let pixelLength = 100 / L;
    for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
            let squarePixel = document.createElement('div');
            squarePixel.setAttribute("style", `
                                                flex-basis: ${pixelLength}%;
                                                aspect-ratio: 1/1;
                                            `);
            canvas.appendChild(squarePixel);
        }
    }
    draw();
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (!mouseDown) return;
    e.target.style.backgroundColor = 'black';
}

function draw() {
    let allPixels = document.querySelectorAll("#grid div");
    allPixels.forEach((pixel) => pixel.onmouseover = changeColor);
}

// console.log("hihiiii");
createSquareCanvasWithGivenLength(50);