import Link from 'next/link'

import styles from './Header.module.css'

export default function Header(props) {
    return (
        <>
            <Link href="/">
                <a>
                    <img className={styles.logo} src="/logo.png" alt="Okizeme Logo"/> 
                </a>
            </Link>

            <hr className={styles.hr}/>
        </>
    )
}