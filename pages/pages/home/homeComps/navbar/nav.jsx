import Link from 'next/link'; 
import { useState } from "react";
import React from "react";
import styles from "./nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

// import logo from './logo.png';
// import navImg from '../../../../../public/images/nav-img.png'
 
export const Nav = ({ onButtonClick }) => {
    const handleButtonClick = (component) => {
      onButtonClick(component);
    };

    const [isActive, setIsActive] = useState(false);
  
  const toggleVisibility = () => {
    setIsActive(!isActive);
  };

    return (
        <div className={styles.nav_body}>

<div className={styles.header_body}>
         <div> <img className={styles.logoImg} src ="/images/logo.png" alt ="" /></div>
          <div className={styles.navbar_body}>
             <Link href="/"><span className={styles.nav_item}>Search</span></Link>
             <Link href="/aboutUs">
             <span className={styles.nav_item}>About Us</span>
             </Link> 
             <Link href="/contactUs"><span className={styles.nav_item}>Contact Us</span>  </Link>          
             <Link href="/SignUp" ><span className={styles.nav_item}>Sign up</span></Link>
             <Link href="/SignIn" ><span className={styles.nav_item}>Sign in</span></Link>
          </div> 
          

          {/* ResposiveComponent  */}

          <div className={`${styles.navbar_window} ${isActive ? styles.active : ""}`}>
             <div onClick={toggleVisibility} className={styles.menuIcon}><GiHamburgerMenu/></div>
             <div className={styles.menubar_body}>
                <Link href="/"><span className={styles.nav_item}>Search</span></Link>
                <Link href="/aboutUs">
                <span className={styles.nav_item}>About Us</span>
                </Link> 
                <Link href="/contactUs"><span className={styles.nav_item}>Contact Us</span>  </Link>          
                <Link href="/SignUp" ><span className={styles.nav_item}>Sign up</span></Link>
                <Link href="/SignIn" ><span className={styles.nav_item}>Sign in</span></Link>
             </div>
          </div>

        </div>

          <div className={styles.nav_child}>

            <div className={styles.child_l}>
                <div className={styles.l_upr}>
                    <div className={styles.msg}>The Modern Solutions For Influencer Marketing <div className={styles.clr_msg}> We Connect Creators And Brands.</div> </div> 
                </div>
                <div className={styles.l_lower}>
                    <Link href="/brand"> <button className={styles.brand} id="brand" >I'm a brand</button></Link>
                    <Link href="/creator"><button className={styles.creator} id="creator" >I'm a creator</button></Link>

                    {/* <button className={styles.brand} id="brand" onClick={() => handleButtonClick('brand')}>I'm a brand</button>
                    <button className={styles.creator} id="creator" onClick={() => handleButtonClick('creator')}>I'm a creator</button> */}
                </div>
            </div>

            <div className={styles.child_r}>
                <div><img className={styles.nav_img} src="/images/nav-img.png" alt="" /> </div>
            </div>
          </div>
        </div>
    )
}