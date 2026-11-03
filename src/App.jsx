import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Expertise from './components/Expertise.jsx';
import Projects from './components/Projects.jsx';
import Tools from './components/Tools.jsx';
import Roles from './components/Roles.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Tools />
        <Roles />
        <Education />
        <Contact />
      </main>
    </>
  );
}
