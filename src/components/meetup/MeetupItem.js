import React from 'react';
import propTypes from 'prop-types';
import classes from './MeetupItem.module.css';
import Card from '../userInterface/Card';

function MeetupItem(props) {
  const { image, title, address, description } = props;
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button type="submit">To Favorite</button>
        </div>
      </Card>
    </li>
  );
}

MeetupItem.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default MeetupItem;
