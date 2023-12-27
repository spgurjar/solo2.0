import styles from "./work.module.css";

import { Hsh } from "../../../assets/templates/HsubHtemp/hsh";
{/* import BrWpic1 from "BrWpic1.png"; */}
{/* import BrWpic2 from "BrWpic2.png"; */}

export const Work = () => {
    return(
        <div className={styles.work_body}>
            <div className={styles.section}>
                <div>
                    <Hsh hshHead = "Too many fake influencers?" hshSubHead=" Solo regularly checks each profile's engagement ratio, detects fake followers, ..., and blocks all fake influencers, also each influencer has list of previous clients and reviews." />
                </div>
                <div className={styles.work_img}>
                    <div><img className={styles.w_brImg} src= "/images/BrWpic1.png" alt="" /></div>
                </div>
            </div>

            <div className={styles.section}>
                <div>
                    <Hsh hshHead = "See real data!" hshSubHead=" Solo lets you see posts statistics, so no more screenshots and trust based business, make your ROI calculations based on true data." />
                </div>
                <div className={styles.work_br_img}>
                    <div><img className={styles.w_brImg} src= "/images/BrWpic2.png" alt="" /></div>
                </div>
            </div>
        </div>
    )
}