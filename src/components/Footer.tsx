import React from 'react'
import { FaCopyright } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <i className={styles.message}>Made with (✿◡‿◡)</i>
            <br/>
            <br/>
            <i className={styles.message}>
                Copyright <FaCopyright /> 2021 Okizeme Gaming. All Rights Reserved
            </i>
        </div>
    )
}