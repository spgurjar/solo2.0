"use client"
import React from "react";
import styles from "./sidebar.module.css";
import { useState } from "react";
import {SbContent} from "./sb-content";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { SbChild } from "./sbChild";

export const SideBar = () => {
  const [showChild, setShowChild] = useState(false);

  const toggleVisibility = () => {
   setShowChild(!showChild);
 };

 return(  
   <div className={`${styles.sb_body} ${showChild ? styles.active : ""}`} >

      {/* // <div className={`sb_body ${showChild ? "active" : ""}`}> */}
      <div>
         <div className={styles.soloHead}>Solo</div>
         <div className={styles.upperSB}> 
            <SbContent logo = {<FaGlobeAmericas/>} text = "Discover"/>
            <div onClick={toggleVisibility}><SbContent logo = {<MdOutlineMessage/>} text = "Messages"  /></div>
            <SbContent logo = {<IoMdContact/>} text = "Top 100 Creatores"/>
         </div>

         <div className={styles.lowerSB}> 
            <SbContent logo = {<IoIosHelpCircleOutline/>} text = "Help"/>
            <SbContent logo = {<CgProfile/>} text = "Profile"/>
         </div>
      </div>

      <div className={styles.SbChildContainer}>
           <SbChild/>
      </div>
    </div>
    
 );
};