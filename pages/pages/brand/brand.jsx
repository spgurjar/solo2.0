import styles from "./brand.module.css";

import { Nav } from "./brandComps/navbar/nav";
import { About } from "./brandComps/about/about";
import { Work } from "./brandComps/work/works";
import { Help } from "../assets/help/help";
import { Footer } from "../../../src/pages/footer/footer";

const Brand = () => {
    return(
        <div className={styles.home_body}>
            <div><Nav/> </div> 
            <div className={styles.About}><About/></div> 
            <div><Work/></div>  
            <div className={styles.Help}><Help/> </div>  
            <div className={styles.footer}><Footer/></div>      
        </div>
    )
}
export default Brand;