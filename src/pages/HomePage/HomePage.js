import { HeroSection } from 'components/HeroSection/HeroSection';
import heroBackgroundImage from '../../assets/images/heroImage.jpeg';

const HomePage = () => {
  return (
    <>
      <HeroSection backgroundImage={heroBackgroundImage} />
    </>
  );
};

export default HomePage;
