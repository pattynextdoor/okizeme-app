import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import SearchBar from './SearchBar'

import styles from './Header.module.css'

export default function Header() {
    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <SearchBar />
            </div>

            <Link href="/">
                <a className={styles.logoLink}>
                    <img className={styles.logo} src="/logo.png" alt="Okizeme Logo"/> 
                </a>
            </Link>

            <div className={styles.headerRight}>
                <Link href="/">
                    <a className={router.asPath == "/" ? styles.active : ""}>
                        About
                    </a>
                </Link>
                <Link href="/posts">
                    <a className={router.asPath == "/posts" ? styles.active : ""}>
                        Read
                    </a>
                </Link>
                <Link href="/posts/ultimate-fighting-game-dictionary">
                    <a className={router.asPath == "/posts/ultimate-fighting-game-dictionary" ? styles.active : ""}>
                        Learn
                    </a>
                </Link>
            </div>


        </header>
    )
}
