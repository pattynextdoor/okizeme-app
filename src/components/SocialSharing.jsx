import { useState } from 'react'

import { FaTwitter, FaFacebookF, FaLink} from 'react-icons/fa'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import styles from './SocialSharing.module.css'
import StateBlock from 'markdown-it/lib/rules_block/state_block'

export default function SocialSharing(props) {
    const [isCopied, setIsCopied] = useState(false)

    const links = generateSharingLinks(props.articleLink)

    return (
        <div className={styles.socialSharing}>
            <h5 className={styles.socialHeading}>Share this article</h5>
            <div className={styles.shareButtons}>
                <a href={links.twitter}>
                   <FaTwitter className={styles.icon}/> 
                   <span className={styles.shareText}> Tweet</span>
                </a>
                <a href={links.fb}>
                   <FaFacebookF className={styles.icon}/> 
                   <span className={styles.shareText}> Share</span>
                </a>
                <a>
                    <CopyToClipboard text={links.copy}
                                    onCopy={() => setIsCopied(true)}>
                        <div className="clipboardContents">
                            <FaLink className={styles.icon}/> 
                            <span className={styles.shareText}> Copy Link</span>
                        </div>
                    </CopyToClipboard>
                </a>
                { isCopied ? <p className={styles.linkCopiedText}>Link copied! (´▽`ʃ♡ƪ)</p> : null} 
            </div> 
        </div>
    )
}

const generateSharingLinks = (articleLink) => {
    const urlEncoded = encodeURI(articleLink)

    const fbLink = "https://www.facebook.com/sharer/sharer.php?u=" + urlEncoded
    const twitterLink = "https://twitter.com/intent/tweet?text=" + urlEncoded
    const copyLink = articleLink

    return {
        "fb": fbLink,
        "twitter": twitterLink,
        "copy": copyLink 
    }
}