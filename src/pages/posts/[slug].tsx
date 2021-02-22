import Head from 'next/head'
import React, { useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import mdit from 'markdown-it'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SocialSharing from '../../components/SocialSharing'

import { GetStaticPaths, GetStaticProps} from 'next'

const Post = ({htmlString, data}) => {
    useEffect(() => {
        let anchorTags = document.querySelectorAll('a')
        addTargetToLinks(anchorTags)
    })

    const articleUrl = getArticleUrl(data.slug)

    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta property="og:title" content={data.title}/>
                <meta property="og:description" content={data.description}/>
                <meta property="og:image" content={data.cover}/>
                <meta property="og:type" content="article" />
                <meta name="twitter:title" content={data.title}/>
                <meta name="twitter:description" content={data.description}/>
                <meta name="twitter:image" content={data.cover}/>
            </Head>

            <Header/>
            <main>
                <SocialSharing articleLink={articleUrl} />
                <img className="coverImg" src={data.cover} alt={data.title} />
                <div className="container"
                     dangerouslySetInnerHTML={{ __html: htmlString}}></div>
            </main>
            <Footer />
            <style global jsx>{`
                .container {
                    padding: 0 25%;
                }

                .coverImg {
                    margin: 0 auto;
                    margin-top: 2%;
                    width: 50%;
                    display: block;
                    border: 1px solid black;
                    border-bottom: 5px solid red;
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
                }

                p {
                    font-size: 20px;
                    line-height: 1.7;
                    color: #333;
                    margin-bottom: 3.5%;
                    text-align: left;
                }
                
                p > img {
                    display: block;
                    margin: auto;
                }

                @media (max-width: 768px) {
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
                        font-size: 1rem;
                    }

                    p {
                        text-align: left;
                        font-size: 18px;
                        margin-bottom: 5%;
                    }

                    p > img {
                        max-width: 300px;
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

const addTargetToLinks = (tags: HTMLAnchorElement[]) => {
    for (let i = 0; i < tags.length; i++) {
        tags[i].setAttribute("target", "_blank")
    }
}

const getArticleUrl = (slug) => {
    return "https://okizeme.com/posts/" + slug
}

export default Post;