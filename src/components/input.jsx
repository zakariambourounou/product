
import React from 'react'

 function Input ({placeholder , value ,onChange}){

   return <div>
    <input type="text" 
    className='  w-64
    border-solid border-2 border-sky-500'
    value={value}
    placeholder={placeholder} 
    onChange={(e)=> onChange(e.target.value)}/>
    
   </div>
}
export default Input