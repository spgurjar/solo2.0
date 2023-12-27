import styles from "./sbChildHead.module.css";

const SbChildHead = (props) => {
    return(
        <div className={styles.sbChildHeading}>{props.sbChildHead} </div>
    )
}
export default SbChildHead;