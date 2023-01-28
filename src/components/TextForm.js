import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase(); //to Upper the text
    setText(newText);
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase(); //to lower the text
    setText(newText);
  }

  const handleClearClick = ()=>{ // to clear the
    let newText = "";
    setText(newText);
  }

  const handleCapsClick = ()=>{ // convert first letter to capital
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
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
    <div className="container">
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Example text area</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    
    </div>
    <button className='btn btn-primary mx-1'onClick={handleUpClick}>Convert to Upper case</button>
    <button className='btn btn-primary mx-1'onClick={handleLoClick}>Convert to Lower case</button>
    <button className='btn btn-primary mx-1'onClick={handleClearClick}>Clear Text</button>
    <button className='btn btn-primary mx-1'onClick={handleCapsClick}>Capital first letter</button>
    </div>
    <div className="container my-3">
      <h2> Your text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} charaters </p>
      <p> {0.008 * text.split(" ").length} Minutes Read </p> {/*multiplying the average read time with the number of words*/}
      <h2>Preview</h2>
      <p>{text}</p> {/*get the preview of the typed text by user*/}
    </div>
    </>
  )
}
