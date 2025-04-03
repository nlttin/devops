import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  if (!container) {
    console.error("Không tìm thấy phần tử với id 'root' trong DOM");
    return;
  }
  const root = createRoot(container);
  root.render(<App />);
});
