import { useRef } from 'react'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Education_TimeLine from './components/Education_TimeLine'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {


  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}

        aboutRef={aboutRef}
        educationRef={educationRef}
        skillRef={skillRef}
        contactRef={contactRef}
        projectRef={projectRef}

      />
      <Banner />
      <About ref={aboutRef} />
      <Education_TimeLine ref={educationRef} />
      <Skills ref={skillRef} />
      <Contact ref={contactRef} />
      <Projects ref={projectRef}/>
      <Footer
        scrollToSection={scrollToSection}

        aboutRef={aboutRef}
        educationRef={educationRef}
        skillRef={skillRef}
        contactRef={contactRef}
        projectRef={projectRef}
      />

    </>
  )
}

export default App