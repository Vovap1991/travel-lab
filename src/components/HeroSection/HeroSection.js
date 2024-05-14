import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import {
  HeroSectionStyled,
  HeroContainer,
  HeroSectionTitle,
  HeroSectionText,
  AdvantagesList,
  AdvantagesListItem,
} from './HeroSection.styled';

import sprite from '../../assets/sprite.svg';

export const HeroSection = ({ backgroundImage }) => {
  return (
    <HeroSectionStyled backgroundimage={backgroundImage}>
      <HeroContainer>
        <HeroSectionTitle>Ваш тревел помічник</HeroSectionTitle>
        <HeroSectionText>
          Відкрийте для себе нові горизонти разом з нами! Ми - команда
          професіоналів, готових зробити вашу подорож незабутньою. Подаруйте
          собі розкіш відпочинку, що буде наповнена дивовижними моментами та
          незабутніми враженнями.
        </HeroSectionText>
        <AdvantagesList>
          <AdvantagesListItem>
            <svg width="40" height="40" fill="var(--grey-gold)">
              <use href={`${sprite}#icon-tick`}></use>
            </svg>
            <p>Найкращі курорту світу лише для Вас</p>
          </AdvantagesListItem>

          <AdvantagesListItem>
            <svg width="40" height="40" fill="var(--grey-gold)">
              <use href={`${sprite}#icon-tick`}></use>
            </svg>
            <p>Вильоти з будь-якого міста світу</p>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <svg width="40" height="40" fill="var(--grey-gold)">
              <use href={`${sprite}#icon-tick`}></use>
            </svg>
            <p>Індивідуальний підхід до клієнтів</p>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <svg width="40" height="40" fill="var(--grey-gold)">
              <use href={`${sprite}#icon-tick`}></use>
            </svg>
            <p>Найбільша база турів та готелей</p>
          </AdvantagesListItem>
        </AdvantagesList>
        <FeedbackForm />
      </HeroContainer>
    </HeroSectionStyled>
  );
};
