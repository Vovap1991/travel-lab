import { Contacts } from 'components/Contacts/Contacts';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { GlobalHeader, HeaderContainer, HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <GlobalHeader>
      <HeaderContainer>
        <Logo />
        <HeaderWrapper>
          <Navigation />
          <Contacts />
          <SocialMedia />
        </HeaderWrapper>
      </HeaderContainer>
    </GlobalHeader>
  );
};
