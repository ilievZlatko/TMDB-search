import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card/Card';

describe('<Card />', () => {
    it('should get 2 properties, cardImage and children', () => {
        const props = {
            cardImage: '',
            children: () => (<div>test</div>)
        }
        const wrap = shallow(<Card {...props} />);

        expect(wrap.props()).toContain('cardImage');
        expect(wrap.props()).toContain('children');
    });
});