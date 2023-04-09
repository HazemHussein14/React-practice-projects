import classes from './Button.module.css'

const Button = (props) => {
  return <button className={classes.btn} onClick={props.onClear}>Clear All</button>
}

export default Button