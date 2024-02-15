import styled from 'styled-components';

export const AdvantagesSection = styled.section`
  background-color: var(--white);
  color: var(--black-primary);
`;

export const AdvantagesTitle = styled.h2`
  font-size: 32px;
  line-height: 35px;
  margin-bottom: 35px;
`;

export const AdvantagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const AdvantagesListItem = styled.li`
  border: 1px solid var(--black-primary);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ListItemImgTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 200px;
`;

export const Subtitle = styled.h3`
  font-size: 20px;
`;

export const Text = styled.p`
  width: 450px;
`;
