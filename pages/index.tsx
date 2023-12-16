import React from "react";
import { useState } from 'react';
// import styles from '../src/styles/global.css';
// import './App.module.css';
import { Home } from '../src/pages/home/home';
import { Brand } from '../src/pages/brand/brand';
import { Creator } from '../src/pages/creator/creator';

import { Desk57 } from '../src/pages/desk57/desk57';
import { Desk58 } from '../src/pages/desk58/desk58';

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

       <div><Desk57/></div>
       <div><Desk58/></div>
    </div>
  );
};

export default App;