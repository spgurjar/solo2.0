import styles from "./campaign.module.css";
import { SideBar } from '../sidebar/sidebar';
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import Link from 'next/link';
import Chat from "../chat/chat";
import { useRouter } from 'next/router';
import RateWindow from "./ratewindow/ratewindow";


const Campaign = () => {
    const router = useRouter();
    const [campName, setCampName] = useState("");
    const [campDetail, setCampDetail] = useState("");
    const [conditions,setConditions] = useState("");
    const [budget,setBudget] = useState("");
    const [posts, setPosts] = useState(1);
    const [feeds, setFeeds] = useState(1);
    const [reels, setReels] = useState(1);
    // const [formData, setFormData] = useState(null);
    
    const handleSend = () => {
        if (!campName || !campDetail || !conditions || !budget) {
          alert("Please fill in all fields!");
          return;
        }

        // setFormData({
        //     campName,
        //     campDetail,
        //     conditions,
        //     budget,
        //     posts,
        //     feeds,
        //     reels,
        //   });
        // };

        const formData = {
            campName,
            campDetail,
            conditions,
            budget,
            posts,
            feeds,
            reels,
        };

        router.push({
            pathname: '/chat',
            query: formData,
        });
    };

        const handleDelete = () => {
            setCampName("");
            setCampDetail("");
            setConditions("");
            setBudget("");
            setPosts(1);
            setFeeds(1);
            setReels(1);
            setFormData(null);
          };
   
    return(
        <div className={styles.camp_body}>
            <div className={styles.sidebar_page}><SideBar/></div>
            <div className={styles.camp_form_body}>
                <div className={styles.camp_form}>
                    <div className={styles.form_head}>
                        <div className={styles.head_items}>
                            <div className={styles.hd_cr_pic}><img className={styles.hd_pic} src="/images/proPic1.png" /></div>
                            <div className={styles.hd_cr_name}>Ethina Cadlin</div>
                        </div>
                        <div className={styles.head_items}>
                            <div className={styles.agree_btn}>Agree To Offer</div>
                            {/* <div className={styles.rate_btn}>Rate <FaStarHalfAlt className={styles.rate_icon}/></div> */}
                            <div>
               <RateWindow
                  profilePic="prPic"
                  creatorName="Ethina Cadlin"  
                  fCount="68.K Followers"
                  pCount="224 Posts"
                  crIntro="Passionate creator dedicated to crafting engaging content that resonates. Transforming ideas into impactful stories with a touch of creativity."
                 />
               </div>
                        </div>
                    </div>
                    <div className={styles.CredForm}>
                        <div className={styles.colmTitle}>Campaign Name</div>
                        <input className={styles.credInput} type="text" value={campName}  onChange={(e)=>{setCampName(e.target.value)}} />

                        <div className={styles.colmTitle}>Campaign Details</div>
                        <textarea className={styles.credInput} type="text" value={campDetail} onChange={(e)=>{setCampDetail(e.target.value)}} />

                        <div className={styles.bpfr}>
                            <div className={styles.bpfr_items}>
                               <div className={styles.colmTitle}>Budget</div>
                               <input className={styles.credInput_bpfr} type="integer" value={budget}  onChange={(e)=>{setBudget(e.target.value)}} />
                            </div>
                            <div className={styles.bpfr_items}>
                               <div className={styles.colmTitle}>Budget</div>
                               <input className={styles.credInput_bpfr} type="number" min="1" max="10" value={posts}  onChange={(e)=>{setPosts(e.target.value)}} />
                            </div>
                            <div className={styles.bpfr_items}>
                               <div className={styles.colmTitle}>Budget</div>
                               <input className={styles.credInput_bpfr} type="number" min="1" max="10" value={feeds}  onChange={(e)=>{setFeeds(e.target.value)}} />
                            </div>
                            <div className={styles.bpfr_items}>
                               <div className={styles.colmTitle}>Budget</div>
                               <input className={styles.credInput_bpfr} type="number" min="1" max="10" value={reels}  onChange={(e)=>{setReels(e.target.value)}} />
                            </div>
                        </div>

                        <div className={styles.colmTitle}>T&C - Red FLags</div>
                        <textarea className={styles.credInput} type="url" value={conditions} onChange={(e)=>{setConditions(e.target.value)}} />

                        <div className={styles.btn_boxx}>
                            <div><button className={styles.sendBtn} onClick={handleSend} >Send</button></div>
                            <div><button className={styles.dltBtn} onClick={handleDelete}>Delete</button></div>
                        </div>

                        {/* {formData && <Chat formData={formData} />} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaign;