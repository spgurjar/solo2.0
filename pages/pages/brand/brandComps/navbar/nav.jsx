import styles from "./nav.module.css";

// import logo from './logo.png';
// import navBrimg from './navBr-img.png'
 
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