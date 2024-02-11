import sprite from '../assets/sprite.svg';
import imageOne from '../assets/images/serviceImages/lady-business-class.jpeg';
import imageTwo from '../assets/images/serviceImages/jet.jpeg';
import imageThree from '../assets/images/serviceImages/plane-salon.jpeg';

export const services = [
  {
    id: 1,
    title: 'Пакетні тури',
    image: `${sprite}#icon-stack`,
    data: {
      imageOne: imageOne,
      imageTwo: imageTwo,
      subtitle: 'Авіаквитки',
      text: 'Тут буде скоро текст',
      imageThree: imageThree,
    },
  },
  {
    id: 2,
    title: 'Індивідуальні тури',
    image: `${sprite}#icon-user-tie`,
    text: 'b',
  },
  { id: 3, title: 'Готелі', image: `${sprite}#icon-office`, text: 'c' },
  {
    id: 4,
    title: 'Екзотичний відпочинок',
    image: `${sprite}#icon-glass2`,
    text: 'd',
  },
  { id: 5, title: 'Авіаквитки', image: `${sprite}#icon-plane`, text: 'e' },
  { id: 6, title: 'Трансфери', image: `${sprite}#icon-automobile`, text: 'f' },
  { id: 7, title: 'Екскурсії', image: `${sprite}#icon-group`, text: 'g' },
  {
    id: 8,
    title: 'Квитки на заходи',
    image: `${sprite}#icon-ticket`,
    text: 'h',
  },
  { id: 9, title: 'MICE', image: `${sprite}#icon-sphere`, text: 'i' },
  {
    id: 10,
    title: 'Медичне страхування',
    image: `${sprite}#icon-folder-plus`,
    text: 'j',
  },
];
