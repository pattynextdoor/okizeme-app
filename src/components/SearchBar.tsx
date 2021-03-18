import React, { useState } from 'react'
import FuzzySearch from 'react-fuzzy'

import styles from './SearchBar.module.css'

import articleData from '../data/articles.json'

const articles = articleData.articles

export default function SearchBar(props) {
    let [selectedItem, setSelectedItem] = useState()

    return(
        <>
            <FuzzySearch list={articles}
                         keys={["title", "description"]}
                         placeholder="🔍 SEARCH"
                         width={200}
                         distance={500}
                         maxPatternLength={200}
                         threshold={0.4}
                         className={styles.searchBar}
                         onSelect={(newSelectedItem) => {
                             setSelectedItem(newSelectedItem)
                         }}
                         resultsTemplate={(props, state, styles, clickHandler) => {
                            return state.results.map((val, index) => {
                                const style = state.selectedIndex === index ? styles.selectedResultStyle : styles.resultsStyle
                                return (
                                    <>
                                        <div key={index}
                                            style={style}>
                                            <a href={"https://okizeme.com/posts/" + val.src}
                                            target="_none"
                                            style={{
                                                "color": "#333",
                                            }}>
                                                <span>{val.title}</span>
                                            </a>
                                        </div>
                                    </>
                                )
                            })
                         }}/>
        </>
    )
}