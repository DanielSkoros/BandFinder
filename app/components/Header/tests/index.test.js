import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  const renderedComponent = shallow(<Header />);

  it('should render a div', () => {
    expect(renderedComponent.length).toEqual(1);
  });
  it('should contain logo', () => {
    expect(renderedComponent.find('.logo').text()).toEqual('BandFinder');
  });
  it('should render ul', () => {
    expect(renderedComponent.find('ul').length).toEqual(1);
  });
  it('ul should have 3 children', () => {
    expect(renderedComponent.find('ul').children().length).toEqual(3);
  });
});
