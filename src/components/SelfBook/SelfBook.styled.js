import styled from 'styled-components';

export const SelfBookSection = styled.section`
  background-color: var(--grey-gold);
  color: var(--black-primary);
`;

export const SelfBookTitle = styled.h2`
  font-size: 32px;
  line-height: 35px;
  margin-bottom: 35px;
`;

export const SelfBookList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SelfBookListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  padding: 15px;
  background-color: var(--black-primary);
  color: var(--white);
  border-radius: 15px;
  font-size: 20px;
  font-weight: 500;
  transition: background-color var(--transition-dur-and-fun),
    color var(--transition-dur-and-fun);

  &:hover {
    background-color: var(--white);
    color: var(--black-primary);
  }
`;
