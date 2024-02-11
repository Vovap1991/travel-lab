import styled from 'styled-components';

export const ServiceInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TopImages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TopImagesItem = styled.img`
  width: calc(100% / 2 - 10px);
  border-radius: 4px;
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const BottomContentItem = styled.div`
  width: calc(50% - 10px);
  border-radius: 4px;
`;

export const ServiceInfoSubtitle = styled.h3`
  font-size: 25px;
  line-height: 1.43;
  margin-bottom: 15px;
`;

export const ServiceInfoText = styled.p`
  font-size: 15px;
  line-height: 1.43;
  margin-bottom: 15px;
`;

export const BottomSingleImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;
