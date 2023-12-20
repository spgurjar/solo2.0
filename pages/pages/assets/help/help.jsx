import styles from "./help.module.css";

// import { Hsh } from "../templates/HsubHtemp/hsh";

export const Help = () => {
    return(
        <div className={styles.help_body}>
            <div className={styles.head}>Want to help?</div>
            <div className={styles.subHead}> We are always seeking for experts open for interview.</div>
            <div><button className={styles.get_started} id="get_started">Get Started</button> </div>
        </div>
    )
}