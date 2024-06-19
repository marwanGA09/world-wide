import { Link, Outlet } from 'react-router-dom';
import PageNav from '../assets/Component/PageNav';

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>Home Page</h1>
      <Link to={'/app'}>To app page</Link> <Outlet />
    </div>
  );
}

export default HomePage;
