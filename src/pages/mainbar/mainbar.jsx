import styles from "./mainbar.module.css";
import { Header } from "../main-header/mh";
import { Search } from "../searchBar/search";
import {SmallWindow} from "../filter/filter";
import { Category } from "../categories/category";
import { Profile } from "../profiles/profile";

export const MainBar = () => {
    return(
        <div className={styles.main_body}>
         <div><Header/></div>
         <div className={styles.SearchFilter}>
           <div><Search/></div>
           <div><SmallWindow/></div>
         </div>
         <div><Category/></div>
         <div className={styles.profiles}><Profile/> </div>
        </div>
    )
}