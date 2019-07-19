import React from 'react';
import { Navbar, Welcome, ProjectSection, Footer } from './Components'
import './App.scss';

const App: React.FC = () => {
  return (
    <article>
      <Navbar />
      <Welcome />

      <ProjectSection />
      
      <Footer />
    </article>
  );
}

export default App;