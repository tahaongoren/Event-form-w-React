import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EventItem from './EventItem';

const EventList = ({ id, title, image, address, description }) => (
    <EventItemmWrapper>
      <EventItem
        key={id}
        id={id}
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </EventItemmWrapper>
  )
const EventItemmWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
EventList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventList;
