import React from "react";
import styles from './landingPage.module.css';
import { SideBar } from '../sidebar/sidebar';
import { MainBar } from '../mainbar/mainbar';
import { Footer } from '../footer/footer';

const LandingPage = () => {
    return(
        <div className={styles.landingPage_body}>
            <div className={styles.App_body_upr}>
                <div className={styles.sidebar_page}><SideBar /></div>
                <div className={styles.main_container}>
                   <div><MainBar /></div>
                   <div><Footer /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;