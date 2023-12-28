import React, {useState} from "react";
import styles from "./mh.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
// import logo from '../media/logo.png';
// import { Link } from "react-router-dom";


export const Header = () => {

  const [isActive, setIsActive] = useState(false);
  
  const toggleVisibility = () => {
    setIsActive(!isActive);
  };

    return (
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
    )
}