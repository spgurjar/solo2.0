import React from 'react';
import styles from "./about.module.css";

import { AbtTemp } from "../../../assets/templates/abtTemp/abtTemp";
{/* import img1 from "img1.png"; */}


export const About = () => {
    return (
        <div className={styles.about_body}>
            <div className={styles.abt_upr}>
                <AbtTemp
                    ahead1="Solo"
                    asubhead1="The best place to start through Influencer marketing."
                    ahead2="Find influencers"
                    asubhead2="Easily find perfect influencer for your brand by by searching over thousands influencers with various different filters (categories, engagement ratio, price, number of followers...)"
                />
            </div>
            <div className={styles.abt_lower_br}>
                <div><img className={styles.img} src="/images/cr-abt.png" alt='' /></div>              
            </div>
        </div>
    );
}

