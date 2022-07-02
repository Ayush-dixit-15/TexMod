import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)

  const showAlert = (message,type) =>{
      setalert({
        msg:message,
        type:type,
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-;light')
    document.body.classList.remove('bg-;dark')
    document.body.classList.remove('bg-;danger')
    document.body.classList.remove('bg-;success')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
         setmode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled ","success");
        document.title= "TextUtils- Dark Mode";
    }
    else {
        setmode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        document.title= "TextUtils- Light Mode";
    }
}
  return (
    <>
  <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
   <Route exact path="/about">
      <About mode={mode}/>
    </Route>
    <Route exact path="/">
      <TextForm heading="enter your concern" mode={mode}  showAlert={showAlert}/>
    </Route>
    
  </Switch>
  </div> 
  </Router>
    </>
  );
}

export default App;
// {/* div.container jo hai, bootstrap ki ek class hoti hai kisse apne aap jo bhi hai container ke andar wo center me aa jaata hai */}
