import { StrictMode, useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './Pages/AppLayout';
import PageNotFound from './Pages/PageNotFound';
import Homepage from './Pages/Homepage';
import Product from './Pages/Product';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import Form from './Component/Form';
import CityList from './Component/CityList';

// import name from 'module';

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch('http://localhost:8000/cities');
      if (!res.ok) {
        throw new Error(res.statusText());
      }
      const data = await res.json();
      console.log(data);
      setCities(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

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
      children: [
        {
          index: true,
          element: <CityList isLoading={isLoading} cities={cities} />,
        },
        {
          path: 'cities',
          element: <CityList isLoading={isLoading} cities={cities} />,
        },
        {
          path: 'countries',
          element: <div>HElle countries</div>,
        },
        {
          path: 'form',
          element: <Form />,
        },
      ],
    },
  ]);

  return (
    <StrictMode>
      <RouterProvider router={route} />
    </StrictMode>
  );
}
