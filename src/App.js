import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState(`light `); //check the dark mode enabled or not.
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = () =>{
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Light mode has been enabled","success");
    }
      
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      <About/>
      </div>
      
    </>
  );
}

export default App;
