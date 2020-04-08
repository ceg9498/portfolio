import React from 'react';
import { Navbar, Welcome } from './Components/Components'
import { ProjectSection } from './Components/projectSection'
import { Skills } from './Components/Skills'
import './App.scss';

const App: React.FC = () => {
  return (
    <article id="portfolio-article">
      <Navbar />
      <Welcome />
      <Skills />
      <ProjectSection />
    </article>
  );
}

export default App;