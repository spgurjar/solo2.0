import styles from "./brandsCreds.module.css";
import { useState } from "react";

const BrandCreds = () => {
    const [brandName, setBrandName] = useState("");
    const [designation, setDesignation] = useState("");
    const [website,setWebsite] = useState("")

    const handleSubmit = () => {
        console.log("Brands Credentials: ", brandName, designation, website)
    }

    return(
        <div className={styles.brandCredFormBody}>
            <div className={styles.CredForm}>
                <div className={styles.colmTitle}>Brand Name</div>
                <input className={styles.credInput} type="text" value={brandName} placeholder="Enter Brand Name" onChange={(e)=>{setBrandName(e.target.value)}} />

                <div className={styles.colmTitle}>Your Brand Designation</div>
                <input className={styles.credInput} type="text" value={designation} placeholder="Enter Brand Designation" onChange={(e)=>{setDesignation(e.target.value)}} />

                <div className={styles.colmTitle}>Brand Website</div>
                <input className={styles.credInput} type="url" value={website} placeholder="https://example.com"  onChange={(e)=>{setWebsite(e.target.value)}} />

                <div className={styles.btn_boxx}><button className={styles.submitBtn}  onClick={handleSubmit}>Submit</button></div>
            </div>
        </div>
    )
}

export default BrandCreds;