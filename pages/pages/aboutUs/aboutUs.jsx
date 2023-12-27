import styles from "./aboutUs.module.css";
import { Header } from "../../../src/pages/main-header/mh";
// import { NavHead } from "../assets/navHead/navHead";
import { AbtUs } from "./aboutUsComps/abtUsGrp/abtUsGrp";
import { Para } from "./aboutUsComps/abtUsPara/abtUsPara";
import { Footer } from "../../../src/pages/footer/footer";

const AboutUs = () => {
    return(
        <div className={styles.desk57_body}>
             <div><Header/></div>
            {/* <div><NavHead/></div> */}
            <div><AbtUs/> </div>
            <div><Para/></div>
            <div className={styles.footer57}><Footer/></div>
        </div>
    )
}

export default AboutUs;