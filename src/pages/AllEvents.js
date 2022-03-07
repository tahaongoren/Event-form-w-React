// eslint no-nested-ternary: "error"

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventList from '../components/event/EventList';
import { H1 } from '../components/styles/Typography';
import NoEvent from '../components/ui/NoEvent';

const AllEventsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedEvents, setLoadedEvents] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-course-e0963-default-rtdb.firebaseio.com/event.json')
      .then((response) => response.json())
      .then((data) => {
        const result = Object.values(data);

        setIsLoading(false);
        setLoadedEvents(result);
      });
  }, []);
  console.log(isLoading);

  return (
    <div>
      <section>
        {loadedEvents.length >= 1 ? (
          <AllEventsWrapper>
            <H1>All Events</H1>
            {loadedEvents.map((data, i) => (
              <EventList
                key={data.id}
                id={i}
                data={data}
                title={data.title}
                image={data.image}
                address={data.address}
                description={data.description}
              />
            ))}
          </AllEventsWrapper>
        ) : (
          <NoEvent />
        )}
      </section>
    </div>
  );
};
const AllEventsWrapper = styled.ul`
  @media (max-width: 768px) {
    padding: 0 10px;
    margin: 0;
  }
`;
export default AllEventsPage;
