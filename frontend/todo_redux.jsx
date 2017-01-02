import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("content");
  ReactDOM.render(<Root store={configureStore}/>, root);
});
