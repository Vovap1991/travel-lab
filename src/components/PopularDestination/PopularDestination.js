import { Container } from 'components/StyledComponents/Container';
import { Link } from 'react-router-dom';
import {
  SectionStyled,
  Title,
  List,
  ListItem,
} from './PopularDestination.styled';

export const PopularDestination = () => {
  return (
    <SectionStyled>
      <Container>
        <Title>Популярні напрямки січня</Title>
        <List>
          <ListItem>
            <h3>Мальдіви</h3>
            <p>Раа</p>
            <p>Від 3500 долл</p>
            <p>За тиждень</p>
            <Link>Докладніше</Link>
          </ListItem>
          <ListItem>
            <h3>Мальдіви</h3>
            <p>Раа</p>
            <p>Від 3500 долл</p>
            <p>За тиждень</p>
            <Link>Докладніше</Link>
          </ListItem>
          <ListItem>
            <h3>Мальдіви</h3>
            <p>Раа</p>
            <p>Від 3500 долл</p>
            <p>За тиждень</p>
            <Link>Докладніше</Link>
          </ListItem>
        </List>
      </Container>
    </SectionStyled>
  );
};
