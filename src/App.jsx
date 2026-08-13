import React, { useEffect, useState } from 'react';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import Contact from './pages/Contact';
import CourseDetailPage from './pages/CourseDetailPage';

function App() {
  const [route, setRoute] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const isCourseRoute = route.startsWith('/course/');
  const courseId = isCourseRoute ? route.replace('/course/', '') : null;

  return (
    <>
      <Header />
      {route === '/contact' ? <Contact /> : isCourseRoute ? <CourseDetailPage courseId={courseId} /> : <Home />}
      <Footer />
    </>
  );
}

export default App;
