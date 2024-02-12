import { Container } from 'components/StyledComponents/Container';
import {
  SectionStyled,
  Title,
  List,
  ListItem,
  Subtitle,
  HotelName,
  Location,
  Price,
  Duration,
  AddInfo,
  ListItemPartWrapper,
} from './PopularDestination.styled';
import { popularDestinations } from '../../db/PopularDest';

export const PopularDestination = () => {
  return (
    <SectionStyled>
      <Container>
        <Title>Популярні напрямки січня</Title>
        <List>
          {popularDestinations.map(dest => (
            <ListItem
              key={dest.id}
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              <ListItemPartWrapper>
                <Subtitle>{dest.title}</Subtitle>
                <Price>Від {dest.price} грн</Price>
              </ListItemPartWrapper>
              <ListItemPartWrapper>
                <HotelName>{dest.hotel}</HotelName>
                <Duration>За тиждень</Duration>
              </ListItemPartWrapper>
              <ListItemPartWrapper>
                <Location>{dest.location}</Location>
                <AddInfo>Докладніше</AddInfo>
              </ListItemPartWrapper>
    
            </ListItem>
          ))}
        </List>
      </Container>
    </SectionStyled>
  );
};
