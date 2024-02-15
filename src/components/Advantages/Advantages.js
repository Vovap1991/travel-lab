import { Container } from 'components/StyledComponents/Container';
import sprite from '../../assets/sprite.svg';
import {
  AdvantagesSection,
  AdvantagesTitle,
  AdvantagesList,
  ListItemImgTitleWrapper,
  Subtitle,
  AdvantagesListItem,
  Text,
} from './Advantages.styled';

export const Advantages = () => {
  return (
    <AdvantagesSection>
      <Container>
        <AdvantagesTitle>Travel.LAB - це...</AdvantagesTitle>
        <AdvantagesList>
          <AdvantagesListItem>
            <ListItemImgTitleWrapper>
              <svg width="70" height="70" fill="var(--grey-gold)">
                <use href={`${sprite}#icon-user-check`}></use>
              </svg>
              <Subtitle>Експертнисть та консультації</Subtitle>
            </ListItemImgTitleWrapper>
            <Text>
              Ми маємо широкі знання про різноманітні напрямки подорожей,
              готелі, перельоти та визначні атракції та надаємо цінні поради та
              рекомендації для Ваших подорожей, враховуючи ваші індивідуальні
              потреби та бюджет.
            </Text>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <ListItemImgTitleWrapper>
              <svg width="40" height="40" fill="var(--grey-gold)">
                <use href={`${sprite}#icon-table2`}></use>
              </svg>
              <Subtitle>Організація та планування</Subtitle>
            </ListItemImgTitleWrapper>
            <Text>
              Ми беремо на себе всі аспекти організації вашої подорожі,
              включаючи бронювання квитків, готелів, трансферів та екскурсій. Це
              звільняє вас від необхідності витрачати час на пошук оптимальних
              варіантів та робить процес подорожей більш зручним.
            </Text>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <ListItemImgTitleWrapper>
              <svg width="40" height="40" fill="var(--grey-gold)">
                <use href={`${sprite}#icon-glass2`}></use>
              </svg>
              <Subtitle>Ексклюзивні пропозиції</Subtitle>
            </ListItemImgTitleWrapper>
            <Text>
              Ми маємо доступ до ексклюзивних пропозицій та знижок, які можуть
              бути недоступні для простих користувачів. Вони можуть допомогти
              вам заощадити кошти на вашій подорожі або отримати додаткові
              переваги.
            </Text>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <ListItemImgTitleWrapper>
              <svg width="40" height="40" fill="var(--grey-gold)">
                <use href={`${sprite}#icon-support_agent`}></use>
              </svg>
              <Subtitle>Підтримка та супровид</Subtitle>
            </ListItemImgTitleWrapper>
            <Text>
              У разі змін у планах або несподіваних проблем під час подорожі, ми
              надаємо підтримку та допомогу. Ми асистуємо з перебронюванням
              рейсів, розміщенням у готелях або вирішенням будь-яких інших
              проблем.
            </Text>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <ListItemImgTitleWrapper>
              <svg width="40" height="40" fill="var(--grey-gold)">
                <use href={`${sprite}#icon-street-view`}></use>
              </svg>
              <Subtitle>Найактуальніша інформація</Subtitle>
            </ListItemImgTitleWrapper>
            <Text>
              Ми ділимося найактуальнішею та інсайдерською інформацією про
              локації, в яких Ви будете відпочивати, включаючи ресторани,
              пам'ятки архітектури, магазини та інші цікаві місця, про які Ви,
              можливо, навіть не знаєте.
            </Text>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <ListItemImgTitleWrapper>
              <svg width="40" height="40" fill="var(--grey-gold)">
                <use href={`${sprite}#icon-rocket`}></use>
              </svg>
              <Subtitle>Зручність та надійність</Subtitle>
            </ListItemImgTitleWrapper>
            <Text>
              Ми забезпечуєме Ваш спокій та зручність, оскільки ви доручаєте
              організацію вашої подорожі нашим професійним менеджерам, що
              відповідають за всі деталі вашого відпочинку. Це дозволить вам
              насолоджуватися мандрівкою, не турбуючись про організаційні
              моменти.
            </Text>
          </AdvantagesListItem>
        </AdvantagesList>
      </Container>
    </AdvantagesSection>
  );
};
