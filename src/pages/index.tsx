import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import fs from 'fs'

import HomeArticleCard from '../components/HomeArticleCard'
import Footer from '../components/Footer'
import articleData from '../data/articles.json'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

type Props = {
  slugs: string[]
}

const articles = articleData.articles

export default function Home({slugs}: Props) {

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
            The term was popularized by the Fighting Game Community as an opportunity to strike the opponent as they are "waking up" from being knocked down to maintain advantage. Okizeme Gaming was created by this idea that as gamers; we wake up, we attack, and we game.
          </p>

          <p className={styles.justified}>
            We want to provide the Fighting Game Community with high-level content from gaming resources, media content essays, interviews, Esports, and so much more from your favorite fighting game.
            Not only that, Okizeme wishes to deconstruct entry barriers for individuals who have often felt disenfranchised from the video game community and create a safe and welcoming environment for <strong>all</strong>. We aim to open discussion and encourage new players to find their way into the FGC. 
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
              {articles.map((articleProps, index) => <HomeArticleCard {...articleProps} key={index}/>)}
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