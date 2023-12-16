import styles from "./desk58.module.css";

import { NavHead } from "../assets/navHead/navHead";
import { Connect } from "./desk58Comps/connect/connect";
import { Footer57 } from "../desk57/desk57Comps/footer57/footer57";

export const Desk58 = () => {
    return(
        <div className={styles.desk58_body}>
            <div><NavHead/></div>
            <div><Connect/></div>
            <div className={styles.footer57}><Footer57/></div>
        </div>
    )
}