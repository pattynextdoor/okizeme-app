import { FaCopyright } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <p className="styles.message">Made with (✿◡‿◡)</p>
            <br></br>
            <p className="styles.message">
                Copyright <FaCopyright /> 2021 Okizeme Gaming. All Rights Reserved
            </p>
        </div>
    )
}