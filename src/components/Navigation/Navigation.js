import {
  NavigationList,
  LinkNavigation,
  LinkOnlineBooking,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <LinkOnlineBooking to="/">Online Booking</LinkOnlineBooking>
        </li>
        <li>
          <LinkNavigation to="about">Про компанію</LinkNavigation>
        </li>
        <li>
          <LinkNavigation to="service">Послуги</LinkNavigation>
        </li>
        {/* <li>
          <LinkNavigation to="">Відпочинок</LinkNavigation>
        </li> */}
        {/* <li>
          <LinkNavigation to="">Афіша</LinkNavigation>
        </li> */}
      </NavigationList>
    </nav>
  );
};
