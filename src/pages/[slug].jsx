import Head from 'next/head'
import React from 'react'

import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import mdit from 'markdown-it'

import UIShell from '../components/templates/UIShell'

const Post = ({htmlString, data}) => {
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <main>
                <UIShell></UIShell>
                <div className="container"
                     dangerouslySetInnerHTML={{ __html: htmlString}}></div>
            </main>
            <style global jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Khula:wght@600;700;800&family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');
                
                h1:first-child {
                    margin-top: 10%;
                    font-size: 4rem;
                    font-weight: 800;
                }

                h2 {
                    font-size: 2.5rem;
                }

                h3 {
                    font-size: 2rem;
                }

                h1, h2, h3, h4 {
                   margin: 2% auto;
                   font-family: Khula; 
                }

                p {
                    font-size: 20px;
                    line-height: 1.5;
                    letter-spacing: 1px;
                    color: #333;
                    font-family: Noto Sans JP;

                    margin-bottom: 2%;
                }

                .container {
                    margin-left: 25%;
                    padding-right: 15%;
                }
            `}</style>
        </>
    )
}

export const getStaticPaths = async () => {
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

export const getStaticProps = async({params: {slug}}) => {
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

export default Post;