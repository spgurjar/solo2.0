import styles from "./signIn.module.css";
import { useState } from "react";
import gIcon from "./gIcon.png";
import sign1 from "./sign1.png";
import sign2 from "./sign2.png";
import sign3 from "./sign3.png";
import sign4 from "./sign4.png";
import sign5 from "./sign5.png";


const SignIn = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = (e) => {
        //connect with your backend here
        console.log('loggin in with:', email, password);
    }

    const handleSignInWithGoogle = () => {
        //implement Google sign_in logic here
        console.log('Signing in with Google');
      };

    return(
        <div className={styles.signIncover}>
            
            <div className={styles.signInForm}>
                <div className={styles.signInHead}>Solo</div>
                <div className={styles.textHead}>Email</div>
                <input className={styles.textArea} type="email" value={email} placeholder="     Enter your email" onChange={handleEmailChange} />

                <div className={styles.textHead}>Password</div>
                <input className={styles.textArea} type="password" value={password} placeholder="             ********" onChange={handlePasswordChange} />

                <div className={styles.btnBody}>
                <div className={styles.btn}><button className={styles.signInbtn} onClick={handleSignIn}>Sign in</button></div>
                <div className={styles.Gbtn}><img className={styles.gIcon} src="/images/gIcon.png" /><button className={styles.gbtn} onClick={handleSignInWithGoogle}>Sign in with Google</button>
                </div>
                </div>
            </div>

            <div className={styles.sidepart}>
                <div className={styles.sidepartUpr}>
                    <div className={styles.uprText}>Start your connection with creators here</div>
                    <div className={styles.uprDesign}>
                        <div className={styles.design1}><img src="/images/sign1.png" /></div>
                        <div className={styles.design2}><img src="/images/sign2.png" /></div>
                        <div className={styles.design3}><img src="/images/sign3.png" /></div>
                    </div>
                </div>
                <div className={styles.lowerDesign}>
                        <div className={styles.design4}><img className={styles.sign4} src="/images/sign4.png" /></div>
                        <div className={styles.design5}><img className={styles.sign5} src="/images/sign5.png" /></div>
                    </div>
            </div>
        </div>
    )
}

export default SignIn;