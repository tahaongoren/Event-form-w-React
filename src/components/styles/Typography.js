/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
  padding: 0;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 26px;
  }
`;
