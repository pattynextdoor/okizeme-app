import React from 'react'
import { FaCopyright, FaTwitter, FaReddit, FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.leftFloated}>
                <img className={styles.footerImg}
                     src="/logo.png" 
                     alt="Okizeme logo"/>
                <span className={styles.messages}>
                    <i className={styles.message}>Made with (✿◡‿◡)</i>
                    <br/>
                    <i className={styles.message}>Get in touch! -> info@okizeme.com</i>
                    <br/>
                    <i className={styles.message}>
                        Copyright <FaCopyright /> 2021 Okizeme Gaming. All Rights Reserved
                    </i>
                </span>
                
            </div>
            
            <ul className={styles.socialMediaLinks}>
                <li>
                    <a href="https://twitter.com/okizemegaming">
                        <FaTwitter /> 
                    </a>
                </li>
                <li>
                    <a href="https://reddit.com/u/okizemegaming">
                        <FaReddit />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/okizemegaming/">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </div>
    )
}