// 狀態變量
let currentCanvas = null;
let currentImage = null;

// 初始化事件監聽
document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    const cropButton = document.getElementById('cropButton');
    const canvas = document.getElementById('canvas');
    
    imageInput.addEventListener('change', handleImageUpload);
    cropButton.addEventListener('click', handleCropImage);
});

// 處理圖片上傳
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            currentImage = img;
            const canvas = document.getElementById('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            currentCanvas = canvas;
            
            clearFeedback();
            showSuccess("圖片已上傳！點擊 '裁剪圖片' 開始編輯。");
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// 裁剪圖片
function handleCropImage() {
    if (!currentCanvas) {
        showWarning("請先上傳圖片");
        return;
    }
    
    checkPadding(currentCanvas);
    
    // 自動下載裁剪後的圖片
    const link = document.createElement('a');
    link.href = currentCanvas.toDataURL('image/png');
    link.download = 'cropped_sticker.png';
    link.click();
}

/// 檢查圖片是否留有 10px 邊距
function checkPadding(canvas) {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const padding = 10;
    
    let isTooClose = false;
    
    // 檢查四周 10 像素內是否有非透明像素 (Alpha > 0)
    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            if (x < padding || x > canvas.width - padding || y < padding || y > canvas.height - padding) {
                const alpha = data[(y * canvas.width + x) * 4 + 3];
                if (alpha > 0) {
                    isTooClose = true;
                    break;
                }
            }
        }
    }
    
    if (isTooClose) {
        showWarning("問題：物體離邊緣太近。建議：請稍微縮小或移動圖片。");
    } else {
        showSuccess("邊距檢查通過！");
    }
}

// 顯示成功訊息
function showSuccess(message) {
    const feedback = document.getElementById('validationFeedback');
    feedback.textContent = "✓ " + message;
    feedback.className = 'success';
}

// 顯示警告訊息
function showWarning(message) {
    const feedback = document.getElementById('validationFeedback');
    feedback.textContent = "⚠ " + message;
    feedback.className = 'error';
}

// 清除反饋訊息
function clearFeedback() {
    const feedback = document.getElementById('validationFeedback');
    feedback.className = '';
    feedback.textContent = '';
}
}