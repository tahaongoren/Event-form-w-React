import React from 'react';
import NewEventForm from '../components/event/NewEventForm';
import Card from '../components/userInterface/Card';

const NewEventPage = () => {
  const addEventHandler = (eventData) => {
    fetch(
      'https://react-course-e0963-default-rtdb.firebaseio.com/event.json',
      {
        method: 'POST',
        body: JSON.stringify(eventData),
      },
    );
  };
  return (
    <Card>
      <NewEventForm onAddEvent={addEventHandler} />
    </Card>
  );
}

export default NewEventPage;
