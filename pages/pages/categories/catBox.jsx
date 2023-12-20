import styles from "./catBox.module.css";

export const Catbox = (props) => {
    return(
        <div>
        <div className={styles.catbox_body}>
            <div><img className={styles.cat_img} src={`/images/${props.catImg}.png`}  alt=""/></div>
            <div><span className={styles.cat_name}>{props.catName}</span></div>
        </div>
        </div>
    )
}