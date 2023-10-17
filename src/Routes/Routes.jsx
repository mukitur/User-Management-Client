import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../layout/MainRoot';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home/Home';
import AddUsers from '../Pages/AddUsers/AddUsers';
import UpdateUser from '../Pages/UpdateUser/UpdateUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5500/users'),
      },
      {
        path: '/addusers',
        element: <AddUsers />,
      },
      {
        path: '/updateUser/:id',
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:5500/users/${params.id}`),
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
