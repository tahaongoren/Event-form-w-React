import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../ui/Logo';
import MobileHeader from './MobileHeader';

const Header = () => (
    <>
      <HeaderWrapper>
        <Logo />
        <NavItems>
          <NavItem>
            <Link to="/">All Events</Link>
          </NavItem>
          <NavItem>
            <Link to="new-event">Add New Event</Link>
          </NavItem>
        </NavItems>
      </HeaderWrapper>
      <MobileHeader />
    </>
  )
const HeaderWrapper = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #38618c;
  padding: 0 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItems = styled.ul`
  width: 400px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 22px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export default Header;
