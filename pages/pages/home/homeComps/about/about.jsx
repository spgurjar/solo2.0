
import styles from "./about.module.css";

import { AbtTemp } from "../../../assets/templates/abtTemp/abtTemp";;
{/* import abt1 from "abt1.png"; */}
{/* import abt2 from "abt2.png"; */}
{/* import abt3 from "abt3.png"; */}
{/* import abt4 from "abt4.png"; */}
{/* import abt5 from "abt5.png"; */}

export const About = () => {
    return(
        <div className={styles.about_body}>
            <div className={styles.abt_upr}><AbtTemp
               ahead1 = "Solo"
               asubhead1 = " The best place to learn about your audience, connect with brands and monetize your influence."
               ahead2 = "End_to_End influencer marketing solution"
               asubhead2 = "Solo provides plenty of features to to help brands and creators, such as creator search, chat, job contracts, live tracking of statistics, job validation..."
            /></div>
            <div className={styles.abt_lower}>
                <div className={styles.abt_img}><img className={styles.abt1} id="abt1" src="/images/abt1.png" /></div>
                <div className={styles.abt_img}><img className={styles.abt2} id="abt2" src="/images/abt2.png" /></div>
                <div className={styles.abt_img}><img className={styles.abt3} id="abt3" src="/images/abt3.png" /></div>
                <div className={styles.abt_img}><img className={styles.abt4} id="abt4" src="/images/abt4.png" /></div>
                <div className={styles.abt_img}><img className={styles.abt5} id="abt5" src="/images/abt5.png" /></div>
            </div>
        </div>
    )
}