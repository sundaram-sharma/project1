import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    setText("You have clicked on handleUpclick");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    console.log("Uppercase was clicked" + text);
    setText("You have clicked on handleUpclick");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{ //this is for typing on the form
    console.log("On change");
    setText(event.target.value)
  }

  const [text,setText] = useState('Enter text here');
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
    </div>
    <div className="container my-3">
      <h1> Your text Summary</h1>
      <p> {text.split(" ").length} words and {text.length} charaters </p>
      <p> {0.008 * text.split(" ").length} Minutes Read </p> {/*multiplying the average read time with the number of words*/}
      <h2>Preview</h2>
      <p>{text}</p> {/*get the preview of the typed text by user*/}
    </div>
    </>
  )
}
