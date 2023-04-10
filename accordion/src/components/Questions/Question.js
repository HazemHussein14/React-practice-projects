import classes from "./Question.module.css";
import { useState } from "react";

const Question = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const btnSign = isHidden ? "+" : "-";

  const showAnswerHandler = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <li className={classes.question}>
      <div>
        <p className={classes.content}>{props.question}</p>
        <button className={classes.btn} onClick={showAnswerHandler}>
          {btnSign}
        </button>
      </div>
      {!isHidden && <p className={classes.answer}>{props.answer}</p>}
    </li>
  );
};

export default Question;
