import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBook } from 'react-icons/fa'
import { Tag } from 'carbon-components-react'
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
        <>
            <Link href="/posts/[slug]" as={`/posts/${src}`}>
            <a className={styles.card}>
                <div className={styles.cardImgWrapper}>
                    <Image src={imgSrc} 
                           width={600}
                           height={340}/>
                </div>
                <div className={styles.textContent}>
                    <h3> {title} &rarr;</h3>
                    <p className={styles.subtitle}>{description}</p>
                    <p className={styles.description}>
                         
                    </p>
                    <Tag className={styles.tag} type="cyan">{convertWordsToMinutes(wc)} minute read</Tag>
                </div>
            </a> 
            </Link>
        </>
    )
}

const convertWordsToMinutes = (wordCount) => {
    return Math.trunc(wordCount / 200)
}