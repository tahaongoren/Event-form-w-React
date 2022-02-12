import propTypes from 'prop-types';
import classes from './Card.module.css';

function Card({ children }) {
  return <div className={classes.card}>{children}</div>;
}

Card.propTypes = {
  children: propTypes.element.isRequired,
};
export default Card;
