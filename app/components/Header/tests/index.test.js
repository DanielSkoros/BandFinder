import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.length).toEqual(1);
  });
  it('renders div and ul', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find('ul').children().length).toEqual(3);
    expect(renderedComponent.find('.nav').length).toEqual(1);
  });
});
