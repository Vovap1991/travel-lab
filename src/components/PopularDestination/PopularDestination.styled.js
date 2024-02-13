import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionStyled = styled.section`
  background-color: var(--white);
  color: var(--black-primary);
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 35px;
  margin-bottom: 35px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  width: calc(100% / 3);
  height: 350px;
  background-size: cover;
  color: var(--white);
  font-size: 20px;
  line-height: 1.43;
  font-weight: 500;
  border-radius: 8px;
  padding: 10px 10px 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;

export const ListItemPartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Subtitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
`;

export const HotelName = styled.p`
  font-size: 20px;
`;

export const Location = styled.p`
  font-size: 18px;
`;

export const Price = styled.p`
  font-size: 23px;
  font-weight: 800;
`;

export const Duration = styled.p`
  font-size: 20px;
`;

export const AddInfo = styled(Link)`
  background-color: var(--grey-gold);
  padding: 7px;
  border-radius: 25px;
  outline: none;
  color: var(--black-primary);
  font-size: 18px;
`;
