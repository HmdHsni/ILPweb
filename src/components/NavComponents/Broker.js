
import React from "react";
import AboutUs from "./AboutUs";
// import Home from "./Home";
import { useNavigate ,Routes, Route,BrowserRouter,Link} from "react-router-dom";
function Broker() {
  let navigate=useNavigate()
  function clickHandler(){
      console.log("clickhandler");
      navigate("/")
  }
return (

<div>
<Link to="/about"  >test by Link</Link>
<h1>  this page is about brokers</h1>
 
  <button onClick={clickHandler}> test by navigate 

</button>
         
  <Routes>
  <Route path="/about" exact element={<AboutUs />}/>
  </Routes>
</div>

);
}

export default Broker;
