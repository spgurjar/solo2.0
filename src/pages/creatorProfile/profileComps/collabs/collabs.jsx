import styles from "./collabs.module.css";

export const Collab = (props) => {
    return(
        <div className={styles.collabBox}>
            <div><img className={styles.collabImg} src={`/images/${props.collabImg}.png`} /></div>
            <div className={styles.DateViews}>
                <div className={styles.contentDate}>{props.contentDate}</div>
                <div className={styles.contentViews}>{props.contentViews}</div>
            </div>
            <div className={styles.collabCap}>{props.collabCap} </div>
        </div>
    )
}