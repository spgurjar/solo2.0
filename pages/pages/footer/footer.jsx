import styles from "./footer.module.css";
// import logo from '../media/logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export const Footer = () => {
    return(
        <div className={styles.footer_body}>
            <div className={styles.upr_content}>
                <div className={styles.colm}>
                    <div><span className={styles.gtext}>welcome</span></div>
                    <div className={styles.ftext}><span className={styles.ftext}>about us</span></div>
                    <div className={styles.ftext}><span className={styles.ftext}>blog</span></div> 
                </div>
                <div className={styles.colm}>
                    <div><span className={styles.gtext}>brands</span></div>
                    <div className={styles.ftext}><span className={styles.ftext}>search</span></div>
                    <div className={styles.ftext}><span className={styles.ftext}>market with us</span></div> 
                </div>
                <div className={styles.colm}>
                    <div><span className={styles.gtext}>creators</span></div>
                    <div className={styles.ftext}><span className={styles.ftext}>install solo</span></div>
                    <div className={styles.icons}>
                        <img className={styles.logoImg} src = "/images/logo.png" alt ="" />
                        <FaLinkedin className={styles.icons} />
                        <FaInstagramSquare className={styles.icons}/>
                        <GrMail className={styles.icons}/>
                    </div> 
                </div>
            </div>

            <div className={styles.cp_rt}><span className={styles.copyright}>© Copyright 2023 Sol0. Powered with<span className={styles.heart}>♥</span> by <span className={styles.netz}>Netz00</span></span> </div>
        </div>
    )
}