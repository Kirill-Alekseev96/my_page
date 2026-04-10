import Header from './components/header/header';
import Home from './components/home/home';
import Skills from './components/skills/skills';
import Projects from './components/portfolio/portfolio';
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';
// import Slider from './components/slider/slider';

import {projectsData} from './mock/portfolio_data';

function App() {

  return (
    <>
      <Header/>
      <main className='page__main'>
        <Home/>
        {/* <Skills/>
        <Projects projectsData = {projectsData}/>
        <Experience/> */}
        {/* <Contact/> */}

        {/* <Slider/> */}
      </main>
    </>
  )
}

export default App
