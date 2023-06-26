import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
