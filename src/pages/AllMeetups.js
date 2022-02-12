import React from 'react';
import MeetupList from '../components/meetup/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of !',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of !',
  },
];
function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meet Ups</h1>
      <ul>
        {DUMMY_DATA.map((data) => (
          <MeetupList
            key={data.id}
            id={data.id}
            data={data}
            title={data.title}
            image={data.image}
            address={data.address}
            description={data.description}
          />
        ))}
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
