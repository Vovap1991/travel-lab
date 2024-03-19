import styled from 'styled-components';
import { Container } from 'components/StyledComponents/Container';

export const AboutPageContainer = styled(Container)`
  width: 60%;
`;

export const AboutPageWrapper = styled.div`
  background-color: var(--white);
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const AboutPageTitle = styled.h3`
  color: var(--black-primary);
  display: flex;
  justify-content: center;
  font-size: 35px;
  line-height: 35px;
  margin-bottom: 50px;
`;

export const AboutPageText = styled.p`
  color: var(--black-primary);
  font-size: 20px;
`;

export const AboutPageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
`;
