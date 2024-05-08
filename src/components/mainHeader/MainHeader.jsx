import { useQuizContext } from "@/contexts/QuizContext";

import sunLight from "@/assets/images/icon-sun-light.svg";
import sunDark from "@/assets/images/icon-sun-dark.svg";
import moonLight from "@/assets/images/icon-moon-light.svg";
import moonDark from "@/assets/images/icon-moon-dark.svg";

import html from "@/assets/images/icon-html.svg";
import css from "@/assets/images/icon-css.svg";
import javascript from "@/assets/images/icon-js.svg";
import accessibility from "@/assets/images/icon-accessibility.svg";

import "./mainHeader.scss";

const MainHeader = ({ darkModeOn, toggleDarkMode }) => {
  const { state } = useQuizContext();

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <header
      className={`main-header ${state.selectedQuiz && "quiz-selected-header"}`}
    >
      {state.selectedQuiz && (
        <div className="main-header-left">
          <div
            className={`image-wrapper ${state.selectedQuiz.title.toLowerCase()}-header-image-wrapper`}
          >
            {state.selectedQuiz.title === "HTML" && (
              <img src={html} alt="html" />
            )}
            {state.selectedQuiz.title === "CSS" && <img src={css} alt="css" />}
            {state.selectedQuiz.title === "JavaScript" && (
              <img src={javascript} alt="javascript" />
            )}
            {state.selectedQuiz.title === "Accessibility" && (
              <img src={accessibility} alt="accessibility" />
            )}
          </div>

          <span className="header-text">{state.selectedQuiz.title} </span>
        </div>
      )}

      <div className="toggle-wrapper">
        {darkModeOn ? (
          <img src={sunLight} alt="light mode" />
        ) : (
          <img src={sunDark} alt="light mode" />
        )}

        <div className="toggle-oval">
          <div
            className={`inner-circle ${darkModeOn && "inner-circle-right"}`}
            onClick={() => handleToggle()}
          ></div>
        </div>

        {darkModeOn ? (
          <img src={moonLight} alt="dark mode" />
        ) : (
          <img src={moonDark} alt="dark mode" />
        )}
      </div>
    </header>
  );
};

export default MainHeader;
