import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import SocialSharing from '../../src/components/SocialSharing'

let wrapper: ShallowWrapper

const articleLink = encodeURI("https://okizeme.com/posts/article-link")

describe('Footer', () => {
    it('should render without throwing an error', () => {
        wrapper = shallow(<SocialSharing articleLink="testLink"/>)
        expect(wrapper).not.toBeNull()
    })

    it('should generate sharing links from the articleLink prop', () => {
        const fb = "https://www.facebook.com/sharer/sharer.php?u="
        const twitter = "https://twitter.com/intent/tweet?text="
        
        wrapper = shallow(<SocialSharing articleLink={articleLink} />)
        const anchorTags = wrapper.find("a")

        expect(anchorTags.length).toBe(3)
        expect(anchorTags.find(`a[href="${fb + articleLink}"]`)).not.toBeNull()
        expect(anchorTags.find(`a[href="${twitter + articleLink}"]`)).not.toBeNull()
    })

    it('should show the cute little message thing when the article link is copied', () => {
        wrapper = shallow(<SocialSharing articleLink={articleLink} />)
        wrapper.find("CopyToClipboard").simulate("click")
        expect(wrapper.find("p.linkCopiedText")).not.toBeNull()
    })
})