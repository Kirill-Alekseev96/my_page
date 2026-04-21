import { AppRoute } from './const';

import Header from './components/header/header';
import Home from './components/home/home';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import ParticlesScene from './components/Particles/ParticlesScene';

import {projectsData} from './mock/portfolio_data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {

  return (
    <BrowserRouter>
      <ParticlesScene/>
      <Header/>
      <main className='page__main'>
        <Routes>
          <Route path={AppRoute.Home} element={<Home/>}/>
          <Route path={AppRoute.Skills} element={<Skills/>}/>
          <Route path={AppRoute.Portfolio} element={<Portfolio projectsData={projectsData}/>}/>
        </Routes>
        
      </main>
      
    </BrowserRouter>
  )
}
