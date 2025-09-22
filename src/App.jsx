import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import './App.css'

import HomePage from './pages/HomePage';
import StrategyPage from './pages/StrategyPage';
import MisionalPage from './pages/MisionalPage';
import SupportPage from './pages/SupportPage';
import DirectionPage from './pages/DirectionPage';
import InovationPage from './pages/InovationPage';
import GestionPage from './pages/GestionPage';
import ImplementacionPage from './pages/ImplementacionPage';
import OperationPage from './pages/OperationPage';
import TechPage from './pages/TechPage';
import TransformationPage from './pages/TransformationPage';
import AdminSuppPage from './pages/AdminSuppPage';
import HumaPage from './pages/HumaPage';
import CxPage from './pages/CxPage';
import ImporvePage from './pages/ImporvePage';

const routes = [
  { path: '/', element: <HomePage /> },
  {path: "/estrategico/inicio", element: <StrategyPage/>},
  {path: "/estrategico/innovacion", element: <InovationPage/>},
  {path: "/misional/inicio" , element: <MisionalPage/>},
  {path: "/misional/comercial", element: <GestionPage/>},
  {path: "/misional/implementacion", element: <ImplementacionPage/>},
  {path: "/misional/operaciones", element: <OperationPage/>},
  {path: "/soporte/inicio", element: <SupportPage/>},
  {path: "/soporte/tecnologia", element: <TechPage/>},
  {path: "/soporte/transformacion", element: <TransformationPage/>},
  {path: "/soporte/administrativa", element: <AdminSuppPage/>},
  {path: "/soporte/humana", element: <HumaPage/>},
  {path: "/soporte/cx", element: <CxPage/>},
  {path: "/soporte/mejora", element: <ImporvePage/>},
  {path: "/estrategico/direccionamiento", element: <DirectionPage/>}
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App
