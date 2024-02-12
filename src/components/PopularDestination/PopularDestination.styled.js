import styled from 'styled-components';
import bgImage from '../../assets/images/heroImage.jpeg';

export const SectionStyled = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: var(--white);
  color: var(--black-primary);
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 35px;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  width: calc(100% / 3);
  height: 300px;
  background-image: url(${bgImage});
  color: var(--white);
  font-size: 20px;
  line-height: 1.43;
  font-weight: 500;
  border-radius: 8px;
  padding: 10px;
`;
