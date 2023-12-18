import styles from "./sbCreator.module.css";

export const SbCreator = (props) => {
    return(
        <div className={styles.sbCreatorBody}>
            <div className={styles.creatorProfile}>
                <img className={styles.profilePic} src={`/images/${props.profilePic}.png`} />
                <div className={styles.creatorNameSeen}>
                    <div className={styles.crName}>{props.crName}</div>
                    <div className={styles.crSeen}>{props.Seen}</div>
                </div>
            </div>
            <div className={styles.crDate}>{props.crDate}</div>
        </div>
    )
}