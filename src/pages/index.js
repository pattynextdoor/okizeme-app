import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import fs from 'fs'

import UIShell from '../components/templates/UIShell'
import HomeArticleCard from '../components/molecules/HomeArticleCard'

export default function Home({slugs}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Okizeme | High Level Content</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UIShell></UIShell>

        <div className={styles.hero}>
          <h1 className={styles.title}>
            Okizeme
          </h1>
          <hr></hr>

          <p className={styles.description}>
          high level content
          </p>
        </div>
        

        <div className={styles.latestNews}>
          <h2>Latest Articles</h2>
        </div>

        <div className={styles.grid}>

          <HomeArticleCard title="The Complete FGC Dictionary"
                           description="Your one-stop-shop for all things FGC"
                           imgSrc="https://media.giphy.com/media/39zbpCQocXLi0/giphy.gif"
                           src="complete-fgc-dictionary"></HomeArticleCard>

          <HomeArticleCard title="Understanding the frame data of Greninja dragdowns"
                           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                           imgSrc="https://comicvine1.cbsistatic.com/uploads/original/11135/111358950/7338962-ash-greninja-gif-9.gif"
                           src="#"></HomeArticleCard>

          <HomeArticleCard title="Take a break! 3 reasons why stepping away from the game can improve performance"
                           description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                           imgSrc="https://pbs.twimg.com/media/EY6eByhVAAIwCI6.png"
                           src="#"></HomeArticleCard>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
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