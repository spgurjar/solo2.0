import styles from "./contactUs.module.css";

import { NavHead } from "../assets/navHead/navHead";
import { Connect } from "./contactUsComps/connect/connect";
import { Footer57 } from "../aboutUs/aboutUsComps/footer57/footer57";

export const ContactUs = () => {
    return(
        <div className={styles.desk58_body}>
            <div><NavHead/></div>
            <div><Connect/></div>
            <div className={styles.footer57}><Footer57/></div>
        </div>
    )
}