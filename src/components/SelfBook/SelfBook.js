import { Container } from 'components/StyledComponents/Container';
import { Link } from 'react-router-dom';
import {
  SelfBookSection,
  SelfBookTitle,
  SelfBookList,
  SelfBookListItem,
} from './SelfBook.styled';

export const SelfBook = () => {
  return (
    <SelfBookSection>
      <Container>
        <SelfBookTitle>Сервіс для самостійного бронювання</SelfBookTitle>

        <SelfBookList>
          <SelfBookListItem>
            <Link>Готелі</Link>
          </SelfBookListItem>

          <SelfBookListItem>
            <Link>Трансфери</Link>
          </SelfBookListItem>

          <SelfBookListItem>
            <Link>Машини</Link>
          </SelfBookListItem>

          <SelfBookListItem>
            <Link>Круїзи</Link>
          </SelfBookListItem>
        </SelfBookList>
      </Container>
    </SelfBookSection>
  );
};
