import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeArticleCard from '../../components/HomeArticleCard'
import SearchBar from '../../components/SearchBar'
import styles from '../../styles/posts.module.css'

import articleData from '../../data/articles.json'

const articles = articleData.articles

export default function Posts() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Articles | Okizeme High Level Content</title>
            </Head>

            <Header />
            <h2 className={[styles.centerAligned, 
                            styles.heading,
                            styles.title].join(' ')}>Featured</h2>

            <HomeArticleCard {...articles[0]} />

            <h2 className={[styles.centerAligned, 
                            styles.heading,
                            styles.title].join(' ')}>Past</h2>

            <SearchBar />

            <div className={styles.contentGrid}>
                {articles.map((article, index) => index != 0 ? <HomeArticleCard {...article} key={index} /> : <></> )}
            </div>


            <Footer />
        </div>
    )
}