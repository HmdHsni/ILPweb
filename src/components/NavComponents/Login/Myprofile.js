import React ,{useState} from 'react';
import Footer from '../../Footer';
import axios from "axios";
import Brokers from './Brokers';
import { Routes, Route, Link,useNavigate } from "react-router-dom";
function Myprofile(){
    const broker=useState({
        brokerList:[]
    })
    
    function userBrokersHandler(){
       const refreshToken= localStorage.getItem("refreshToken");
       axios.post('/api/token/refresh/',{ headers: {"Authorization" : `Bearer ${refreshToken}`} })
       .then(response=>{
           console.log(response);
       })
       .catch(err=>{
        console.log(err);
      })
    //    axios.get('/api/v1/broker/userbrokers/' , 
    //    { headers: {"Authorization" : `Bearer ${accessToken}`} })
    //      .then(response=>{
    //        console.log(response);
    //        let results=response.data.results;
    //        console.log("results");
    //        console.log(results.length);
    //        for(let i=0 ;i<results.length;i++){
    //          console.log(response.data.results[i].broker.name);
    //        }
           
    //      })
    //      .catch(err=>{
    //        console.log(err);
    //      })
    }
    // let navigate=useNavigate();
   
    function getBrokersHandler(){
        // navigate("/brokers")
        const accessToken= localStorage.getItem("accessToken");
        axios.get("/api/v1/broker/",{ headers: {"Authorization" : `Bearer ${accessToken}`} })
        .then((response=>{
            console.log(response);
            console.log( broker[0].brokerList);
             let results=response.data.results;
             console.log("results");
             console.log(results);
             console.log( broker[0].brokerList);
             //update state 
             broker[1]=[...results]
             console.log("state");
             console.log( broker[1]);
             console.log( broker[0].brokerList);
             broker[0].brokerList=broker[1]
             console.log( broker[0].brokerList);      
       }))
       .catch(err=>{
         console.log(err);
       })

    }
  
    return(
     <div>
           
           <div dir="rtl" className="bg-gray-100 rounded-2xl h-screen overflow-hidden relative font-body">
        <div className="flex items-start justify-start ">
   
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
                        
                            <div className="mx-4 font-normal text-lg" onClick={getBrokersHandler}>
                                 Brokers 
                            </div>
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
            {/* show Brokers On dom */}
            <div className=" h-screen flex-col hidden lg:block my-4 mr-4 shadow-lg relative w-80 bg-gray-100">
                                {
                    broker[0].brokerList.map((item)=>{
                        console.log("item");
                        console.log(item);
                        return(
                            <div className="text-center mt-20" >
                            {item.name}
                            </div> 
                        )
                    
                    })
                      }
                      </div>

            </div>
       </div>
      
     </div>
       
     
      

    )
}
export default Myprofile;