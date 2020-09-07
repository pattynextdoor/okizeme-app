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
        <h1 className={styles.title}>
          Okizeme
        </h1>
        <hr width="300"></hr>

        <p className={styles.description}>
         high level content
        </p>

        <div className={styles.grid}>

          <HomeArticleCard title="The Complete FGC Dictionary"
                           description="Your one-stop-shop for all things FGC"
                           src="complete-fgc-dictionary"></HomeArticleCard>

          <HomeArticleCard title="Understanding the frame data of Greninja dragdowns"
                           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                           src="#"></HomeArticleCard>

          <HomeArticleCard title="The thrill of the comeback"
                           description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                           src="#"></HomeArticleCard>

          <HomeArticleCard title="3 aggressive Cypher camera angles to use in silver rank"
                           description="Ipsum iuvaret epicuri pri at, mei fastidii abhorreant consectetuer no"
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