import styled from 'styled-components';

export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

export const SocialMediaListItem = styled.li`
  transition: fill var(--transition-dur-and-fun);

  &:hover svg {
    fill: var(--grey-gold);
  }
`;
