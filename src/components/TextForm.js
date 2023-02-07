import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase(); //to Upper the text
    setText(newText);
    props.showAlert("converted to Uppercase!","success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase(); //to lower the text
    setText(newText);
    props.showAlert("converted to Lowercase!","success");
  }

  const handleClearClick = ()=>{ // to clear the
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the text!","success");
  }

  const handleCapsClick = ()=>{ // convert first letter to capital
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("converted to capital letter","success");
  }

  const handleCopy = () =>{
    var textTemp = document.getElementById("myBox"); //getting the value from the element
    textTemp.select(); //select the whole text
    navigator.clipboard.writeText(textTemp.value); //copy the value to clipboard
    props.showAlert("Copied to clipboard!","success");

  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces!","success");
  }

  const handleOnChange = (event)=>{ //this is for typing on the form
    console.log("Typing...");
    setText(event.target.value)
  }



  const [text,setText] = useState('');
  //text = "New text"; //Wrong way to change the state
  //setText("new text"); //Correct way to change the state   

  return (
    <>
    <div className="container" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
    <h1 >{props.heading} </h1>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Text area</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    
    </div>
    <button className='btn btn-primary mx-1'onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1'onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1'onClick={handleClearClick}>Clear Text</button>
    <button className='btn btn-primary mx-1'onClick={handleCapsClick}>Capital first letter</button>
    <button className='btn btn-primary mx-1'onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary mx-1'onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
      <h2> Your text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} charaters </p>
      <p> {0.008 * text.split(" ").length} Minutes Read </p> {/*multiplying the average read time with the number of words*/}
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview"}</p> {/*get the preview of the typed text by user*/}
    </div>
    </>
  )
}
