import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success")
      document.title = "Textutils(dark)"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      document.title = "Textutils(light)"

    }
  }

  const toggleGreen = ()=>{
    if(mode==='light'){
      setMode('green')
      document.body.style.backgroundColor = '#0D98BA'
      showAlert("Green mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title= "TextUtils" aboutText= "About" mode={mode} toggleGreen = {toggleGreen} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    {/* <Routes> */}
    {/* <Route path="/about" element={<About />} /> */}
    {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />} /> */}
    <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode}/>
    {/* </Routes> */}

    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
