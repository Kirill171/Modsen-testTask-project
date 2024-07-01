import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const domNode = document.querySelector("#root");
if (domNode !== null) {
  const root = createRoot(domNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}