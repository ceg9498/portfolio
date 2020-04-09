import React from 'react';
import { Navbar } from './Components/Layout/Navbar'
import { Welcome } from './Components/Layout/Welcome'
import { Skills } from './Components/Skills/Skills'
import { ProjectSection } from './Components/Projects/Projects'
import { Footer } from './Components/Layout/Footer'
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