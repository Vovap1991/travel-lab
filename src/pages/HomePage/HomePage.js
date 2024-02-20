import { Advantages } from 'components/Advantages/Advantages';
import { Footer } from 'components/Footer/Footer';
import { HeroSection } from 'components/HeroSection/HeroSection';
import { OurService } from 'components/OurService/OurService';
import { PopularDestination } from 'components/PopularDestination/PopularDestination';
import { SelfBook } from 'components/SelfBook/SelfBook';
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
      <SelfBook />
      <Advantages />
      <Footer />
    </>
  );
};

export default HomePage;
