import styles from './category.module.css';
// import travel from "./catImages/travel.png";
// import sports from "./catImages/sports.png";
// import marketing from "./catImages/marketing.png";
// import family from "./catImages/family.png";
// import fashion from "./catImages/fashion.png";
// import podcast from "./catImages/podcast.png";
// import news from "./catImages/news.png";

import { Catbox } from './catBox';

export const Category = () => {
    return(
        <div className={styles.cat_body}>
            <div className={styles.cat_head}>
                <span className={styles.cat_heading}>Search by category</span>
            </div>
           <div className={styles.cat_content}>
             
               <div><Catbox catImg = "travel" catName = "Travel" /></div>
               <div><Catbox catImg = "sports" catName = "Sports"/></div>
               <div><Catbox catImg = "marketing" catName = "Marketing"/></div>
               <div><Catbox catImg = "family" catName = "Family"/></div>
               <div><Catbox catImg = "fashion" catName = "Fashion"/></div>
               <div><Catbox catImg = "podcast" catName = "Podcast"/></div>
               <div><Catbox catImg = "news" catName = "News"/></div>

             
           </div>
        </div>
    )
}