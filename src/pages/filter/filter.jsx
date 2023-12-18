import styles from "./filter.module.css";
import React, { useState } from "react";
// import FilterIcon from "./FilterIcon.png";
// import insta from "./insta.png";
// import fb from "./fb.png";
// import x from "./x.png";
// import ytb from "./ytb.png";

export const SmallWindow = () => {
    const [isActive, setIsActive] = useState(false);
    const [followers, setFollowers] = useState(40000);
    const [budget, setBudget] = useState(40000);

    const toggleVisibility = () => {
      setIsActive(!isActive);
    };

    const handlefollowerChange = (event) => {
      setFollowers(event.target.value);
    };
    const handlebudgetChange = (event) => {
      setBudget(event.target.value);
    };

  return (
    <div className={`SmallWindowContainer ${isActive ? "active" : ""}`}>
       <button onClick={toggleVisibility} className={styles.filterButton}><img className={styles.filterIcon} src="/images/FilterIcon.png" />Filter</button>
       <div className={styles.SmallWindow}>

           <div className={styles.pfHead}>Plateform</div>
           <div className={styles.smHandles}>
               <div className={styles.smApp}>
                 <div className={styles.appIcon}><img src="/images/insta.png"/></div>
                 <div className={styles.appName}>Instagram</div>
               </div>
               <div className={styles.smApp}>
                 <div className={styles.appIcon}><img src="/images/fb.png"/></div>
                 <div className={styles.appName}>Facebook</div>
               </div>
               <div className={styles.smApp}>
                 <div className={styles.appIcon}><img src="/images/ytb.png"/></div>
                 <div className={styles.appName}>Youtube</div>
               </div>
               <div className={styles.smApp}>
                 <div className={styles.appIcon}><img src="/images/x.png"/></div>
                 <div className={styles.appName}>Twitter</div>
               </div>
           </div>

           <div className={styles.sliderBox}>
              <div className={styles.sliderHead}>Audience</div>
              <div className={styles.silderQuantity}>
                <div className={styles.quant}>{followers / 1000}K followers</div>
                <button className={styles.sliderReset} onClick={() => setFollowers(40000)}>Reset</button>
              </div>              
              <input className={styles.silder} type="range" min="10000" max="100000" value={followers} onChange={handlefollowerChange} step="1000"/>      
           </div>

           <div className={styles.sliderBox}>
              <div className={styles.sliderHead}>Budget</div>
              <div className={styles.silderQuantity}>
                <div className={styles.quant}>{budget / 1000}K-{(budget / 1000) + 5}K</div>
                <button className={styles.sliderReset} onClick={() => setBudget(40000)}>Reset</button>
              </div>              
              <input className={styles.silder} type="range" min="10000" max="100000" value={budget} onChange={handlebudgetChange} step="1000"/>      
           </div>

           <div className={styles.contentTypeBox}>
            <div className={styles.sliderHead}>Content Type</div>
            <div className={styles.typeBox}>
                <div className={styles.typeName}>Post</div>
                <div className={styles.typeName}>Feeds</div>
                <div className={styles.typeName}>Reels</div>
            </div>
           </div>
      </div>
    </div>
  );
};

// export default SmallWindow;