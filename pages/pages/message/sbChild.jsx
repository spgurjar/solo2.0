import styles from "./sbChild.module.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import  SbChildHead  from "./sidebarComps/sbChildHead/sbChildHead";
import  SbCreator  from "./sidebarComps/sbCreator/sbCreator";
// import proPic1 from "./sidebarComps/proPic1.png";
// import prPic2 from "./sidebarComps/prPic2.png";
// import prPic3 from "./sidebarComps/prPic3.png";
// import prPic4 from "./sidebarComps/prPic4.png";

const SbChild = () => {
    const [search, setSearch] = useState("Search");

    return(
        <div className={styles.sbChildBody}>
            <div className={styles.searchBody}>
               <div className={styles.sIcon}><CiSearch/></div> 
               <input
               type="search"
               className={styles.searchInput}
               // placeholder="Search influencers by username, first name, last name, tags"
               id="search"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               />
            </div>

            <div><SbChildHead sbChildHead="Favourites" /></div>
            <div><SbCreator profilePic="proPic1" crName="Ethina Cadlin" Seen="a week ago" crDate="11/12/2023" /></div>
            <div><SbCreator profilePic="prPic2" crName="Ethina Cadlin" Seen="a week ago" crDate="11/12/2023" /></div>
            <div><SbCreator profilePic="prPic3" crName="Ethina Cadlin" Seen="a week ago" crDate="11/12/2023" /></div>

            <div><SbChildHead sbChildHead="Unread/Decision Pending"/></div>
            <div><SbCreator profilePic="prPic4" crName="Ethina Cadlin" Seen="a week ago" crDate="11/12/2023" /></div>
        </div>

    )
}
export default SbChild;