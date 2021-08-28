
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === `light`){
      setMode(`dark`);
      document.body.style.backgroundColor=`#042743`;
      showAlert("Dark Mode has been Enabled", "success");
//       document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing App";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils App Now";
      // }, 1500);
    }else{
      setMode(`light`);
      document.body.style.backgroundColor=`white`;
      showAlert("Light Mode has been Enabled", "success");
//       document.title = "TextUtils-Light Mode";
    }
    
  }
  return (
  <>
 {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
 {/* <Router> */}
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
 {/* {<Navbar/>} */}
<Alert alert={alert} />

<div className="container my-5">
{/* <Switch> */}
          {/* users-->-Component-1
          users/home-->-->-Component-2 */}
          {/* <Route exact path="/about">
            <About mode={mode} />
          </Route> */}
          {/* <Route exact path="/"> */}
          <Textform heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert} />
          {/* </Route> */}
{/* </Switch> */}
</div>
{/* </Router> */}
{/* <About /> */}

 
  </>
  );
}

export default App;
