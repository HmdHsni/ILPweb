
import React from "react";
import Button from "../FormComponents/Button";
import Input from '../FormComponents/Input';
import axios from "axios";
class Login extends React.Component {
  state={
    form:{
        username:{
          elementtype:"input",
          elementConfige:{
            type:"text",
            placeholder:"یوزرنیم",
                   },
          value:"",
        },
        password:{
          elementtype:"input",
          elementConfige:{
            type:"text",
            placeholder:"پسورد",
                   },
          value:"",
        },

    }
  }
  inputChangeHandler(event,inputElement){
      const updatedForm={
        ...this.state.form,
      }
      //stat:form=> state:updatedform
      const updatedElement={...updatedForm[inputElement]}
  //inputElement=>email or password
      updatedElement.value=event.target.value
      updatedForm[inputElement]=updatedElement   
      this.setState({form:updatedForm})
  }
  submitHandler=(event)=>{
    event.preventDefault();
    //get data from state 
    const formData={};
    for(let item in this.state.form){
      formData[item]=this.state.form[item].value
    }
    //it works with this url in firebase 
    // axios.post("https://books-58490-default-rtdb.firebaseio.com///userData.json",formData)
    // but it has error with this url
     axios.post("http://194.147.142.172:9500/api/v1/token/",formData)
    .then((response=>{
      console.log(response);
    }))
    .catch(err=>{
      console.log(err);
    })
 

  }
  render(){
    const elementsArray=[]
    for(let item in this.state.form){
      elementsArray.push({
        id:item,
        config:this.state.form[item]
      })
    }
    console.log(elementsArray);
return (

<div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-2xl font-extrabold">ورود به پنل کاربری</h2>
    <form onSubmit={this.submitHandler}>
      {elementsArray.map((item)=>{
        return(
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">{item.config.elementConfige.placeholder}</label>
          <Input 
          key={item.id}
          elementtype={item.config.elementConfige}
          value={item.config.value}
          change={(event)=>this.inputChangeHandler(event,item.id)}/>
          </div>
        )
      })}
      {/* <div className="mb-4">
        <label className="block mb-1" htmlFor="email">ایمیل</label>
        <Input id="email" type="text" name="email"  placeholder=" ایمیل..."/>
      </div> */}
      {/* <div className="mb-4">
        <label className="block mb-1" htmlFor="password">پسورد</label>
        <Input id="password" type="password" name="password" placeholder=" پسورد ..." />
      </div> */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <Input id="remember_me" type="checkbox" className="text-red-600  focus:border-red-300"  />
          <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">به خاطر بسپار </label>
        </div>
        <a href="#" className="text-sm">رمز عبور را فراموش کرده ام</a>
      </div>
      <div className="mt-6">
        <Button >ورود</Button>
      </div>
      <div className="mt-6 text-center">
        <a href="#" >ایجاد حساب کاربری</a>
      </div>
    </form>
  </div>
</div>

);
}}

export default Login;
