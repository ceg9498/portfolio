import React from 'react';
import { Navbar, Welcome, Footer } from './Components/Components'
import { ProjectSection } from './Components/projectSection'
import './App.scss';

const App: React.FC = () => {
  return (
    <article id="portfolio-article">
      <Navbar />
      <Welcome />

      <ProjectSection />
      
      <Footer />
    </article>
  );
}

export default App;