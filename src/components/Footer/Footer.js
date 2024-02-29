import { Logo } from 'components/Logo/Logo';
import { Messangers } from 'components/Messangers/Messangers';
import { Navigation } from 'components/Navigation/Navigation';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import {
  FooterGlobal,
  FooterContentWrapper,
  FooterContainer,
  RightsReserved,
} from './Footer.styled';

export const Footer = () => {
  return (
    <>
      <FooterGlobal>
        <FooterContainer>
          <Logo />
          <FooterContentWrapper>
            <Navigation />
          </FooterContentWrapper>
          <Messangers />
        </FooterContainer>
      </FooterGlobal>
      <RightsReserved>@2016-2024 Travel.LAB All rights reserved</RightsReserved>
    </>
  );
};
