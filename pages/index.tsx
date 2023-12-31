"use client"
import React from "react";
import Link from "next/link";
import { useState } from 'react';
// import styles from '../src/styles/global.css';
// import './App.module.css';
import  Home  from './pages/home/home';
import  Brand  from './pages/brand/brand';
import  Creator  from './pages/creator/creator';

// import {AboutUs} from '../src/pages/aboutUs/aboutUs';
import { ContactUs } from '../src/pages/contactUs/contactUs';
import  LandingPage  from '../src/pages/landingPage/landingPage';
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
       {/* <div>{selectedComponent === 'brand' && <Brand />}</div>
       <div> {selectedComponent === 'creator' && <Creator />}</div> */}

       {/* <div><AboutUs/></div> */}
       {/* <div><ContactUs/></div> */}
     
       {/* <div><LandingPage/> </div> */}
       
       {/* <div className="App_body_upr">
            <div><SideBar /></div>
            <div className="main_container">
              <div><MainBar /></div>
              <div><Footer /></div>
            </div>
            
          </div> */}
          
       
    </div>
  );
};

export default App;