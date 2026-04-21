// sticker.js

// Function to validate sticker size
function validateStickerSize(width, height) {
    const MAX_SIZE = 500; // Example max size
    return width <= MAX_SIZE && height <= MAX_SIZE;
}

// Function to crop a sticker
function cropSticker(image, cropDimensions) {
    const { x, y, width, height } = cropDimensions;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, x, y, width, height, 0, 0, width, height);
    return canvas.toDataURL(); // Return cropped image as Data URL
}

// Example usage
const stickerImage = new Image();
stickerImage.src = 'path_to_sticker'; // Provide the valid path to sticker
stickerImage.onload = function() {
    if (validateStickerSize(stickerImage.width, stickerImage.height)) {
        const croppedImage = cropSticker(stickerImage, { x: 10, y: 10, width: 100, height: 100 });
        console.log(croppedImage); // Do something with the cropped image
    } else {
        console.error('Invalid sticker size!');
    }
};