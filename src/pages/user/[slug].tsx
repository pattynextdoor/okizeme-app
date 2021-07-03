import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import Header from '../../components/Header'
import HomeArticleCard from '../../components/HomeArticleCard'

import userData from '../../data/users.json'
import articleData from '../../data/articles.json'
import styles from '../../styles/user.module.css'

const users = userData.users
const articles = articleData.articles

const User = ({ user, userArticles }) => {
    return (
        <div className={styles.userContainer}>
            <Header />
            <div className={styles.userInfo}>
                <img className={styles.profileImg} src={user.img}/>
                <h1 className={styles.name}>{user.name}</h1>
                <p className={styles.username}>@{user.username}</p>
            </div>

            <div className={styles.articlesList}>
                <h2 className={styles.articlesListHeading}>Authored Articles</h2>
                <div className={styles.contentGrid}>
                    {userArticles.map((article, index) => <HomeArticleCard {...article} key={index}/>)}
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = users.map(usr => ({
        params: {
            slug: usr.username
        }
    }))

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const username = context.params.slug
    const user = users.find(el => el.username == username)

    const userArticles = articles.filter(el => el.author == username)

    return {
        props: {
            user,
            userArticles
        }
    }
}

export default User