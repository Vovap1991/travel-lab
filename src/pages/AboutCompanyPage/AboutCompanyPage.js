import { Advantages } from 'components/Advantages/Advantages';
import {
  AboutPageWrapper,
  AboutPageTitle,
  AboutPageText,
  AboutPageTextWrapper,
  AboutPageContainer,
} from './AboutCompanyPage.styled';

const AboutCompanyPage = () => {
  return (
    <AboutPageWrapper>
      <AboutPageContainer>
        <AboutPageTitle>Про Travel.LAB</AboutPageTitle>
        <AboutPageTextWrapper>
          <AboutPageText>
            Запрошуємо вас на захоплюючу подорож через найкрасивіші країни та
            екзотичні куточки нашої планети разом з нами! Наші двері відчинені
            для тих, хто мріє відкрити світ та насолодитися неповторними
            моментами подорожей.
          </AboutPageText>
          <AboutPageText>
            За роки роботи ми накопичили вражаючий досвід та збільшили свої
            знання в галузі туризму, щоб забезпечити вам найкращі умови для
            відпочинку. Наша команда - це колектив досвідчених професіоналів,
            які докладають всіх зусиль, щоб кожна ваша подорож була
            найяскравішою та незабутньою.
          </AboutPageText>
          <AboutPageText>
            У нашому розмаїтому портфелі ви знайдете тури на будь-який смак та
            бюджет. Від розкішних відпочинків на білосніжних пляжах до
            захоплюючих відкриттів у старовинних містах - ми маємо все необхідне
            для створення вашої мрії про подорож.
          </AboutPageText>
          <AboutPageText>
            Ми не лише пропонуємо тури, ми створюємо відмінний сервіс, який вас
            приємно здивує. Ми готові вислухати ваші побажання та індивідуальні
            запити, щоб зробити вашу подорож найкращою та найкомфортнішою.
          </AboutPageText>
          <AboutPageText>
            Не вагайтесь вибирати нас, адже ми готові зробити все, щоб ваша
            подорож стала незабутньою та наповненою враженнями. Разом з нами ви
            отримаєте можливість насолодитися кожною миттю вашого подорожного
            шляху!
          </AboutPageText>
        </AboutPageTextWrapper>
      </AboutPageContainer>
      <Advantages />
    </AboutPageWrapper>
  );
};

export default AboutCompanyPage;
