import React from "react";
import Link from "next/link";
import { useState } from 'react';
// import styles from '../src/styles/global.css';
// import './App.module.css';
import { Home } from '../src/pages/home/home';
import { Brand } from '../src/pages/brand/brand';
import { Creator } from '../src/pages/creator/creator';

import {AboutUs} from '../src/pages/aboutUs/aboutUs';
import { ContactUs } from '../src/pages/contactUs/contactUs';

import { SideBar } from '../src/pages/sidebar/sidebar';
import { MainBar } from '../src/pages/mainbar/mainbar';
import { Footer } from '../src/pages/footer/footer';

const App: React.FC = () => {

  const [selectedComponent, setSelectedComponent] = useState('home');

  const handleButtonClick = (component: any) => {
    setSelectedComponent(component);
  };

  return (
    <div className= "App" >

       <div>{selectedComponent === 'home' && <Home onButtonClick={handleButtonClick} />}</div>
       <div>{selectedComponent === 'brand' && <Brand />}</div>
       <div> {selectedComponent === 'creator' && <Creator />}</div>

       <div><AboutUs/></div>
       <div><ContactUs/></div>

       <div className="App_body_upr">
            <div><SideBar /></div>
            <div><MainBar /></div>
          </div>
          <div><Footer /></div>
       
    </div>
  );
};

export default App;