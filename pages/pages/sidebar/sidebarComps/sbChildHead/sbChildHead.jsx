import styles from "./sbChildHead.module.css";

export const SbChildHead = (props) => {
    return(
        <div className={styles.sbChildHeading}>{props.sbChildHead} </div>
    )
}