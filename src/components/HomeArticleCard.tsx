import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegClock } from 'react-icons/fa'
import AOS from 'aos'
import "aos/dist/aos.css"
import styles from './HomeArticleCard.module.css'

type Props = {
    title: string,
    description: string,
    imgSrc: string,
    src: string,
    wc: number
}

export default function HomeArticleCard({ title, description, imgSrc, src, wc, isSmall = false }: Props) {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}
                 data-aos="fade-up"
                 data-aos-duration="300"
                 data-aos-delay="100">
                <Image src={imgSrc}
                    width={640}
                    height={360}
                    className={styles.cardImg}
                     />
            </div>

            <div className={styles.cardInfo}
                 data-aos="zoom-in-left"
                 data-aos-duration="300"
                 data-aos-delay="200">
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