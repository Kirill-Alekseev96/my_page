import { AppRoute } from './const';

import Header from './components/header/header';
import Home from './components/home/home';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import ParticlesScene from './components/Particles/ParticlesScene';

import {projectsData} from './mock/portfolio_data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


export default function App() {

  const [color, setColor] = useState('#ffffff');

  function toggleTheme () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      if (isDark) {
          document.documentElement.setAttribute('data-theme', 'light')
          setColor('#000000');
      } else {
          document.documentElement.setAttribute('data-theme', 'dark')
          setColor('#ffffff');
      }
  }

  return (
    <BrowserRouter  basename="/my_page/">
      <ParticlesScene key={color} color = {color}/>
      <Header toggleTheme = {toggleTheme}/>
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
