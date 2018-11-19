import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Card/Card';

describe('<Card />', () => {
    it('should get 2 properties, cardImage and children', () => {
        const props = {
            cardImage: '',
        }
        const wrap = shallow(<Card {...props} />);

        expect('cardImage' in wrap.props());
        expect('children' in wrap.props());
    });

    it('should render and display children correctly', () => {
        const props = {
            children: [
                <div key="1">test1</div>,
                <div key="2">test2</div>
            ]
        }
        const wrap = shallow(<Card {...props} />);

        expect(wrap.contains(<div className="card__right"><div>test1</div><div>test2</div></div>)).toBe(true);
        expect(wrap.children()).toHaveLength(2);
    });
});