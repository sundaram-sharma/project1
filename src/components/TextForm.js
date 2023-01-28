import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    setText("You have clicked on handleUpclick");
    let newText = text.toUpperCase();
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
    <h1>{props.heading} - {text}</h1>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Example textarea</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary'onClick={handleUpClick}>Convert to upper case</button>
    </div>
    <div className="container my-2">
      <h1> Your text Summary</h1>
      <p1> 12312 words and 3214123 charaters </p1>

    </div>
    </>
  )
}
