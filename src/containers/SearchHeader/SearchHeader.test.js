import React from 'react';
import SearchHeader from './SearchHeader';
import { shallow, mount } from 'enzyme';

// describe('SearchHeader component', () => {
//   it('should receive value prop, and renders correctly', () => {
//     const wrapper = shallow(<SearchHeader value="" />);
//     console.log(wrapper.prop('value'));
//     expect(wrapper.prop('value')).toBe('');
//     wrapper.setProps({ value: 'test' });
//     expect(wrapper.prop('value')).toBe('test');
//   });
// });