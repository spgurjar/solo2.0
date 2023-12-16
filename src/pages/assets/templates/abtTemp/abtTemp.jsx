import styles from "./abtTemp.module.css";


export const AbtTemp = (props) => {
    return(
        <div className={styles.atemp_body}>
            <div className={styles.a_head1}><span>{props.ahead1}</span> </div>
            <div className={styles.a_subhead}><span>{props.asubhead1} </span> </div>
            <div className={styles.a_head2}><span>{props.ahead2}</span></div>
            <div className={styles.a_subhead}><span>{props.asubhead2} </span> </div>
        </div>
    )
}