import { useState } from "react";
import { languages } from "./data";
import "./App.css";
import react from "./assets/react.svg";

import { CSSTransition } from "react-transition-group";

const App = () => {
  let initial = {};
  languages.forEach((language) => (initial[language.name] = true));

  const [isEnter, setIsEnter] = useState(true);

  const [flags, setflags] = useState(initial);
  console.log(flags);

  const handleClick = ({ target }) => {
    const { id } = target.closest(".info-container");
    if (flags[id]) {
      setflags({ ...flags, [id]: false });
    } else {
      setflags({ ...flags, [id]: true });
    }

    setIsEnter((v) => !v);
  };

  return (
    <div className="app">
      <CSSTransition in={isEnter} timeout={4000} classNames="myclass">
        <img src={react} alt="react" className="react" />
      </CSSTransition>
      <div className="container">
        <h1>Languages</h1>
        {languages.map((item) => {
          if (flags[item.name]) {
            return (
              <div
                className={`${item.name} info-container`}
                id={item.name}
                onClick={handleClick}
                key={item.name}
              >
                <img src={item.img} alt="" />
                <p>{item.name}</p>
              </div>
            );
          } else {
            return (
              <div
                className="info-container"
                id={item.name}
                key={item.name}
                onClick={handleClick}
              >
                <ul>
                  {item.options.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default App;
