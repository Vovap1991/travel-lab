import styled from 'styled-components';
import { Container } from 'components/StyledComponents/Container';

export const HeroSectionStyled = styled.section`
  width: 100%;
  height: 800px;
  background-image: linear-gradient(
      335deg,
      rgba(0, 0, 0, 0.6083026960784313) 100%,
      rgba(70, 73, 74, 0.7819721638655462) 100%,
      rgba(0, 212, 255, 1) 100%
    ),
    url(${props => props.backgroundimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const HeroSectionTitle = styled.h1`
  font-size: 80px;
  line-height: 1.43;
`;

export const HeroSectionText = styled.p`
  font-size: 25px;
  line-height: 1.43;
  font-weight: 600;
  max-width: 800px;
`;

export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  gap: 50px;
  /* max-width: 900px; */
`;

export const AdvantagesListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  font-size: 25px;
  line-height: 1.43;
  font-weight: 600;
`;
