import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Work from './components/Work';
import Experience from './components/Experience';
import Approach from './components/Approach';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Nav />
      <main className="mx-auto max-w-5xl px-6 lg:px-8">
        <Hero />
        <div className="mt-14 mb-24">
          <Metrics />
        </div>
        <div className="flex flex-col gap-24 md:gap-32">
          <Work />
          <Experience />
          <Approach />
          <Writing />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
