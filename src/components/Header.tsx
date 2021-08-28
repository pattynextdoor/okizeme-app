import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'

import SearchBar from './SearchBar'

import styles from './Header.module.css'
import { FaSignOutAlt } from 'react-icons/fa'
import { useEffect } from 'react'

export default function Header() {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const router = useRouter()

    useEffect(() => {
        Auth.currentAuthenticatedUser()
                .then(user => {
                    setIsSignedIn(true)
                    console.log(user)
                })
                .catch(err => {
                    setIsSignedIn(false)
                    console.log(err)
                })
    })
    

    const signOut = async () => {
        try {
            await Auth.signOut()
            setIsSignedIn(false)
            console.log("Signed out successfully (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
        } catch (error) {
            console.log("Error signing out: ", error)
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <Link href="/">
                    <a className={router.asPath == "/" ? styles.active : ""}>
                        Home 
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

            <Link href="/">
                <a className={styles.logoLink}>
                    <img className={styles.logo} src="/logo.png" alt="Okizeme Logo"/> 
                </a>
            </Link>
            

            <div className={styles.headerRight}>
                {!isSignedIn && 
                    <Link href="/signin">
                        <a>
                            Sign In
                        </a>
                    </Link>
                }
                {isSignedIn &&
                    <Link href="/">
                        <a onClick={signOut}>
                            Sign Out
                        </a>
                    </Link>
                }
            </div>
        </header>
    )
}
