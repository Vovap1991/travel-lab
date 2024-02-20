import { Contacts } from 'components/Contacts/Contacts';
import { Navigation } from 'components/Navigation/Navigation';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import {
  GlobalHeader,
  HeaderContainer,
  HeaderWrapper,
  Logo,
} from './Header.styled';

export const Header = () => {
  return (
    <GlobalHeader>
      <HeaderContainer>
        <Logo to="/">TravelLAB</Logo>
        <HeaderWrapper>
          <Navigation />
          <Contacts />
          <SocialMedia />
        </HeaderWrapper>
      </HeaderContainer>
    </GlobalHeader>
  );
};
