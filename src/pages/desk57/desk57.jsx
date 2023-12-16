import styles from "./desk57.module.css";

import { NavHead } from "../assets/navHead/navHead";
import { AbtUs } from "./desk57Comps/abtUsGrp/abtUsGrp";
import { Para } from "./desk57Comps/abtUsPara/abtUsPara";
import { Footer57 } from "./desk57Comps/footer57/footer57";

export const Desk57 = () => {
    return(
        <div className={styles.desk57_body}>
            <div><NavHead/></div>
            <div><AbtUs/> </div>
            <div><Para/></div>
            <div className={styles.footer57}><Footer57/></div>
        </div>
    )
}