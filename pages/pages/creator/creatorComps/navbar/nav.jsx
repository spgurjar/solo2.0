import styles from "./nav.module.css";

// import logo from './logo.png';
// import navCrimg from './navCr-img.png'
 
export const Nav = () => {
    return (
        <div className={styles.nav_body}>

          <div className={styles.header_body}>
             <div><img className={styles.logoImg} src = "/images/logo.png" alt ="" /></div>
             <div className={styles.nav_items}>
                <span className={styles.nav_item}>Search</span>
                <span className={styles.nav_item}>About Us</span>
                <span className={styles.nav_item}>Sign up</span>
                <span className={styles.nav_item}>Log in</span>
             </div>  
          </div>

          <div className={styles.nav_cr_child}>

            <div className={styles.child_cr_l}>
                <div className={styles.l_cr_upr}>
                    <span className={styles.msg}><span className={styles.clr_msg}>Monetize your influence</span> Connect with brands and monetize your influence.</span> 
                </div>
                <div className={styles.l_cr_lower}>
                    <div><button className={styles.app_btn} id="app_btn">App Coming soon</button></div>
                </div>
            </div>

            <div className={styles.child_cr_r}>
                <div><img className={styles.nav_cr_img} src="/images/navCr-img.png" alt="" /> </div>
            </div>
          </div>
        </div>
    )
}