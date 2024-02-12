import styled from 'styled-components';
import { Container } from 'components/StyledComponents/Container';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const Logo = styled(NavLink)`
  font-size: 30px;
  &:hover {
    color: var(--grey-gold);
  }
`;
