import { Contacts } from 'components/Contacts/Contacts';
import { Navigation } from 'components/Navigation/Navigation';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <NavLink to="/">TravelLAB</NavLink>
        <Navigation />
        <Contacts />
        <SocialMedia />
      </HeaderContainer>
    </header>
  );
};
