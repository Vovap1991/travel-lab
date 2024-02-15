import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-size: 20px;
`;

export const LinkNavigation = styled(NavLink)`
  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--grey-gold);
  }

  /* &.active {
    color: var(--grey-gold);
  } */
`;

export const LinkOnlineBooking = styled(NavLink)`
  background-color: var(--grey-gold);
  color: var(--black-primary);
  padding: 12px;
  border-radius: 25px;
  width: 140px;
  outline: none;
  transition: background-color var(--transition-dur-and-fun);

  &:hover {
    background-color: var(--white);
  }

  /* &.active {
    color: var(--grey-gold);
  } */
`;
