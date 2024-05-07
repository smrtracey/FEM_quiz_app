import jsonData from "@/assets/data.json";

import htmlIcon from "@/assets/images/icon-html.svg";
import cssIcon from "@/assets/images/icon-css.svg";
import jsIcon from "@/assets/images/icon-js.svg";
import accessibilityIcon from "@/assets/images/icon-accessibility.svg";

import "./startMenu.scss";

const quizData = JSON.parse(JSON.stringify(jsonData));
const iconsArray = [htmlIcon, cssIcon, jsIcon, accessibilityIcon];

const StartMenu = () => {
  const handleCardClick = (quiz) => {
    // setSelectedQuiz.
  };

  return (
    <div className="start-menu-wrapper">
      <h1 className="main-heading">
        Welcome to the
        <span className="main-heading-bold"> Frontend Quiz!</span>
      </h1>

      <div className="start-menu-subtitle">Pick a subject to get started.</div>

      <div className="start-menu-grid">
        {quizData.quizzes.map((quiz, index) => {
          return (
            <div
              key={quiz.title}
              className="start-menu-card"
              onClick={() => handleCardClick(quiz)}
            >
              <div className={`start-card-image-wrapper card-${index}`}>
                <img src={iconsArray[index]} alt={quiz.title} />
              </div>
              <span className="start-card-text">{quiz.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StartMenu;
