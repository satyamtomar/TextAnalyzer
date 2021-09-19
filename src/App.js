//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import Tform from './components/Tform';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [switchcolor,setswitchcolor]=useState('')
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
       setAlert(null)
    },3000)
  }
  const enabledarkmode= ()=>{
    if(mode==='light')
    {
      setMode('dark');
      setswitchcolor('text-light');
      document.body.style.backgroundColor='#091323';
      showAlert('dark mode has been enabled','success')
      document.title='TextUtils-dark mode'
    }
    else
    {
    setMode('light');
    setswitchcolor('');
    document.body.style.backgroundColor='white'
    showAlert('light mode has been enabled','success')
    document.title='TextUtils-light mode'
    }

  }
  
  return (
    <div className="App">
        <Router>
        <Navbar title="TextAnalyzer" mode={mode} enabledarkmode={enabledarkmode} switchcolor={switchcolor}></Navbar>
         <Alert  alert={alert}/>
         <div className="container my-3">
         <Switch>
          <Route exact path="/about">
            <About  mode={mode} enabledarkmode={enabledarkmode}/>
          </Route>
         
          <Route exact path="/">
          <Tform  heading="Enter a text to analyze" mode={mode} showAlert={showAlert} alert={alert}></Tform>
         
          </Route>
        </Switch>
         
         </div>
         </Router>

    </div>
  );
}

export default App;
