import Link from 'next/link'
import { FaBook } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

export default function HomeArticleCard(props) {
    return (
        <>
            <Link href="[slug]" as={props.src}>
            <a className={styles.card}>
                <div className={styles.cardImgWrapper}>
                    <img src={props.imgSrc}/>
                </div>
                <div className={styles.textContent}>
                    <h3> {props.title} &rarr;</h3>
                    <p className={styles.description}>
                        <FaBook /> <strong> {(parseInt(props.wc) / 200).toPrecision(3)} minute read </strong>
                    </p>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </a> 
            </Link>
        </>
    )
}