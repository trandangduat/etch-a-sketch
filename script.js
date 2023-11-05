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
}

createSquareCanvasWithGivenLength(16);