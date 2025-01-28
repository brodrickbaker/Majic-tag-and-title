import { createBrowserRouter } from 'react-router-dom';
import App from '../components/MainPaige';
import Layout from './Layout';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services/Services';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ]
  }
]);