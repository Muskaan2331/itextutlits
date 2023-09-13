import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

  


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    
    
          
            {/* <About /> */}
          
          
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          
   <h1>My Name is muskaan</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aperiam minima iure deleniti quas blanditiis corrupti nihil hic! Fugiat eaque reprehenderit suscipit non eos velit iure porro natus voluptate soluta.</p>
    </div>
    
    </> 
  );
}

export default App;
