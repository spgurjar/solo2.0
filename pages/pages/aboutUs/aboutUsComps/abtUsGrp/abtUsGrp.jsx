import styles from "./abtUsGrp.module.css";

{/* import abtUsPic from "abtUsPic.png"; */}

export const AbtUs = () => {
    return(
        <div className={styles.abtus_body}>        
            <div class= {styles.group_box} id="147:160">
               <div class= {styles.abtUs_heading} id="147:161">About us</div>
               <div class={styles.rectangle_blackbox} id="147:162"></div>
               <div class={styles.rectangle_radialbox} id="147:164">
                  <div class={styles.rec_rad1} id="147:165"></div>
                  <div class={styles.rec_raad2} id="147:166"></div>
               </div>
               <img class= {styles.abtUs_pic} src="/images/abtUs-pic.png" id="147:167"/>
            </div>

        </div>
    )
}