

import { BrowserRouter } from "react-router-dom"

import MainHeader from "./components/mainHeader/MainHeader";
import MainContent from './components/mainContent/MainContent';

function App() {

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        {/* QUIZ PROVIDER */}
        <MainHeader/>
        <MainContent/>
      </BrowserRouter>
    </div>
  )
}

export default App
