import styles from "./navHead.module.css";

// import logo from './logo.png';
 
export const NavHead = () => {
    return (
        <div className={styles.nav_body}>
          <div className={styles.header_body}>
             <img className={styles.logoImg} src = "/images/logo.png" alt ="" />
             <div className={styles.nav_items}>
                <span className={styles.nav_item}>Search</span>
                <span className={styles.nav_item}>About Us</span>
                <span className={styles.nav_item}>Sign up</span>
                <span className={styles.nav_item}>Log in</span>
             </div>  
          </div>
        </div>
    )
}