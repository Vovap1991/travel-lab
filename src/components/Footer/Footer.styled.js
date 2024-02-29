import styled from 'styled-components';
import { Container } from 'components/StyledComponents/Container';

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterGlobal = styled.footer`
  padding-top: 30px;
  padding-bottom: 30px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightsReserved = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--black-secondary);
  font-size: 15px;
`;
