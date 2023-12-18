import styles from "./userType.module.css";
import { Link } from "react-router-dom";
import upic from "./upic.png";
import adminIcon from "./adminIcon.png";
import brandIcon from "./brandIcon.png";

export const UserType = () => {
    return(
        <div className={styles.typeboxBody}>
            <div className={styles.typebox}>
                <div><img className={styles.userPic} src="/images/upic.png" /></div>
                <div className={styles.que}>who is using the account?</div>
                <Link to="/adminCreds" className={styles.link} ><img src="/images/adminIcon.png" className={styles.adminIcon} /><div className={styles.adminBtn}>Admin</div></Link>
                <Link to="/brandCreds" className={styles.link} ><img src="/images/brandIcon.png" className={styles.brandIcon} /><div className={styles.brandBtn}>Brand</div></Link>
                <div className={styles.userNote}>Admin accounts are exclusive to company employees. Others can use brand profiles to connect with creators or launch campaigns.</div>
            </div>
        </div>
    )
}