import { useRouteError } from 'react-router-dom';

export default function PageNotFound() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Page not found 😢</h1>
    </div>
  );
}
