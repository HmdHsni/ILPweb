import React from "react";
import { BrowserRouter as Router ,Routes, Route,useNavigate,Link} from "react-router-dom";
import AboutUs from "../NavComponents/AboutUs";
import Broker from "../NavComponents/Broker";
import Home from "../NavComponents/Home";
import Login from "../NavComponents/Login/Login";
import Contact from "../NavComponents/Contact";
  function Navbar() {
let navigate=useNavigate();
function loginHandler(){
  let access = localStorage.getItem("accessToken");
  let refresh=localStorage.getItem("refreshToken");
  if(access && refresh){
    navigate("/")
  }
  else{
    navigate("/userlog")
  }
}
  return (
<div>
<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-6 w-6" viewBox="0 0 24 24" fill="#000"><path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37"/></svg>
    <Link  to="contactPage" className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> ارتباط با ما </Link>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button >
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="about" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        درباره ما
      </Link>
      <Link to="broker" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
    کارگزار    
      </Link>
      <Link  to="/"href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        صفحه اصلی
      </Link>
    </div>
    <div>
      {/* <link to="/userlog"></link> */}
      <button onClick={loginHandler} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">ورود</button>
    </div>
  </div>
</nav>
<Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about"  element={<AboutUs />}/>
      <Route path="/broker"  element={<Broker />}/>
      <Route path="/userlog"  element={<Login />}/>
      <Route path="/contactPage"  element={<Contact />}/>
      </Routes>
{/* </Router> */}
     
</div>



  );
}

 export default Navbar;


