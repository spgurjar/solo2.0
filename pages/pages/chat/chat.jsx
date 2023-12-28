import React from "react";
import styles from "./chat.module.css";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SideBar } from '../sidebar/sidebar';
import { FaStarHalfAlt } from "react-icons/fa";
import { Player } from 'video-react';
import RateWindow from "./ratewindow/ratewindow";
import 'video-react/dist/video-react.css';


const Chat = () => {
    const [showFeedbackInput, setShowFeedbackInput] = useState(false);
    const [feedbackText, setFeedbackText] = useState("");

    const handleSendFeedback = () => {
        setShowFeedbackInput(!showFeedbackInput);
      };
    
      const handleFeedbackInputChange = (e) => {
        setFeedbackText(e.target.value);
      };

    const router = useRouter();  
    const [formData, setFormData] = useState(router.query);  

    useEffect(() => {
        // Setting data to localStorage for persistence
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);
  return (
    <div className={styles.chat_body}>
      <div className={styles.sidebar_page}><SideBar/></div>
      <div className={styles.chat_section}>

        <div className={styles.head_container}>
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
        </div>

        <div className={styles.camp_container}>
            <div className={styles.brand_nam}>Brand</div>
        <div className={styles.camp_details}>
            
            <div className={styles.detail_item}>
              <div className={styles.item_hd}>Campaign Name: <div className={styles.item_res}>{formData.campName}</div></div>
              
            </div>

            <div className={styles.detail_item}>
              <div className={styles.item_hd}>Campaign Details: <div className={styles.item_res}>{formData.campDetail}</div></div>
              
            </div>

            <div className={styles.detail_item}>
              <div className={styles.item_hd}>Budget:</div>
              <div className={styles.item_res}>{formData.budget}</div>
            </div>
            
            <div className={styles.detail_item}>
              <div className={styles.item_hd}>Posts:</div>
              <div className={styles.item_res}>{formData.posts}</div>
            </div>

            <div className={styles.detail_item}>
              <div className={styles.item_hd}>Feeds:</div>
              <div className={styles.item_res}>{formData.feeds}</div>
            </div>

            <div className={styles.detail_item}>
              <div className={styles.item_hd}>Reels:</div>
              <div className={styles.item_res}>{formData.reels}</div>
            </div>

            <div className={styles.detail_item}>
              <div className={styles.item_hd}>T&C - Red Flags:   <div className={styles.item_res}>{formData.conditions}</div></div>
            
            </div>
        </div>
        </div>

        <div className={styles.content_container}>
            <div className={styles.creator_nam}>Creator</div>

            <div className={styles.post_box}>
                <div><img className={styles.cr_post_pic} src="/images/cr_post.png" /></div>
                <div className={styles.content_cap}>Post</div>
            </div>

            <div className={styles.vdo_box}>
                <div>
                    <Player className={styles.vdoPlayer}>
                        <source src="/images/vdoSrc.mp4" />
                    </Player></div>
                <div className={styles.content_cap}>Video</div>
            </div>

            <div className={styles.script_box}>
                <div className={styles.detail_item}>
                   <div className={styles.item_hd}>Script 1:
                     <div className={styles.item_res}>Passionate creator dedicated to crafting engaging content that resonates. Transforming ideas into impactful stories with a touch of creativity.</div>
                   </div>  
                </div>

                <div className={styles.detail_item}>
                   <div className={styles.item_hd}>Script 2:
                     <div className={styles.item_res}>Passionate creator dedicated to crafting engaging content that resonates. Transforming ideas into impactful stories with a touch of creativity.</div>
                   </div>  
                </div>

                <div className={styles.detail_item}>
                   <div className={styles.item_hd}>Script 3:
                     <div className={styles.item_res}>Passionate creator dedicated to crafting engaging content that resonates. Transforming ideas into impactful stories with a touch of creativity.</div>
                   </div>  
                </div>
            </div>
        </div>

        <div className={styles.reply_btn_box}>
            <div className={styles.accept_btn}>Accept</div>
            <div className={styles.feedback_btn} onClick={handleSendFeedback}>Send Feed Back</div>
        </div>

        <div className={styles.feedback_box}>
            {showFeedbackInput && (
             <div className={styles.feedback_input}>
            <textarea
            className={styles.feed_input}
              placeholder="Enter your feedback..."
              value={feedbackText}
              onChange={handleFeedbackInputChange}
            />
            </div>
            )}
        </div>
        
        <div className={styles.content_container}>
            <div className={styles.creator_nam}>Creator</div>
              <div className={styles.link_box}>
               <div className={styles.item_res}>https://github.com/credwise14/soloWebApp/blob/main/tsconfig.json</div>
            </div>
        </div>

        <div className={styles.closing_box}>
            <div className={styles.closing_caption1}>✅ Your campaign post has been uploaded. Check audience engagement on your right</div>
            <div className={styles.closing_caption2}>Your chat has End</div>
            <div className={styles.rate_box}>
                <div className={styles.rate_text}>Rate your chat</div>
                <div>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                    <FaStarHalfAlt className={styles.rate_icon}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;