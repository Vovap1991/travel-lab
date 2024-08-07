import { Advantages } from 'components/Advantages/Advantages';
import { HeroSection } from 'components/HeroSection/HeroSection';
import { PopularDestination } from 'components/PopularDestination/PopularDestination';
import { SelfBook } from 'components/SelfBook/SelfBook';

import heroBackgroundImage from '../../assets/images/heroImage.jpeg';

const HomePage = () => {
  return (
    <>
      <HeroSection backgroundImage={heroBackgroundImage} />
      <PopularDestination />
      <SelfBook />
      <Advantages />
    </>
  );
};

export default HomePage;
