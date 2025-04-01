import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [films, setFilms] = useState([]);
  
  useEffect(() => {
    // Lưu ý: Đổi địa chỉ URL backend nếu cần (ví dụ sử dụng tên container hoặc domain)
    axios.get('http://localhost:3000/films')
      .then(response => setFilms(response.data))
      .catch(error => console.error('Error fetching films:', error));
  }, []);
  
  return (
    <div>
      <h1>Danh sách phim</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <p>{film.description}</p>
            <a href={film.url} target="_blank" rel="noopener noreferrer">Xem phim</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
