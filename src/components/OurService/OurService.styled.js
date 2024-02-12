import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ServiceWrapper = styled.div`
  padding-bottom: 50px;
`;

export const ServiceTitle = styled.h2`
  font-size: 32px;
  line-height: 35px;
  margin-bottom: 20px;
`;

export const ServiceList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ServiceListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 20px;
  padding: 10px;
  padding-top: 15px;
  height: 130px;
  width: 100px;
  border-radius: 12px;
  cursor: pointer;
  tabindex: 0;
  transition: border var(--transition-dur-and-fun);

  &:hover,
  &:focus {
    border: 1px solid var(--grey-gold);
  }
`;

export const ServiceListItemLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 20px;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  height: 100%;

  &.active ${ServiceListItem} {
    border: 1px solid var(--grey-gold);
  }
`;
