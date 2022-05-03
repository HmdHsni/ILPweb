
import React from "react";
import Button from "../FormComponents/Button";
import Input from '../FormComponents/Input';
function Login() {
return (

<div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-2xl font-extrabold">ورود به پنل کاربری</h2>
    <form>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">ایمیل</label>
        <Input id="email" type="text" name="email"  placeholder=" ایمیل..."/>
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">پسورد</label>
        <Input id="password" type="password" name="password" placeholder=" پسورد ..." />
      </div>
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
}

export default Login;
