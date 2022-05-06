
import React from "react";
import AboutUs from "./AboutUs";
import { Routes, Route, Link } from "react-router-dom";
function Broker() {
return (

<div>
<h1>  this page is about brokers</h1>
  <Link to="/about"  >ورود</Link>
         
  <Routes>
  <Route path="/about" exact element={<AboutUs />}/>
  </Routes>
</div>

);
}

export default Broker;
