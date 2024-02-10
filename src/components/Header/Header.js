import { Contacts } from 'components/Contacts/Contacts';
import { Navigation } from 'components/Navigation/Navigation';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <NavLink to="/">TravelLAB</NavLink>
        <HeaderWrapper>
          <Navigation />
          <Contacts />
          <SocialMedia />
        </HeaderWrapper>
      </HeaderContainer>
    </header>
  );
};
