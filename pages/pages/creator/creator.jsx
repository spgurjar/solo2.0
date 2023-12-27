import styles from "./creator.module.css";

import { Nav } from "./creatorComps/navbar/nav";
import { About } from "./creatorComps/about/about";
import { Work } from "./creatorComps/work/works";
import { Help } from "../assets/help/help";
import { Footer } from "../../../src/pages/footer/footer";

const Creator = () => {
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
export default Creator;