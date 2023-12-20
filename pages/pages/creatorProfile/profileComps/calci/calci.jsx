import styles from "./calci.module.css";
import { useState } from "react";

const Calci = (props) => {
    const [postCount, setPostCount] = useState(1)
    const [storyCount, setStoryCount] = useState(2)
    const [reelCount, setReelCount] = useState(1)

    const calculateTotal = () => {
        const total = props.baseCount + postCount * 2 + storyCount * 1 + reelCount * 2;
        return total;
      };

    const handlePostCount = (e) => {
        setPostCount(e.target.value)
    }
    const handleStoryCount = (e) => {
        setStoryCount(e.target.value)
    }
    const handleReelCount = (e) => {
        setReelCount(e.target.value)
    }
    return(
        <div className={styles.calciBody}>
            <div className={styles.calciResult}>
                <div className={styles.calciHead}>Calculator</div>
                <div className={styles.calciSub}>Get a Estimate of your expenditure</div>
                <div className={styles.calciBox}>
                    <div className={styles.calciCount}>₹ {calculateTotal()}K</div>
                    <div className={styles.calciCap}>Customize and check the approximate payout for better clarity on the average price per payout.</div>
                </div>
            </div>
            
            <div className={styles.calciSliders}>
                <div className={styles.sliderContainer}>
                    <div className={styles.calciSliderHead}>Feed Post</div>
                    <div className={styles.slideBox}><input className={styles.calciSlider} type="range" min="0" max="10" step="1" value={postCount} onChange={handlePostCount} />{postCount}</div> 
                    
                    <div className={styles.calciSliderHead}>Story</div>
                    <div className={styles.slideBox}><input className={styles.calciSlider} type="range" min="0" max="10" step="1" value={storyCount} onChange={handleStoryCount}/>{storyCount} </div> 

                    <div className={styles.calciSliderHead}>Reels</div>
                    <div className={styles.slideBox}><input className={styles.calciSlider} type="range" min="0" max="10" step="1" value={reelCount} onChange={handleReelCount}/>{reelCount} </div> 
                </div>                
            </div>
        </div>
    )
}

export default Calci;