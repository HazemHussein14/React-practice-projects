import React from "react";
import classes from "./Person.module.css";

const Person = (props) => {
  return (
    <li className={classes.person}>
      <img src={props.img} alt="person" className={classes.img} />
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <p className={classes.age}>{props.age} years</p>
      </div>
    </li>
  );
};

export default Person;
