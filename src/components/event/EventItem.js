import propTypes from 'prop-types';
import styled from 'styled-components';
import classes from './MeetupItem.module.css';
import Card from '../userInterface/Card';

const EventItem = (props) => {
  const { image, title, address, description } = props;
  return (
    <li className={classes.item}>
      <Card>
        <>
          <EventImageContainer className={classes.image}>
            <EventImg src={image} alt={title} />
          </EventImageContainer>
          <EventInfoContainer className={classes.content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
          </EventInfoContainer>
        </>
      </Card>
    </li>
  );
}

const EventImageContainer = styled.div`
  width: 100%;
  max-height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #eee;
`;

const EventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const EventInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  height: 100%;
`;

EventItem.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default EventItem;
