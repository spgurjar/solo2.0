import styles from "./hsh.module.css";


export const Hsh = (props) => {
    return(
        <div className={styles.hsh_body}>
            <div className={styles.hsh_head}>{props.hshHead} </div>
            <div className={styles.hsh_subhead}>{props.hshSubHead} </div>
        </div>
    )
}