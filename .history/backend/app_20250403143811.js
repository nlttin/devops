const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const express = require('express');
const path = require('path');
const app = express();

// Phục vụ các tệp tĩnh từ thư mục '/project/media' thông qua đường dẫn '/media'
app.use('/media', express.static(path.join(__dirname, 'project', 'media')));

// Các cấu hình và route khác của bạn

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Thiết lập kết nối đến MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST || 'mysql', // tên service mysql trong docker-compose
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'filmdb'
});

// API lấy danh sách phim
app.get('/films', (req, res) => {
  db.query('SELECT * FROM films', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// API thêm phim mới
app.post('/films', (req, res) => {
  const { title, description, url } = req.body;
  db.query('INSERT INTO films (title, description, url) VALUES (?, ?, ?)', 
    [title, description, url], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.json({ id: results.insertId, title, description, url });
  });
});

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
