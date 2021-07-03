import Head from 'next/head'
import React, { useEffect } from 'react'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import mdit from 'markdown-it'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SocialSharing from '../../components/SocialSharing'

import articleData from '../../data/articles.json'
import userData from '../../data/users.json'

import { GetStaticPaths, GetStaticProps} from 'next'

const articles = articleData.articles
const users = userData.users

const Post = ({htmlString, data}) => {
    useEffect(() => {
        let anchorTags = document.querySelectorAll('a')
        addTargetToLinks(anchorTags)
    })

    const article = articles.find(el => el.src == data.slug)
    const user = users.find(el => el.username == article.author)
    const articleUrl = getArticleUrl(article.src)

    return (
        <>
            <Head>
                <title>{article.title}</title>
                <meta property="og:title" content={article.title}/>
                <meta property="og:description" content={article.description}/>
                <meta property="og:image" content={article.imgSrc}/>
                <meta property="og:type" content="article" />
                <meta name="twitter:title" content={article.title}/>
                <meta name="twitter:description" content={article.description}/>
                <meta name="twitter:image" content={article.imgSrc}/>
            </Head>

            <Header/>
            <main>
                <SocialSharing articleLink={articleUrl} />
                <img className="coverImg" src={article.imgSrc} alt={article.title} />
                <div className="authorBlock">
                    <img className="authorImg" src={user.img} />
                    <p className="author"><Link href={"/user/" + article.author}>{"@" + article.author}</Link></p>
                </div>
                <div className="container"
                     dangerouslySetInnerHTML={{ __html: htmlString}}></div>
            </main>
            <Footer />
            <style global jsx>{`
                .container {
                    padding: 0 25%;
                }

                .centered {
                    text-align: center;
                }

                .coverImg {
                    margin: 0 auto;
                    margin-top: 10%;
                    width: 50%;
                    display: block;
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
                    transition-duration: 0.5s;
                }

                .coverImg:hover {
                    width: 52%;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
                }

                .authorBlock {
                    display: flex;
                    padding-top: 2%;
                    flex-direction: horizontal;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }

                .authorImg {
                    border-radius: 50%;
                    width: 50px;
                    margin: 0 !important;
                }

                .author {
                    margin: 0 !important;
                }
                
                h1, h2, h3, h4 {
                   margin: 2% auto;
                }

                h1 {
                    margin-top: 5%;
                    font-size: 3rem;
                    font-weight: 800;
                    text-align: center;
                }

                h2 {
                    font-size: 2rem;
                    font-weight: 600;
                    margin-top: 7.5%;
                }

                h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                }

                p {
                    font-size: 20px;
                    line-height: 1.7;
                    color: #333;
                    margin-bottom: 3.5%;
                    text-align: left;
                }
                
                img, p > img {
                    display: block;
                    margin: auto;
                }

                img {
                    max-width: 100%;
                    margin: 5% auto;
                }

                ul {
                    margin-bottom: 3.5%;
                    color: #333;
                    line-height: 1.7;
                }

                li {
                    list-style: inside disc;
                    font-size: 20px;
                }

                iframe {
                    display: block;
                    margin: 5% auto;
                }

                .twitter-tweet {
                    margin: 5% auto;
                }

                .author {
                    text-align: center;
                }

                @media (max-width: 812px) {
                    .container {
                        padding: 0 5%;
                    }

                    .coverImg {
                        width: 100%;
                    }

                    h1 {
                       font-size: 2rem; 
                    }

                    h2 {
                        font-size: 1.5rem;
                        margin-top: 15%;
                    }

                    h3 {
                        font-size: 1.25rem;
                        font-weight: 600;
                    }

                    p {
                        text-align: left;
                        font-size: 18px;
                        margin-bottom: 5%;
                    }

                    p > img {
                        max-width: 300px;
                    }

                    li {
                        font-size: 18px;
                    }

                    iframe {
                        width: 100%;
                    }
                }

                
            `}</style>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync('src/posts')
    console.log('files: ', files)
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    console.log('paths: ', paths)

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async({params: {slug}}) => {
    const md = new mdit({
        html: true,
        breaks: true,
        linkify: true
    })
    
    const markdownWithMetadata = fs.readFileSync(path.join('src/posts', slug + '.md')).toString()
    const parsedMarkdown = matter(markdownWithMetadata)
    const htmlString = md.render(parsedMarkdown.content)

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    }
}

const addTargetToLinks = (tags) => {
    for (let i = 0; i < tags.length; i++) {
        tags[i].setAttribute("target", "_blank")
    }
}

const getArticleUrl = (slug) => {
    return "https://okizeme.com/posts/" + slug
}

export default Post;