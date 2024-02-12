import { HeroSection } from 'components/HeroSection/HeroSection';
import { OurService } from 'components/OurService/OurService';
import { PopularDestination } from 'components/PopularDestination/PopularDestination';
import { Container } from 'components/StyledComponents/Container';

import heroBackgroundImage from '../../assets/images/heroImage.jpeg';

const HomePage = () => {
  return (
    <>
      <HeroSection backgroundImage={heroBackgroundImage} />
      <Container>
        <OurService />
      </Container>
      <PopularDestination />
    </>
  );
};

export default HomePage;
