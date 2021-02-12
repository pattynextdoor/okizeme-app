import Image from 'next/image'
import Link from 'next/link'
import { FaBook } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

export default function HomeArticleCard(props) {
    return (
        <>
            <Link href="/posts/[slug]" as={`/posts/${props.src}`}>
            <a className={styles.card}>
                <div className={styles.cardImgWrapper}>
                    <Image src={props.imgSrc} 
                           width={600}
                           height={340}/>
                </div>
                <div className={styles.textContent}>
                    <h3> {props.title} &rarr;</h3>
                    <p className={styles.subtitle}>{props.description}</p>
                    <p className={styles.description}>
                        <FaBook /> {convertWordsToMinutes(props.wc)} minute read 
                    </p>
                </div>
            </a> 
            </Link>
        </>
    )
}

const convertWordsToMinutes = (wordCount) => {
    return (parseInt(wordCount) / 200).toPrecision(3)
}