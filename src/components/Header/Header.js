import { Contacts } from 'components/Contacts/Contacts';
import { Navigation } from 'components/Navigation/Navigation';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { HeaderContainer, HeaderWrapper, Logo } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo to="/">TravelLAB</Logo>
        <HeaderWrapper>
          <Navigation />
          <Contacts />
          <SocialMedia />
        </HeaderWrapper>
      </HeaderContainer>
    </header>
  );
};
