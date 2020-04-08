import React from 'react';
import { Welcome } from './Components/Layout/Welcome'
import { Navbar } from './Components/Layout/Navbar'
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