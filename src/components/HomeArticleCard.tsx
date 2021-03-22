import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegClock } from 'react-icons/fa'
import styles from './HomeArticleCard.module.css'

type Props = {
    title: string,
    description: string,
    imgSrc: string,
    src: string,
    wc: number
}

export default function HomeArticleCard({ title, description, imgSrc, src, wc }: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <Image src={imgSrc}
                    width={640}
                    height={360}/>
            </div>

            <div className={styles.cardInfo}>
                <p className={styles.readTime}>{convertWordsToMinutes(wc)} minute read <FaRegClock /></p>

                <h3> {title} &rarr;</h3>
                <p className={styles.subtitle}>{description}</p>
                <Link href="/posts/[slug]" as={`/posts/${src}`}>
                    <a className={styles.readNow}>
                        READ NOW
                    </a>
                </Link>
            </div>
        </div>
    )
}

const convertWordsToMinutes = (wordCount: number) => {
    return Math.trunc(wordCount / 200)
}