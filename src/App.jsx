import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Error from './Pages/Error';
import Products from './Pages/Products';
import Pricing from './Pages/Pricing';
import AppLayout from './Pages/AppLayout';

const route = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
    ],
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
