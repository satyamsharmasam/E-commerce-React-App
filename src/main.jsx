import './index.css';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { lazy, StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';
const Home = lazy(() => import('./components/pages/Home'));
const Collection = lazy(() => import('./components/pages/Collection'));
const About = lazy(() => import('./components/pages/About'));
const Contact = lazy(() => import('./components/pages/Contact'));
const ProductDetail = lazy(() => import('./components/pages/ProductDetail'));
const PlaceOrder = lazy(() => import('./components/pages/PlaceOrder'));
const Cart = lazy(() => import('./components/pages/Cart'));
const Error404 = lazy(() => import('./components/Error404'));
const CartItem = lazy(() => import('./components/CartItem'));

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
      {
        path: '/cartitem',
        element: <CartItem />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
