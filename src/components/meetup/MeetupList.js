import React from 'react';
import PropTypes from 'prop-types';
import MeetupItem from './MeetupItem';

import classes from './MeetupList.module.css';

function MeetupList({ id, title, image, address, description }) {
  return (
    <ul className={classes.list}>
      <MeetupItem
        key={id}
        id={id}
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </ul>
  );
}

MeetupList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MeetupList;
