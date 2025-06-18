import './index.css';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';
import Home from './components/pages/Home';
import Collection from './components/pages/Collection';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ProductDetail from './components/pages/ProductDetail';
import PlaceOrder from './components/pages/PlaceOrder';
import Cart from './components/pages/Cart';
import { Error404 } from './components';

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
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/placeOrder/',
        element: <PlaceOrder />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
