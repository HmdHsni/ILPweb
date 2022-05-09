import React from 'react';
import Footer from '../../Footer';
import axios from "axios";
function Myprofile(){
    function userBrokersHandler(){
       const accessToken= localStorage.getItem("accessToken");
       axios.get("/api/v1/broker/userbrokers/",accessToken)
       .then((response=>{
        console.log(response);
      }))
      .catch(err=>{
        console.log(err);
      })
      
    }
    function getBrokersHandler(){
        const accessToken= localStorage.getItem("accessToken");
        axios.get("/api/v1/broker/",accessToken)
        .then((response=>{
         console.log(response);
       }))
       .catch(err=>{
         console.log(err);
       })

    }
    return(
       
           <div dir="rtl" className="bg-gray-100 rounded-2xl h-screen overflow-hidden relative font-body">
        <div className="flex items-start justify-between">
            <div className="h-full hidden lg:block my-4 mr-4 shadow-lg relative w-80 ">
                <div className="bg-white h-screen rounded-2xl">
                    <div className="flex items-center justify-center pt-6">
                    <div  className="w-full font-light text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-l from-white to-blue-100 border-l-4 border-blue-500">
                        <span className="mx-4 font-normal text-lg">
                             پنل کاربری 
                        </span>
                        </div>
                    </div>
                    <nav className="pt-6">
                        <div>
                        <a href="#" className="w-full font-light text-blue-500 flex  justify-between items-center p-4 my-2 ">
                        
                            <span className="mx-4 font-normal text-lg" onClick={getBrokersHandler}>
                                 Brokers 
                            </span>
                            <span className="text-left">
                        <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                            </span>
                            </span>
                            </a>
                            <div  className="w-full font-light text-blue-500 flex  justify-between items-center p-4 my-2 ">
                        
                            <span className="mx-4 font-normal text-lg cursor-pointer" onClick={userBrokersHandler}>
                                 userBrokers 
                            </span>
                            <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                            </span>
                            </div>
                            <a href="#" className="w-full font-light text-blue-500 flex justify-between items-center p-4 my-2">
                        
                        <span className="mx-4 font-normal text-lg">
                             order
                        </span>
                        <span className="text-left ">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        </span>
                        </a>
                            <a href="#" className="w-full font-light text-blue-500 flex justify-between items-center p-4 my-2">
                        
                            <span className="mx-4 font-normal text-lg">
                                 orders 
                            </span>
                            <span className="text-left ">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                            </span>
                            </a>
                        
                        </div>
                    </nav>
                </div>
              
            </div>
        </div>
       </div>
       
     
      

    )
}
export default Myprofile;