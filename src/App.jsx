import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

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
import SagrilaftPage from './pages/SagrilaftPage';
import TransparencyPage from './pages/TransparencyPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './utils/LogoutPage';
import DataPage from './pages/DataPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AccountsPage from './pages/AccountsPage';

const routes = [
  // Login público
  { path: '/', element: <LoginPage /> },

  // Todo lo demás protegido
  { path: '/home', element: <ProtectedRoute><HomePage /></ProtectedRoute> },
  { path: '/estrategico/inicio', element: <ProtectedRoute><StrategyPage/></ProtectedRoute> },
  { path: '/estrategico/innovacion', element: <ProtectedRoute><InovationPage/></ProtectedRoute> },
  { path: '/misional/inicio', element: <ProtectedRoute><MisionalPage/></ProtectedRoute> },
  { path: '/misional/comercial', element: <ProtectedRoute><GestionPage/></ProtectedRoute> },
  { path: '/misional/implementacion', element: <ProtectedRoute><ImplementacionPage/></ProtectedRoute> },
  { path: '/misional/operaciones', element: <ProtectedRoute><OperationPage/></ProtectedRoute> },
  { path: '/soporte/inicio', element: <ProtectedRoute><SupportPage/></ProtectedRoute> },
  { path: '/soporte/tecnologia', element: <ProtectedRoute><TechPage/></ProtectedRoute> },
  { path: '/soporte/transformacion', element: <ProtectedRoute><TransformationPage/></ProtectedRoute> },
  { path: '/soporte/administrativa', element: <ProtectedRoute><AdminSuppPage/></ProtectedRoute> },
  { path: '/soporte/humana', element: <ProtectedRoute><HumaPage/></ProtectedRoute> },
  { path: '/soporte/cx', element: <ProtectedRoute><CxPage/></ProtectedRoute> },
  { path: '/soporte/mejora', element: <ProtectedRoute><ImporvePage/></ProtectedRoute> },
  { path: '/estrategico/direccionamiento', element: <ProtectedRoute><DirectionPage/></ProtectedRoute> },
  { path: '/sagrilaft', element: <ProtectedRoute><SagrilaftPage/></ProtectedRoute> },
  { path: '/transparencia', element: <ProtectedRoute><TransparencyPage/></ProtectedRoute> },
  {path: "/proteccion-datos", element: <ProtectedRoute><DataPage/></ProtectedRoute>},
  {path:"/cuentas", element: <ProtectedRoute><AccountsPage/></ProtectedRoute>},
  { path: '/logout', element: <LogoutPage /> }
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
