import React from 'react'
const Input=(props)=>{
    let InputElement=null;
    switch(props.inputtype){
        case"input":
        InputElement= <input className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " {...props}/>
        break
        default:
        InputElement= <input className="py-2 px-3 border border-gray-300 focus:border-red-300  focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm  disabled:bg-gray-100 mt-1 block w-full " {...props}/>                                    
    }                                                                 
    return(
        <div>{InputElement}</div>
    )
}
export default Input;