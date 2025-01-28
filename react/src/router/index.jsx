import { createBrowserRouter } from 'react-router-dom';
import App from '../components/MainPage';
import Layout from './Layout';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Forms from '../components/Forms';
import Contact from '../components/Contact';
import OnlineServices from '../components/OnlineServices';

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
      {
        path: "/forms",
        element: <Forms />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/online-services",
        element: <OnlineServices />,
      },
    ]
  }
]);