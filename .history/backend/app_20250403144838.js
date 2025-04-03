const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

// Nếu cần thiết, bật CORS để cho phép frontend truy cập (nếu chạy trên domain khác)
app.use(cors());

// Phục vụ các tệp frontend (index.html, main.js, v.v.)
app.use(express.static(path.join(__dirname, 'public')));

// Phục vụ các tệp media từ thư mục '/project/media' thông qua đường dẫn '/media'
app.use('/media', express.static(path.join(__dirname, 'project', 'media')));

// API trả về danh sách các file media (hình ảnh và video)
app.get('/api/media-files', (req, res) => {
  const mediaFolderPath = path.join(__dirname, 'project', 'media');
  fs.readdir(mediaFolderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Không thể quét thư mục media' });
    }
    // Lọc các file có phần mở rộng là hình ảnh hoặc video
    const mediaFiles = files.filter(file => file.match(/\.(jpg|jpeg|png|gif|mp4|avi|mov)$/i));
    res.json(mediaFiles);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
