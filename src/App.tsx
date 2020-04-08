import React from 'react';
import { Navbar, Welcome } from './Components/Layout/Components'
import { Footer } from './Components/Layout/Footer'
import { ProjectSection } from './Components/Projects/Projects'
import { Skills } from './Components/Skills/Skills'
import './App.scss';

const App: React.FC = () => {
  return (
    <article id="portfolio-article">
      <Navbar />
      <Welcome />
      <Skills />
      <ProjectSection />
      <Footer />
    </article>
  );
}

export default App;