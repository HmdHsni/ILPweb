

import React, { useState } from 'react';
import Button from "../../FormComponents/Button";
import Input from '../../FormComponents/Input';
import axios from "axios"
 import UserProfile from "../UserProfile";
import Home from '../Home';
import AboutUs from '../AboutUs'
import { Routes, Route, Link,useNavigate } from "react-router-dom";
function Login (){
   const formState=useState({
     form: {
      username:{
        elementtype:"input",
        elementConfige:{
          type:"text",
          placeholder:"نام کاربری",}
        },
      password:{
        elementtype:"input",
        elementConfige:{
          type:"text",
          placeholder:"پسورد",
                 },
        value:"",
      }
     }
   }
   )
   let navigate=useNavigate()
   function submitHandler(event){
    event.preventDefault();
    //get data from state 
    const formData={};
    for(let item in formState[0].form){
      formData[item]=formState[0].form[item].value
    }
    navigate("/")
     axios.post("/api/v1/token/",formData)
    .then((response=>{
      console.log(response);
    }))
    .catch(err=>{
      console.log(err);
    })
 
  }
 
  function inputChangeHandler(event,inputElement){
      const updatedForm=formState[0].form
      //stat:form=> state:updatedform
      const updatedElement={...updatedForm[inputElement]}
  //inputElement=>email or password
      updatedElement.value=event.target.value
      updatedForm[inputElement]=updatedElement   
     
     // this.setState({form:updatedForm})
         formState[1]=updatedForm
         console.log(formState[1]);

  }
    const elementsArray=[]
     for(let item in formState[0].form){ 
       //this.state.form
      elementsArray.push({
        id:item,
        config:formState[0].form[item]
        //config:this.state.form[item]
      })
    }
    console.log(elementsArray);
    
return (
 <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-2xl font-extrabold">ورود به پنل کاربری</h2>
    <form onSubmit= {submitHandler} >
      {elementsArray.map((item)=>{
        return(
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">{item.config.elementConfige.placeholder}</label>
          <Input 
          key={item.id}
          elementtype={item.config.elementConfige}
          value={item.config.value}
          change={(event)=>inputChangeHandler(event,item.id)}/>
          </div>
        )
      })}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <Input id="remember_me" type="checkbox" className="text-red-600  focus:border-red-300"  />
          <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">به خاطر بسپار </label>
        </div>
        <a href="#" className="text-sm">رمز عبور را فراموش کرده ام</a>
      </div>
      <div className="mt-6">
           <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">ورود</button>
     
       
      </div>
      <div className="mt-6 text-center">
        <a href="#" >ایجاد حساب کاربری</a>
      </div>
    </form>
  </div>
  <Routes>
       {/* <Route path="/" exact element={<Home />}/> */}
      <Route path="/about"  element={<AboutUs />}/>
      </Routes>
</div> 

);}


export default Login;
