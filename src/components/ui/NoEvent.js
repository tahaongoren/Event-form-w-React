import React from 'react';
import { Link } from 'react-router-dom';
import { H1 } from '../styles/Typography';

const NoEvent = () => (
    <>
      <H1>No Event</H1>
      <Link to="/new-event">Lets create a new event!</Link>
    </>
  )

export default NoEvent;
