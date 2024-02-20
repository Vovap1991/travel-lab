import sprite from '../../assets/sprite.svg';
import { SocialMediaList, SocialMediaListItem } from './SocialMedia.styled';

export const SocialMedia = () => {
  return (
    <SocialMediaList>
      <SocialMediaListItem>
        <a
          href="https://www.facebook.com/Traveldnepr"
          target="_blanc"
          rel="noopener noreferrer nofollow"
        >
          <svg width="30" height="30" fill="white">
            <use href={`${sprite}#icon-facebook`}></use>
          </svg>
        </a>
      </SocialMediaListItem>
      <SocialMediaListItem>
        <a
          href="https://www.instagram.com/travel.lab_tour/"
          target="_blanc"
          rel="noopener noreferrer nofollow"
        >
          <svg width="30" height="30" fill="white">
            <use href={`${sprite}#icon-instagram`}></use>
          </svg>
        </a>
      </SocialMediaListItem>
    </SocialMediaList>
  );
};
