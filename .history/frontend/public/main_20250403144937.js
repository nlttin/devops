document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/media-files')
      .then(response => response.json())
      .then(files => {
        const container = document.getElementById('media-container');
        files.forEach(file => {
          // Lấy phần mở rộng của file
          const ext = file.split('.').pop().toLowerCase();
          let element;
          if (['mp4', 'avi', 'mov'].includes(ext)) {
            // Tạo phần tử video
            element = document.createElement('video');
            element.src = '/media/' + file;
            element.controls = true;
          } else {
            // Tạo phần tử image cho các định dạng ảnh
            element = document.createElement('img');
            element.src = '/media/' + file;
          }
          const wrapper = document.createElement('div');
          wrapper.className = 'media-item';
          wrapper.appendChild(element);
          container.appendChild(wrapper);
        });
      })
      .catch(err => console.error('Lỗi khi tải danh sách media:', err));
  });
  