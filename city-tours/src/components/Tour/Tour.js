import { useState } from "react";
import "./Tour.scss";

const Tour = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const showInfoHandler = () => {
    setShowInfo((prevState) => !prevState);
  };

  const removeTourHandler = () => {
    setIsRemoved(true);
  };

  let content;

  if (!isRemoved) {
    content = (
      <article className="tour">
        <div className="img-container">
          <img src={props.img} alt={props.city} />
          <span className="close-btn" onClick={removeTourHandler}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{props.city}</h3>
          <h4>{props.name}</h4>
          <h5>
            info
            <span onClick={showInfoHandler}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {showInfo && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis
            </p>
          )}
        </div>
      </article>
    );
  }

  return content;
};

export default Tour;
