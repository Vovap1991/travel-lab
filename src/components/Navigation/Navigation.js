import { NavigationList, LinkNavigation } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <LinkNavigation to="/">Про компанію</LinkNavigation>
        </li>
        <li>
          <LinkNavigation to="">Послуги</LinkNavigation>
        </li>
        <li>
          <LinkNavigation to="">Відпочинок</LinkNavigation>
        </li>
        <li>
          <LinkNavigation to="">Афіша</LinkNavigation>
        </li>
      </NavigationList>
    </nav>
  );
};
