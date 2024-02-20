import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactsListItem = styled.li`
  font-size: 17px;
  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--grey-gold);
  }
`;
