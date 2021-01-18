import Link from 'next/link'

import styles from '../../styles/Home.module.css'

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
                    <p>{props.description}</p>
                </div>
                
            </a> 
            </Link>
        </>
    )
}