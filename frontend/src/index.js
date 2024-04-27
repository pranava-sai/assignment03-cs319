import React from 'react';
import ReactDOM from 'react-dom/client';
import Frontend_English from './team76_english.js';
import Frontend_Telugu from './team76_telugu.js';
import Frontend_Hindi from './team76_hindi.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Frontend_English />
    {/* <Frontend_Telugu /> */}
    {/* <Frontend_Hindi /> */}
  </React.StrictMode>
);