import {
  ServiceInfoWrapper,
  TopImages,
  TopImagesItem,
  BottomContent,
  BottomContentItem,
  BottomSingleImage,
  ServiceInfoSubtitle,
  ServiceInfoText,
} from './ServiceInfo.styled';

import { SecondaryButton } from 'components/StyledComponents/SecondaryButton';

export const ServiceInfo = ({ data }) => {
  return (
    <ServiceInfoWrapper>
      <TopImages>
        <TopImagesItem src={data.imageOne} alt={data.title}></TopImagesItem>
        <TopImagesItem src={data.imageTwo} alt={data.title}></TopImagesItem>
      </TopImages>

      <BottomContent>
        <BottomContentItem>
          <ServiceInfoSubtitle>{data.subtitle}</ServiceInfoSubtitle>
          <ServiceInfoText>{data.text}</ServiceInfoText>
          <SecondaryButton>ЗАЛИШИТИ ЗАПИТ</SecondaryButton>
        </BottomContentItem>
        <BottomContentItem>
          <BottomSingleImage
            src={data.imageThree}
            alt={data.title}
          ></BottomSingleImage>
        </BottomContentItem>
      </BottomContent>
    </ServiceInfoWrapper>
  );
};
