// import React, {useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText )
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick =()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared","success")
    }
    const handleCopy = ()=>{
        var text = document.getElementById("mybox")
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard","success")

    }
    const handleOnChange = (event)=>{
        // console.log(" On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} style = {{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#042743'}} onChange= {handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>copy</button>



  </div>
  <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}} >
    <h2>Your text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
  </div>
  </>
  )
}
