import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './Pages/AppLayout';
import PageNotFound from './Pages/PageNotFound';
import Homepage from './Pages/Homepage';
import Product from './Pages/Product';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <PageNotFound />,
    children: [],
  },
  {
    path: 'product',
    element: <Product />,
  },
  {
    path: 'pricing',
    element: <Pricing />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'App',
    element: <AppLayout />,
  },
]);

export default function App() {
  return (
    <StrictMode>
      <RouterProvider router={route} />
    </StrictMode>
  );
}
