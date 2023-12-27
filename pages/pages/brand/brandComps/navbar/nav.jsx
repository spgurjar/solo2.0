import styles from "./nav.module.css";
import Link from 'next/link'; 
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import logo from './logo.png';
// import navBrimg from './navBr-img.png'
 
export const Nav = () => {
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

          <div className={styles.nav_br_child}>

            <div className={styles.child_br_l}>
                <div className={styles.l_br_upr}>
                    <span className={styles.msg}>Reach the Right Audience <span className={styles.clr_msg}> Grow Your Business</span> Quickly.</span> 
                </div>
                <div className={styles.l_br_lower}>
                    <div><button className={styles.join} id="join">Join Now !</button></div>
                </div>
            </div>

            <div className={styles.child_br_r}>
                <div><img className={styles.nav_br_img} src="/images/navBr-img.png" alt="" /> </div>
            </div>
          </div>
        </div>
    )
}