import { AppRoute } from './const';

import Header from './components/header/header';
import Home from './components/home/home';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
// import Slider from './components/slider/slider';

import {projectsData} from './mock/portfolio_data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {

  return (
    <BrowserRouter>
      <Header/>
      <main className='page__main'>
        <Routes>
          <Route>
            <Route path={AppRoute.Home} element={<Home/>}/>
            <Route path={AppRoute.Skills} element={<Skills/>}/>
            <Route path={AppRoute.Portfolio} element={<Portfolio projectsData={projectsData}/>}/>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}
