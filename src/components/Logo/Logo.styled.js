import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoStyled = styled(NavLink)`
  color: var(--white);
  font-size: 30px;
  &:hover {
    color: var(--grey-gold);
  }
`;
