<<<<<<< HEAD
# LINE 貼圖裁切工具（Web）\n\n本專案為一款 **Web 版 LINE 貼圖裁切與規格校驗工具**
=======
# LINE 貼圖裁切工具

一個免費、快速、易用的網頁工具，用於批量裁切和調整 LINE 貼圖的尺寸。

## 功能特性

✨ **兩種裁切模式**
- 貼圖尺寸：370x320 像素
- 聊天室圖：96x74 像素

📦 **批量處理**
- 一次上傳最多 10 張圖片
- 批量下載為 ZIP 文件

🎨 **易用體驗**
- 點擊或拖曳上傳圖片
- 實時預覽和裁切調整
- 支援 PNG 和 JPEG 格式

## 使用方法

1. 在瀏覽器中打開 `index.html` 文件
2. 選擇裁切模式（貼圖或聊天室圖）
3. 點擊上傳區域或拖曳圖片到上傳區
4. 調整每張圖片的裁切框位置和大小
5. 點擊「下載 ZIP」下載所有裁切完成的圖片

## 技術棧

- [CropperJS](https://fengyuanchen.github.io/cropperjs/) - 圖片裁切
- [JSZip](https://stuk.github.io/jszip/) - ZIP 文件生成

## 支援格式

- PNG (`.png`)
- JPEG (`.jpg`, `.jpeg`)

## 浏覽器相容性

支援所有現代瀏覽器（Chrome、Firefox、Safari、Edge）

## 許可證

Open Source
    return;
  }

  const zip = new JSZip();

  for (let i = 0; i < croppers.length; i++) {
    const canvas = croppers[i].getCroppedCanvas({
      width: mode.w,
      height: mode.h
    });

    const blob = await new Promise(res => canvas.toBlob(res));
    zip.file(`sticker_${i + 1}.png`, blob);
  }

  const content = await zip.generateAsync({ type: "blob" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(content);
  a.download = "line_stickers.zip";
  a.click();
};

document.getElementById("clearBtn").onclick = () => {
  preview.innerHTML = "";
  croppers = [];
};
</script>

</body>
</html>
>>>>>>> 80a0a73 (911111007428)
