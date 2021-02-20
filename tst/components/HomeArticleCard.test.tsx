import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import HomeArticleCard from '../../src/components/HomeArticleCard'

let wrapper: ShallowWrapper

const testProps = {
    title: "testTitle",
    description: "testDescription",
    imgSrc: "testImage",
    src: "testSrc",
    wc: 420
}

describe('HomeArticleCard', () => {
    it('should render without throwing an error', () => {
        wrapper = shallow(<HomeArticleCard {...testProps}/>)
        expect(wrapper).not.toBeNull()
    })

    it('should convert word count to minutes correctly', () => {
        const expectedMinutes = 2

        wrapper = shallow(<HomeArticleCard {...testProps} />)
        const tag = wrapper.find("Tag").render()
        expect(tag.text()).toBe(`${expectedMinutes} minute read`)
    })
})