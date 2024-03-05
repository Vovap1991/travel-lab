import AboutCompanyPage from 'pages/AboutCompanyPage/AboutCompanyPage';
import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutCompanyPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};
