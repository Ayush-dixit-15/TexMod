import React, { useState } from 'react';


export default function TextForm(props) {
    
    const [text, setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        console.log("Upper case was clicked" +text);
        let newText= text.toUpperCase();
        
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleOnChange = ()=>{
        console.log("Onchange");
        setText(event.target.value);
    }
    const handleDownClick = () =>{
        console.log("Lower case was clicked"+text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }
    
// here, what it says is that the text is a variable and it should have a default value 'Enter text here' and , I will always update the text using setText
   // text="new text";
   //it is the wrong way to change the value of the text
   //Right way
//    setText("new text");
  return (
    <>
        <div className="container" style={{color:props.mode==='dark' ?'white' : 'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea name="" id="mybox" cols="30" rows="10" className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ?'grey' : 'white',color:props.mode==='dark' ?'white' : 'black'}}></textarea>
            </div>
            <button diabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button diabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleDownClick} >Convert to Lowercase</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark' ?'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{
           return element.length!==0;
        }).length} words and {text.length} characters</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{
           return element.length!==0;
        }).length} Minutes read</p>
        </div>
    </>  
  )
}
 