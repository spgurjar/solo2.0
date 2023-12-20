import styles from "./aboutUs.module.css";

import { NavHead } from "../assets/navHead/navHead";
import { AbtUs } from "./aboutUsComps/abtUsGrp/abtUsGrp";
import { Para } from "./aboutUsComps/abtUsPara/abtUsPara";
import { Footer57 } from "./aboutUsComps/footer57/footer57";

const AboutUs = () => {
    return(
        <div className={styles.desk57_body}>
            <div><NavHead/></div>
            <div><AbtUs/> </div>
            <div><Para/></div>
            <div className={styles.footer57}><Footer57/></div>
        </div>
    )
}

export default AboutUs;