import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import fs from 'fs'

import HomeArticleCard from '../components/molecules/HomeArticleCard'
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
            {/* <h1 className={styles.title}>
              OKIZEME
            </h1>

            <p className={styles.description}>
              HIGH LEVEL CONTENT 
            </p> */}

            <img className={styles.heroImg} src="/logo.png" alt=""/>
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
              <HomeArticleCard title="The Complete FGC Dictionary"
                      description="Your one-stop-shop for all things FGC"
                      imgSrc="https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/11031/ShibaInuhelmet.png"
                      src="complete-fgc-dictionary"></HomeArticleCard>

              <HomeArticleCard title="Understanding the frame data of Greninja dragdowns"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      imgSrc="https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/11031/ShibaInuhelmet.png"
                      src="#"></HomeArticleCard>

              <HomeArticleCard title="Take a break! 3 reasons why stepping away from the game can improve performance"
                      description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                      imgSrc="https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/11031/ShibaInuhelmet.png"
                      src="#"></HomeArticleCard>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
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