import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import {
  HeroSectionStyled,
  HeroContainer,
  HeroSectionTitle,
  HeroSectionText,
  AdvantagesList,
  AdvantagesListItem,
} from './HeroSection.styled';

export const HeroSection = ({ backgroundImage }) => {
  return (
    <HeroSectionStyled backgroundimage={backgroundImage}>
      <HeroContainer>
        <HeroSectionTitle>Ваш тревел помічник</HeroSectionTitle>
        <HeroSectionText>
          Відкрийте для себе нові горизонти разом з нами! Ми - команда
          професіоналів, готових зробити вашу подорож незабутньою. Подаруйте
          собі розкіш відпочинку, що буде наповнений дивовижними моментами та
          незабутніми враженнями.
        </HeroSectionText>
        <AdvantagesList>
          <AdvantagesListItem>
            <p>Найкращі курорту світу лише для Вас</p>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <p>Найбільша база турів та готелів</p>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <p>Вильоти з будь-якого міста світу</p>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <p>Індивідуальний підхід до клієнтів</p>
          </AdvantagesListItem>
        </AdvantagesList>
        <FeedbackForm />
      </HeroContainer>
    </HeroSectionStyled>
  );
};
