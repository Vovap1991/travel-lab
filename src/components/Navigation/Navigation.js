import { NavLink } from 'react-router-dom';
import { NavigationList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <NavLink to="/">Про компанію</NavLink>
        </li>
        <li>
          <NavLink to="/">Послуги</NavLink>
        </li>
        <li>
          <NavLink to="/">Відпочинок</NavLink>
        </li>
        <li>
          <NavLink to="/">Афіша</NavLink>
        </li>
      </NavigationList>
    </nav>
  );
};
