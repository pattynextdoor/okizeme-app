import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import SearchBar from '../../src/components/SearchBar'

let wrapper: ShallowWrapper

describe('SearchBar', () => {
    it('should render without throwing an error', () => {
        wrapper = shallow(<SearchBar />)
        expect(wrapper).not.toBeNull()
    })
})