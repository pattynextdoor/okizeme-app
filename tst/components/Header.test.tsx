import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Header from '../../src/components/Footer'

let wrapper: ShallowWrapper

describe('Footer', () => {
    it('should render without throwing an error', () => {
        wrapper = shallow(<Header />)
        expect(wrapper).not.toBeNull()
    })
})