import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import axios from 'axios';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL='http://194.147.142.172:9500';
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>
 </BrowserRouter>
);


