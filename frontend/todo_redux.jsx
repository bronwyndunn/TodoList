import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import App from './components/app.jsx';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("content");
  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  ReactDOM.render(<Root store={store} />, root);
});
