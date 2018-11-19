import React from 'react';
import { shallow } from 'enzyme';
import DateDisplayer from '../DateDisplayer/DateDisplayer';

describe('<DateDisplayer />', () => {
    it('should render formated date by given format', () => {
        const props = {
            inputDate: '2018-11-19',
            dateFormat: 'YYYY.MM.DD'
        };
        const wrap = shallow(<DateDisplayer {...props} />);

        expect(wrap.text()).toEqual('2018.11.19');
    });

    it('should render label + formated date', () => {
        const props = {
            inputDate: '2018-11-19',
            dateFormat: 'YYYY.MM.DD',
            label: 'date:'
        };
        const wrap = shallow(<DateDisplayer {...props} />);

        expect(wrap.text()).toEqual('date: 2018.11.19');
    });

    it('should default to no date text if no date provided', () => {
        const wrap = shallow(<DateDisplayer />);

        expect(wrap.text()).toEqual('no date available');
    });

    it('should default YYYY/MM/DD if no date format provided', () => {
        const props = {
            inputDate: '2018-11-19',
        };

        const wrap = shallow(<DateDisplayer {...props} />);

        expect(wrap.text()).toEqual('2018/11/19');
    });
});