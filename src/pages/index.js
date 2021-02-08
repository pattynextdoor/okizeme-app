import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import fs from 'fs'

import HomeArticleCard from '../components/HomeArticleCard'
import Footer from '../components/Footer'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Home({slugs}) {

  const featuredArticles = [
    
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Okizeme | High Level Content</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <Link href="/">
              <img className={styles.heroImg} src="/logo.png" alt="Okizeme Logo"/>
            </Link>
          </div>
        </div>

        <h2 className={styles.subheading}>ABOUT</h2>
        <div className={styles.about}>
          
          <p className={styles.justified}>
            Okizeme, a japanese portmanteau of the words: <strong>Okiru 起きる (Wake Up)</strong> and <strong>Semeru 攻める (Attack / Strike)</strong>. 
            The term was popularized by the Fighting Game Community as an opportunity to strike the opponent during a favorable situation of knocking them into the ground. By doing so, you continue your momentum closer and closer to being the winner. Okizeme Gaming was created by this idea that as gamers; we wake up, we attack, and we game. 
          </p>

          <p className={styles.justified}>
            We want to provide the Fighting Game Community with high-level content from gaming resources, media content essays, interviews, Esports, and so much more from your favorite fighting game.
            Not only that, Okizeme wishes to deconstruct entry barriers for individuals who have often felt disenfranchised from the video game community, a cismale dominated space, and create a safe and welcoming environment for <strong>all</strong>. We aim to open discussion and encourage new players to find their way into the FGC. 
          </p>

          <p className={styles.rightAligned}>
            Please join us on our journey!
          </p>

          <p className={styles.rightAligned}>
            The Okizeme Team ♥
          </p>
        </div>
        
        <div className="homeGrid">
          <div className={styles.content}>
            <div className={styles.latestNews}>
              <h2 className={styles.subheading}>FEATURED ARTICLES</h2>
            </div>
            <div className={styles.contentGrid}>
              <HomeArticleCard title="Fighting Games Debunked: Myth 2"
                      description="How many hours do I spend in training mode before I can play?"
                      imgSrc="https://i.ibb.co/hDg1TpY/Fighting-Games-Debunked-Myth-2.png"
                      src="debunked-myth-2"
                      wc="865"></HomeArticleCard>

              <HomeArticleCard title="Fighting Games Debunked: Myth 1"
                      description="Do fighting games have an entry barrier too high for beginners?"
                      imgSrc="https://i.ibb.co/bJd9jxd/Fighting-Games-Debunked.png"
                      src="debunked-myth-1"
                      wc="1650"></HomeArticleCard> 

              <HomeArticleCard title="The Complete FGC Dictionary"
                      description="Your one-stop-shop for all things FGC"
                      imgSrc="https://i.ibb.co/JFtHmxh/Ultimate-FGC-Dictionary.png"
                      src="complete-fgc-dictionary"
                      wc="30329"></HomeArticleCard>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('src/posts')

  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', ''))
    }
  }
}