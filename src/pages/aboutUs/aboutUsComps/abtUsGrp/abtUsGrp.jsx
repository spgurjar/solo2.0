import styles from "./abtUsGrp.module.css";

{/* import abtUsPic from "abtUsPic.png"; */}

export const AbtUs = () => {
    return(
        <div className={styles.abtus_body}>        
            <div class="group_box" id="147:160">
               <div class="abtUs_heading" id="147:161">About us</div>
               <div class="rectangle_blackbox" id="147:162"></div>
               <div class="rectangle_radialbox" id="147:164">
                  <div class="rec_rad1" id="147:165"></div>
                  <div class="rec_raad2" id="147:166"></div>
               </div>
               <img class="abtUs_pic" src="/images/abtUs-pic.png" id="147:167"/>
            </div>

        </div>
    )
}