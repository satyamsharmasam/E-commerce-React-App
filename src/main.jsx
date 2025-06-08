import { Error404 } from './components';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Home from './components/pages/Home';
import Collection from './components/pages/Collection';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/collection',
        element: <Collection />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
