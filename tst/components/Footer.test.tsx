import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Footer from '../../src/components/Footer'

let wrapper: ShallowWrapper

describe('Footer', () => {
    it('should render without throwing an error', () => {
        wrapper = shallow(<Footer />)
        expect(wrapper).not.toBeNull()
    })
})