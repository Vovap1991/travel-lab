import sprite from '../../assets/sprite.svg';
import {
  ServiceTitle,
  ServiceList,
  ServiceListItem,
} from './OurService.styled';

export const OurService = () => {
  return (
    <>
      <ServiceTitle>Наші послуги</ServiceTitle>
      <ServiceList>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-plane`}></use>
          </svg>
          Авіаквитки
        </ServiceListItem>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-stack`}></use>
          </svg>
          Пакетні тури
        </ServiceListItem>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-user-tie`}></use>
          </svg>
          Індивідуальні тури
        </ServiceListItem>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-office`}></use>
          </svg>
          Готелі
        </ServiceListItem>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-glass2`}></use>
          </svg>
          Екзотичний відпочинок
        </ServiceListItem>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-automobile`}></use>
          </svg>
          Трансфери
        </ServiceListItem>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-group`}></use>
          </svg>
          Екскурсії
        </ServiceListItem>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-ticket`}></use>
          </svg>
          Квитки на заходи
        </ServiceListItem>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-sphere`}></use>
          </svg>
          MICE
        </ServiceListItem>
        <ServiceListItem>
          <svg width="40" height="40" fill="var(--grey-gold)">
            <use href={`${sprite}#icon-folder-plus`}></use>
          </svg>
          Медичне страхування
        </ServiceListItem>
      </ServiceList>
    </>
  );
};
