import React from 'react';
import CourseDetail from '../components/Section/CourseDetail';
import coursesData from '../data/coursesData';

const CourseDetailPage = ({ courseId }) => {
  const id = courseId || (typeof window !== 'undefined' ? window.location.pathname.replace('/course/', '') : null);
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <main className="container py-5">
        <h2 className="text-white">Course not found</h2>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <CourseDetail course={course} onClose={() => { window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }} />
    </main>
  );
};

export default CourseDetailPage;
