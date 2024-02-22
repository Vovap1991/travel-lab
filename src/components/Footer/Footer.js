import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { Container } from 'components/StyledComponents/Container';
import { FooterGlobal, HeaderContentWrapper } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterGlobal>
      <Container>
        <HeaderContentWrapper>
          <Logo />
          <Navigation />
          <SocialMedia />
        </HeaderContentWrapper>
      </Container>
    </FooterGlobal>
  );
};
