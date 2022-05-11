import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import axios from 'axios';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AboutUs from './components/NavComponents/AboutUs';
import Myprofile from './components/NavComponents/Login/Myprofile';
import { Routes, Route } from "react-router-dom";
import Brokers from './components/NavComponents/Login/Brokers';
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL='http://194.147.142.172:9500';
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <App />
    <Routes>
       {/* <Route path="/" exact element={<Home />}/> */}
      <Route path="/AboutUs"  element={<AboutUs />}/>
      <Route path="/myprofile"  element={<Myprofile />}/>
      <Route path="/brokers"  element={<Brokers />}/>
      <Route path="/userLogin"     element={<Myprofile />}/>
      </Routes>
  </React.StrictMode>
 </BrowserRouter>
);


