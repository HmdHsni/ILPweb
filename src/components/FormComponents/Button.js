import React from "react";
const Button=(props)=>{
return(
    <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition" {...props}>
        {props.children}
    </button>
)
}
export default Button;