import React, { useEffect, useState } from 'react';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import Contact from './pages/Contact';

function App() {
  const [route, setRoute] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <>
      <Header />
      {route === '/contact' ? <Contact /> : <Home />}
      <Footer />
    </>
  );
}

export default App;
