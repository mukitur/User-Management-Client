import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../layout/MainRoot';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home/Home';
import AddUsers from '../Pages/AddUsers/AddUsers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/addusers',
        element: <AddUsers />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
