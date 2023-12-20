import Link from 'next/link'; 
import { useState } from "react";
import React from "react";
import styles from "./nav.module.css";

// import logo from './logo.png';
// import navImg from '../../../../../public/images/nav-img.png'
 
export const Nav = ({ onButtonClick }) => {
    const handleButtonClick = (component) => {
      onButtonClick(component);
    };

    return (
        <div className={styles.nav_body}>

          <div className={styles.header_body}>
             <img className={styles.logoImg} src = "/images/logo.png" alt ="" />
             <div className={styles.nav_items}>
                <span className={styles.nav_item}>Search</span>
                {/* <span className={styles.nav_item}>About Us</span>                */}
                <Link href="/aboutUs">
                        <span className={styles.nav_item}>About Us</span>
                    </Link>
                <span className={styles.nav_item}>Sign up</span>
                <span className={styles.nav_item}>Log in</span>
             </div>  
          </div>

          <div className={styles.nav_child}>

            <div className={styles.child_l}>
                <div className={styles.l_upr}>
                    <span className={styles.msg}>The Modern Solutions For Influencer Marketing <span className={styles.clr_msg}> We Connect Creators And Brands.</span> </span> 
                </div>
                <div className={styles.l_lower}>
                    <button  className={styles.brand} id="brand" onClick={() => handleButtonClick('brand')}>I'm a brand</button>
                    <button  className={styles.creator} id="creator" onClick={() => handleButtonClick('creator')}>I'm a creator</button>
                </div>
            </div>

            <div className={styles.child_r}>
                <div><img className={styles.nav_img} src="/images/nav-img.png" alt="" /> </div>
            </div>
          </div>
        </div>
    )
}