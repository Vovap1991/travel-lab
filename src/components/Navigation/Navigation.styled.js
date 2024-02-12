import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-size: 20px;
`;

export const LinkNavigation = styled(NavLink)`
  &:hover {
    color: var(--grey-gold);
  }

  /* &.active {
    color: var(--grey-gold);
  } */
`;
