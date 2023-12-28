import styles from "./ratewindow.module.css";
import React, { useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
const RateWindow = (props) => {
    const [isActive, setIsActive] = useState(false);
    
    const toggleVisibility = () => {
        setIsActive(!isActive);
      };

  return(
    <div className={`${styles.ratewindowContainer} ${isActive ? styles.active : ""}`}>
        <div onClick={toggleVisibility} className={styles.rate_btn}>Rate <FaStarHalfAlt className={styles.rate_icon}/></div>
        <div className={styles.ratewindow}>
            <div className={styles.cr_pro_box}>
                <div><img className={styles.profilePic} src={`/images/${props.profilePic}.png`} /></div>
                <div className={styles.pr_detail}>
                    <div className={styles.creatorName}>{props.creatorName}</div>
                    <div className={styles.followerPost}>
                       <div className={styles.followerCount}>{props.fCount}</div>
                       <div className={styles.postCount}>{props.pCount}</div>
                    </div>
                </div>
            </div>

            <div className={styles.creatorIntro}>{props.crIntro}</div>

            <div className={styles.rate_box}>
                <div className={styles.rate_text}>Ratings</div>
                <div>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                </div>
            </div>


        </div>
    </div>
  ) 
}

export default RateWindow;