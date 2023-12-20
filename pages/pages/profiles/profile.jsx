import styles from "./profile.module.css";
import { Prbox } from "./profileBox";
import Link from "next/link";

// import mainpic from "../media/mainpic.png";
// import pic2 from "../media/pic2.png";
// import pic3 from "../media/pic3.png";
// import pic4 from "../media/pic4.png";
// import pic5 from "../media/pic5.png";
// import pic6 from "../media/pic6.png";
// import prpic from "../media/prpic.png";

import { CiLocationOn } from "react-icons/ci";

export const Profile = () => {
    return(
        <div className={styles.profile_body}>
           <div> <span className={styles.pr_heading}>Today best Profiles</span></div>
           <div className={styles.pr_content}>
               <div className={styles.pr_row}>
                   {/* <Link to="/creatorProfile" ><div className={styles.pr_box}> <Prbox mainpic = "mainpic" prpic = "prpic" userid="@brasel9" username = "Brady shelly" location = "India" lIcon = {<CiLocationOn />} fqntt = "32.2k" eqntt= "6.64%" /></div></Link> */}
                   
                    <Link href="/creatorProfile"><div className={styles.pr_box}> <Prbox mainpic = "mainpic" prpic = "prpic" userid="@brasel9" username = "Brady shelly" location = "India" lIcon = {<CiLocationOn />} fqntt = "32.2k" eqntt= "6.64%" /></div></Link>

                   <div className={styles.pr_box}> <Prbox mainpic = "pic2" prpic = "prpic" userid="@brasel9" username = "Brady shelly" location = "India" lIcon = {<CiLocationOn />} fqntt = "32.2k" eqntt= "6.64%" /></div>

                   <div className={styles.pr_box}> <Prbox mainpic = "pic3" prpic = "prpic" userid="@brasel9" username = "Brady shelly" location = "India" lIcon = {<CiLocationOn />} fqntt = "32.2k" eqntt= "6.64%" /></div>
               </div>

               <div className={styles.pr_row}>
                   <div className={styles.pr_box}> <Prbox mainpic = "pic4" prpic = "prpic" userid="@brasel9" username = "Brady shelly" location = "India" lIcon = {<CiLocationOn />} fqntt = "32.2k" eqntt= "6.64%" /></div>

                   <div className={styles.pr_box}> <Prbox mainpic = "pic5" prpic = "prpic" userid="@brasel9" username = "Brady shelly" location = "India" lIcon = {<CiLocationOn />} fqntt = "32.2k" eqntt= "6.64%" /></div>

                   <div className={styles.pr_box}> <Prbox mainpic = "pic6" prpic = "prpic" userid="@brasel9" username = "Brady shelly" location = "India" lIcon = {<CiLocationOn />} fqntt = "32.2k" eqntt= "6.64%" /></div>
               </div>
           </div>
        </div>
    )
}

