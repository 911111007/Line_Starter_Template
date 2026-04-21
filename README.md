<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LINE Sticker Crop Tool</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            text-align: center;
        }
        #canvas {
            border: 1px solid #ccc;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>LINE Sticker Crop Tool</h1>
    <input type="file" id="fileInput" accept="image/*"><br><br>
    <canvas id="canvas"></canvas><br>
    <button id="cropBtn">Crop Sticker</button>
    <button id="removeBgBtn">Remove Background</button>
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const fileInput = document.getElementById('fileInput');

        fileInput.addEventListener('change', function() {
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = function() {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        document.getElementById('cropBtn').addEventListener('click', function() {
            const cropWidth = 512; // desired crop width
            const cropHeight = 512; // desired crop height
            // Implement cropping logic here
            alert('Cropping functionality not implemented yet.');
        });

        document.getElementById('removeBgBtn').addEventListener('click', function() {
            // Implement background removal logic here
            alert('Background removal functionality not implemented yet.');
        });
    </script>
</body>
</html>
