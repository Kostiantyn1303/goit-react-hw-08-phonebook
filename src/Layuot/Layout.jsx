import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar/AppBar';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, createContext } from 'react';
export const Context = createContext();
const Layout = () => {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleRedirect = path => {
    setShouldRedirect(true);
    setTimeout(() => {
      navigate(path);
      setShouldRedirect(false);
    }, 300);
  };
  return (
    <>
      <Context.Provider
        value={{
          handleRedirect,
          shouldRedirect,
        }}
      ></Context.Provider>
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
