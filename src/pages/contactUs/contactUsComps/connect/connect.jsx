import styles from "./connect.module.css";

import { IoMailUnreadOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
// import connectPic from './cnct-pic.png';

export const Connect = () => {
    return(
        <div className={styles.connect_body}>

            <div className={styles.connect_l}>
                <div className={styles.connect_l_upr}>
                    <div className={styles.l_u_head}>Connect with us</div>
                    <div className={styles.l_u_subhead}>Connecting stories and sparking conversations. Reach out, let's create together! 🌐✉️ #GetInTouch</div>
                </div>
                <div className={styles.connect_l_lower}>
                    <div className={styles.c_box}>
                        <div className={styles.connect_logo}><IoMailUnreadOutline/></div>
                        <div className={styles.connect_text}>info@solo.com</div>
                    </div>
                    <div className={styles.c_box}>
                        <div className={styles.connect_logo}><IoIosPhonePortrait/></div>
                        <div className={styles.connect_text}>+91 90xxxxxxxx</div>
                    </div>
                    <div className={styles.c_box}>
                        <div className={styles.connect_logo}><MdOutlineLocationOn/></div>
                        <div className={styles.connect_text}>No.7, WLDD Office , Basavanagudi, Bangalore - 60453</div>
                    </div>
                </div>
            </div>

            <div className={styles.connect_r}>
                <div className={styles.rect_box}></div>
                <div className={styles.circle_box}>
                    <div className={styles.circle1}></div>
                    <div className={styles.circle2}></div>
                    <div className={styles.circle3}></div>
                </div>
                <img className={styles.connect_pic} src="/images/cnct-pic.png" alt="" />
            </div>
        </div>
    )
}