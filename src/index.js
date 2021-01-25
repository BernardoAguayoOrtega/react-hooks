import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [first, second] = ["Alex", "Ali", "Anna"]

console.log(first, second)

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
