import React, { useState } from 'react'

export default function Textforms(props) {

   const [text,TextArea] = useState("")

   const handleUpper=()=>{
       let newText = text.toUpperCase();
       TextArea(newText);
   } 

   const handleLower=()=>{
    let newText = text.toLowerCase();
    TextArea(newText);
} 
 
const handleClear=()=>{
    let newText = ''
    TextArea(newText);
} 
   const handleChange =(event)=>{
   TextArea(event.target.value);
   }

   const handleCopy =()=>{
      var text = document.getElementById('myBox');
      navigator.clipboard.writeText(text.value)
   }

   const handleSpaces =()=>{
       let newText = text.split(/[ ]+/);
       TextArea(newText.join(" "))
   }

   
      
  return (
   <>   
    <div className="container my-3 ">
    <h1>{props.heading}</h1>
  <div className="mb-3">        
    <textarea className="form-control" id="myBox" rows="8" style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'grey':'white' }} value={text} onChange={handleChange}></textarea>
  </div>
   <button className="btn btn-secondary mx-3"  onClick={handleUpper}>Convert to uppercase </button>
   <button className="btn btn-success mx-3"  onClick={handleLower}>Convert to lowercase </button>
   <button className="btn btn-warning mx-3"  onClick={handleClear}>Clear Text </button>
   <button className="btn btn btn-dark mx-3"  onClick={handleCopy}>Copy Text </button>
   <button className="btn btn btn-dark mx-3"  onClick={handleSpaces}>remove spaces</button>
  </div>
  <div className="container my-1">
    <h2>your text summary</h2>
    <p>{text.split(" ").length} words {text.length} characters </p>
  </div>
  <div className="container my-1"> 
      <h2> Preview </h2>
      <p> {text} </p>
  </div>
  </>
  )
}
