import styles from "./contactUs.module.css";
import { Header } from "../../../src/pages/main-header/mh";
// import { NavHead } from "../assets/navHead/navHead";
import { Connect } from "./contactUsComps/connect/connect";
// import { Footer57 } from "../aboutUs/aboutUsComps/footer57/footer57";
import { Footer } from "../../../src/pages/footer/footer";

const ContactUs = () => {
    return(
        <div className={styles.desk58_body}>
            <div><Header/></div>
            {/* <div><NavHead/></div> */}
            <div><Connect/></div>
            <div className={styles.footer57}><Footer/></div>
        </div>
    )
}

export default ContactUs;