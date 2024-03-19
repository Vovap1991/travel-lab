import AboutCompanyPage from 'pages/AboutCompanyPage/AboutCompanyPage';
import HomePage from 'pages/HomePage/HomePage';
import ServicePage from 'pages/ServicePage/ServicePage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutCompanyPage />}></Route>
          <Route path="service" element={<ServicePage />}></Route>
        </Route>
      </Routes>
    </>
  );
};
