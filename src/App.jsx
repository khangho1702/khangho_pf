import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/Header.jsx'));
const Hero = lazy(() => import('./components/Hero.jsx'));
const Project = lazy(() => import('./components/Project.jsx'));
const Skill = lazy(() => import('./components/Skill.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'))
function App() {
  return (
    <Suspense
      fallback={
        <div className='sk-folding-cube'>
          <div className='sk-cube1 sk-cube'></div>
          <div className='sk-cube2 sk-cube'></div>
          <div className='sk-cube4 sk-cube'></div>
          <div className='sk-cube3 sk-cube'></div>
        </div>
      }
    >
      <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
        <Header />
        <main>
          <Hero />
          <Experience />
          <Project />
          <Skill />
          <Contact />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
