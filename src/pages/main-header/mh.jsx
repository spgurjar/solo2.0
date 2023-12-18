import styles from "./mh.module.css";
// import logo from '../media/logo.png';
// import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <div className={styles.header_body}>
          <img className={styles.logoImg} src ="/images/logo.png" alt ="" />
          <div className={styles.navbar_body}>
             <span className={styles.nav_item}>Search</span>
             <span className={styles.nav_item}>About Us</span> 
             <span className={styles.nav_item}>Contact Us</span>            
             {/* <Link to="/signUp" className={styles.signBtn}><span className={styles.nav_item}>Sign up</span></Link> */}
             {/* <Link to="/signIn" className={styles.signBtn}><span className={styles.nav_item}>Sign in</span></Link> */}
             <span className={styles.nav_item}>Sign up</span>
             <span className={styles.nav_item}>Sign in</span>
          </div>  
        </div>
    )
}