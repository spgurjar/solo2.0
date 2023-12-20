import styles from "./profileBox.module.css";

export const Prbox = (props) => {
    return(
        <div className={styles.pr_body}>

            <div className={styles.pr_upper}>
                <div className={styles.img_box}>
                    <img className={styles.main_pic} src= {`/images/${props.mainpic}.png`} alt="" />
                </div>
            </div>
            
            <div className={styles.pr_lower}>
                <div className={styles.pr_about_upper}>
                    <div className={styles.pau_left}>
                        <div><img className={styles.pr_pic} src= {`/images/${props.prpic}.png`} alt="" /> </div>
                        <div className={styles.username}>
                            <span className={styles.userid}>{props.userid}</span>
                            <span className={styles.usrname}>{props.username} </span>
                        </div>
                    </div>

                    <div className={styles.pau_right}>
                      <spna className={styles.location} >{props.location} </spna>
                      <div className={styles.location_icon}>{props.lIcon} </div>
                    </div>
                </div>

                <div className={styles.pr_about_lower}>
                    <div className={styles.follower}>
                        <span className={styles.qntt}>{props.fqntt} </span>
                        <span className={styles.text}>Followers</span>
                    </div>

                    <div className={styles.follower}>
                        <span className={styles.qntt}>{props.eqntt} </span>
                        <span className={styles.text}>Engagement</span>
                    </div>
                </div>
            </div>
        </div>
    )
}