import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root')); // Не знаю как пофиксить "Аргумент типа "HTMLElement | null" нельзя назначить параметру типа "Container". Тип "null" не может быть назначен для типа "Container".ts(2345)."
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);