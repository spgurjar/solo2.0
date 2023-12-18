import styles from "./sb-content.module.css";

export const SbContent = (props) => {
    return(
<>
    
    <div className={styles.sb_content}>
      <div className={styles.sb_logo}>{props.logo} </div>
      <span className={styles.sb_text}>{props.text}</span>
    </div>

    </>
    );
};

// export default SbContent;