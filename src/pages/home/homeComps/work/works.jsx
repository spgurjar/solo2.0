import styles from "./work.module.css";

import { Hsh } from "../../../assets/templates/HsubHtemp/hsh";
{/* import wImg1 from "wImg1.png"; */}
{/* import wImg2 from "wImg2.png"; */}
{/* import wImg3 from "wImg3.png"; */}
{/* import wImg4 from "wImg4.png"; */}

export const Work = () => {
    return(
        <div className={styles.work_body}>
            <div className={styles.section}>
                <div>
                    <Hsh hshHead = "We help brands" hshSubHead=" Solo help brands to find ideal creator for their brand, makes sure the job gets done and provided plenty of business." />
                </div>
                <div className={styles.work_img}>
                    <div><img className={styles.wImg} src= "/images/w1.png" alt="" /></div>
                    <div><img className={styles.wImg} src= "/images/w2.png" alt="" /></div>
                </div>
            </div>

            <div className={styles.section}>
                <div>
                    <Hsh hshHead = "We help creators" hshSubHead=" Solo help ensures that work is paid on time, brings the clients to creators and helps creators to run a business.." />
                </div>
                <div className={styles.work_img}>
                    <div><img className={styles.wImg} src= "/images/w3.png" alt="" /></div>
                    <div><img className={styles.wImg} src= "/images/w4.png" alt="" /></div>
                </div>
            </div>
        </div>
    )
}