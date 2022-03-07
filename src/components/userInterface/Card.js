import propTypes from 'prop-types';
import styled from 'styled-components';

const Card = ({ children }) => <MainWrapper>{children}</MainWrapper>

const MainWrapper = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

Card.propTypes = {
  children: propTypes.element.isRequired,
};
export default Card;
