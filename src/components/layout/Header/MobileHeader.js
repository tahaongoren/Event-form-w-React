import React from 'react';
import styled from 'styled-components';
import Logo from '../../ui/Logo';

const MobileHeader = () => (
    <MobileHeaderWrapper>
      <Logo />
    </MobileHeaderWrapper>
  )

const MobileHeaderWrapper = styled.header`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #38618c;
    padding: 10px 30px;
  }
`;
export default MobileHeader;
