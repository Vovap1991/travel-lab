import styled from 'styled-components';
import { Container } from 'components/StyledComponents/Container';

export const GlobalHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
`;

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
