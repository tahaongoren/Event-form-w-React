/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../userInterface/Card';
import classes from './NewMeetupForm.module.css';

const NewEventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const eventData = { title, image, address, description };

  const history = useHistory();

  function submitHandler() {
    onAddEvent(eventData);
    history.push('/');
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <InputWrapper>
          <label htmlFor="title"> Event Title</label>
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="img">Event Image</label>
          <input
            required
            type="url"
            id="img"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="address">Event Address</label>
          <input
            required
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="description">Event Description</label>
          <textarea
            required
            id="description"
            value={description}
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
          />
          <ButtonContainer>
            <input type="submit" />
          </ButtonContainer>
        </InputWrapper>
      </form>
    </Card>
  );
}
const InputWrapper = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 1rem;
  text-align: right;
  input:last-child {
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #77002e;
    border-radius: 4px;
    font-weight: bold;
  }
`;
export default NewEventForm;
