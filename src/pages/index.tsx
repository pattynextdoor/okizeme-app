import React, { useLayoutEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import fs from 'fs'

import HomeArticleCard from '../components/HomeArticleCard'
import Header from '../components/Header'
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

      <Header />

      <main className={styles.main}>

        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Okizeme</h1>
            <h2>(n.) Wake Up Attack</h2>
          </div>
        </div>

        <h2 className={styles.sideText}>
          起き攻め WAKE UP, ATTACK, CREATE.
        </h2>

        <img className={styles.heroImg} 
             src="/okiru-semeru.png" 
             alt="okiru semeru, wake up and attack/strike"/>

        <div className={styles.about}>
          
          <p className={styles.justified}>
            <strong>Okizeme</strong>, a japanese portmanteau of the words: <strong>Okiru 起きる (Wake Up)</strong> and <strong>Semeru 攻める (Attack / Strike)</strong>. 
          </p>

          <p className="justified">
            The term was popularized by the Fighting Game Community as an opportunity to strike the opponent as they are "waking up" from being knocked down to maintain advantage. Okizeme Gaming was created by this idea that as gamers; we wake up, we attack, and we game.
          </p>

          <p className={styles.justified}>
            We want to provide the Fighting Game Community with high-level content such as 
          </p>
          <ul className={styles.highLevelContentList}>
            <li>Gaming Resources</li>
            <li>Media Content Essays</li>
            <li>Interviews</li>
            <li>E-Sports</li>
          </ul>
          
          <p className={styles.justified}>
            and so much more from your favorite fighting games.
          </p>

          <p className="justified">
            Not only that, Okizeme wishes to deconstruct entry barriers for individuals who have often felt disenfranchised from the video game community and create a safe and welcoming environment for <strong>all</strong>. We aim to open discussion and encourage new players to find their way into the FGC. 
          </p>

          <p className={styles.justified}>
            Please join us on our journey as we aim to open discussions and encourage new players to find their way into the FGC.
          </p>

          <p className={styles.rightAligned}>
            ♥ The Okizeme Team 
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