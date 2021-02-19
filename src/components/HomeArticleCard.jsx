import Image from 'next/image'
import Link from 'next/link'
import { FaBook } from 'react-icons/fa'
import { Tag } from 'carbon-components-react'
import styles from './HomeArticleCard.module.css'

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
                         
                    </p>
                    <Tag className={styles.tag} type="cyan"> {convertWordsToMinutes(props.wc)} minute read</Tag>
                </div>
            </a> 
            </Link>
        </>
    )
}

const convertWordsToMinutes = (wordCount) => {
    return (parseInt(wordCount) / 200).toPrecision(3)
}