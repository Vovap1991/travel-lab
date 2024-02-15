import { Container } from 'components/StyledComponents/Container';
import { Link } from 'react-router-dom';
import {
  SelfBookSection,
  SelfBookTitle,
  SelfBookList,
  SelfBookListItem,
  SelfBookText,
} from './SelfBook.styled';

export const SelfBook = () => {
  return (
    <SelfBookSection>
      <Container>
        <SelfBookTitle>Сервіс для самостійного бронювання</SelfBookTitle>

        <SelfBookText>
          Якщо Ви полюбляєте самостійно та неквапливо обрати підходящий варіант
          та забронювати його - саме для цього ми розробили сервіс для
          самостійного бронювання. Реєструйтеся, бронюйте, сплачуйте с карти, а
          підтримка 24/7 допоможе вразі проблемної ситуаціъ. Переходьте за
          посиланням та обирайте Ваш ідеальний варіант.
        </SelfBookText>

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
