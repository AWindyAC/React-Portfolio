import React from 'react';
import { Home, Contact, About } from './components';
import Project from './Project';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'project':
        return <Project />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <div>{renderPage()}</div>
    </section>
  );
}
export default Page;
