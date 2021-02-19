import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import HomeArticleCard from '../../src/components/HomeArticleCard'

let wrapper: ShallowWrapper

const shibaImg = "https://i.pinimg.com/originals/c3/35/c5/c335c53b8b2ad7dded3add1f4c0c1e0d.jpg"

describe('Footer', () => {
    it('should render without throwing an error', () => {
        wrapper = shallow(<HomeArticleCard title="testTitle"
                                           description="testDescription"
                                           imgSrc={shibaImg}
                                           src="testSrc"
                                           wc={420}/>)
        expect(wrapper).not.toBeNull()
    })
})