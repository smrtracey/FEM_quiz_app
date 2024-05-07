
import sunLight from "@/assets/images/icon-sun-light.svg";
import sunDark from "@/assets/images/icon-sun-dark.svg";
import moonLight from "@/assets/images/icon-moon-light.svg";
import moonDark from "@/assets/images/icon-moon-dark.svg";

import './mainHeader.scss';

const MainHeader = ({darkModeOn, toggleDarkMode}) => {


  const handleToggle = ()=>{

    toggleDarkMode();

  }


  return (
    <header className="main-header">

      <div className="toggle-wrapper">
        {darkModeOn ? <img src = {sunLight} alt = 'light mode'/> : <img src = {sunDark} alt = 'light mode'/>}

        <div className="toggle-oval">
          <div className={`inner-circle ${darkModeOn && 'inner-circle-right'}`} onClick = {()=>handleToggle()}>

          </div>
        </div>

        {darkModeOn? <img src = {moonLight} alt = 'dark mode'/> : <img src = {moonDark} alt = 'dark mode'/>}
      </div>
    </header>
  )
}

export default MainHeader