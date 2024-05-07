
import {useState} from 'react';
import { BrowserRouter } from "react-router-dom"

import MainHeader from "./components/mainHeader/MainHeader";
import MainContent from './components/mainContent/MainContent';

function App() {

  const [darkModeOn, setDarkModeOn] = useState(false);

  const toggleDarkMode = ()=>{
    setDarkModeOn(!darkModeOn);
  }


  return (
    <div className={`app-wrapper ${darkModeOn && 'dark-mode-app-wrapper'}`}>
      <BrowserRouter>
        {/* QUIZ PROVIDER */}
        <MainHeader darkModeOn={darkModeOn} toggleDarkMode={toggleDarkMode}/>
        <MainContent/>
      </BrowserRouter>
    </div>
  )
}

export default App
