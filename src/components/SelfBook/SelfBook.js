import { Container } from 'components/StyledComponents/Container';
import { Link } from 'react-router-dom';
import {
  SelfBookSection,
  SelfBookTitle,
  SelfBookList,
  SelfBookListItem,
  SelfBookText,
  SelfBookImgWrapper,
  SelfBookImg,
} from './SelfBook.styled';

import selfOne from '../../assets/images/selfBook/selfOne.jpeg';
import selfTwo from '../../assets/images/selfBook/selfTwo.jpeg';

export const SelfBook = () => {
  return (
    <SelfBookSection>
      <Container>
        <SelfBookTitle>Сервіс для самостійного бронювання</SelfBookTitle>
        <SelfBookImgWrapper>
          <SelfBookImg src={selfOne} alt="image" />
          <SelfBookImg src={selfTwo} alt="image" />
        </SelfBookImgWrapper>

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
