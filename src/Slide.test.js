import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slide from './Slide';
import SlideItem from './SlideItem';
import LeftArrow from './LeftArrow';
import RightArrow from './LeftArrow';

configure({adapter: new Adapter()});

it('renders Slide without crashing', () => {
  shallow(<Slide />);
});

it('renders SlideItem without crashing', () => {
    shallow(<SlideItem />);
});

it('renders SlideItem without crashing', () => {
    shallow(<LeftArrow />);
});

it('render RightArrow without crashing', () => {
    shallow(<RightArrow />);
});



