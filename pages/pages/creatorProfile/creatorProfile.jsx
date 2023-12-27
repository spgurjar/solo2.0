import styles from "./creatorProfile.module.css";
import  DetailBox  from "./profileComps/prDetailBox/prDetailBox";
import { SideBar } from "../sidebar/sidebar";
import  Collab  from "./profileComps/collabs/collabs";
import  Calci  from "./profileComps/calci/calci";
import { Footer } from "../../../src/pages/footer/footer";
// import { Footer } from "../footer/footer";
// import profilePic from "./profileComps/prAssets/prPic.png";
// import vdoImg from "./profileComps/prAssets/vdo.png";
// import P1 from "./profileComps/prAssets/P1.png";
// import P2 from "./profileComps/prAssets/P2.png";
// import P3 from "./profileComps/prAssets/P3.png";
// import P4 from "./profileComps/prAssets/P4.png";
// import vdoSrc from "./profileComps/prAssets/vdoSrc.mp4"



const CreatorProfile = () => {
    return(
        <div className={styles.profileBody}>
            <div className={styles.sidebar_page}><SideBar/> </div>
            <div className={styles.profileContent}>
                <div>
                <DetailBox 
                  profilePic="prPic"
                  creatorName="Ethina Cadlin"  
                  fCount="68.K Followers"
                  pCount="224 Posts"
                  crIntro="Passionate creator dedicated to crafting engaging content that resonates. Transforming ideas into impactful stories with a touch of creativity."
                  budget=" ₹15K " 
                  vdoSource="vdoSrc"
                />
                </div>
                <div className={styles.collab}>
                    <div className={styles.collabHead}>Brand collaboration Posts</div>
                    <div className={styles.collabDetails}>
                        <div className={styles.cds}><Collab collabImg="P1" contentDate="20 Nov 2023" contentViews="2.32K views" collabCap="2Unleashing creativity, one frame at a time. 🎥✨ #ContentCreator" /></div>
                        <div className={styles.cds}><Collab collabImg="P2" contentDate="20 Nov 2023" contentViews="2.32K views" collabCap="2Unleashing creativity, one frame at a time. 🎥✨ #ContentCreator" /></div>
                        <div className={styles.cds}><Collab collabImg="P3" contentDate="20 Nov 2023" contentViews="2.32K views" collabCap="2Unleashing creativity, one frame at a time. 🎥✨ #ContentCreator" /></div>
                        <div className={styles.cds}><Collab collabImg="P4" contentDate="20 Nov 2023" contentViews="2.32K views" collabCap="2Unleashing creativity, one frame at a time. 🎥✨ #ContentCreator" /></div>
                    </div>
                    <div className={styles.viewMore}>View More</div>
                </div>
                
                <div>
                    <Calci baseCount={9} />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default CreatorProfile;