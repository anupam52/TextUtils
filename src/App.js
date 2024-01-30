import './App.css';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Textform from './components/Textform.js';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode Enabled", "success");
    }
  };

  return (
    <>
      < BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
        </Routes>
        </div>
      </ BrowserRouter>
    </>
  );
}

export default App;
