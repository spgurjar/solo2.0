import styles from "./prDetailBox.module.css";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import { FaRegMessage } from "react-icons/fa6";
// import moneyIcon from "../prAssets/moneyIcon.png";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const DetailBox = (props) => {
    return(
        <div className={styles.detailBoxBody}>
            <div className={styles.details1}>
                <div><img className={styles.profilePic} src={`/images/${props.profilePic}.png`} /></div>
                <div className={styles.creatorName}>{props.creatorName}</div>
                <div className={styles.followerPost}>
                    <div className={styles.followerCount}>{props.fCount}</div>
                    <div className={styles.postCount}>{props.pCount}</div>
                </div>
                <div className={styles.creatorIntro}>{props.crIntro}</div>
                <div className={styles.buttonBox}>
                    <div className={styles.msgButton}><FaRegMessage className={styles.msgIcon} /><button className={styles.msgBtn}>Message</button> </div>
                    <div className={styles.budgetButton}>
                        <img src="/images/moneyIcon.png" className={styles.moneyIcon}/>
                        <span className={styles.budget}>{props.budget}</span>
                        <span className={styles.btext}>Starting At</span>
                    </div>
                </div>
            </div>
            <div className={styles.details2}>
                <div className={styles.prLinks}>
                    
                    <span className={styles.prLinkText}>Profile Links</span>
                    <FaInstagramSquare className={styles.smIcon}/>
                    <IoLogoFacebook className={styles.smIcon}/>
                    <FaYoutube className={styles.smIcon}/>
                    <FaSquareXTwitter className={styles.smIcon}/>
                  
                </div>
                <div className={styles.vdoBox}>
                    <div>
                    <Player className={styles.vdoPlayer}>
                        <source src={`/images/${props.vdoSource}.mp4`} />
                    </Player>
                    </div>
                    {/* <img className={styles.vdoImg} src="/images/props.vdoImg.png"/> */}
                </div>
            </div>
        </div>
    )
}

export default DetailBox;
