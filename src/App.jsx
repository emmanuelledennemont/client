import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  DashboardLayout,
  Error,
  Register,
  Login,
  AddJob,
  Stats,
  AllJob,
  Profil,
  Admin 

} from './pages';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === "true";
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-jobs',
            element: <AllJob />,
          },
          {
            path: 'profile',
            element: <Profil />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
