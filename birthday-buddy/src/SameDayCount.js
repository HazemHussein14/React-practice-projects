import classes  from './SameDayCount.module.css'

const SameDayCount = (props) => {
  return <p className={classes.count}>{props.count} Birthday Today</p>
}

export default SameDayCount