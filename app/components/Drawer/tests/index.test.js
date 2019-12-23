import React from 'react';
import { shallow } from 'enzyme/build';
import Drawer from '../Drawer';

describe('<Drawer />', () => {
  const renderedComponent = shallow(<Drawer />);
  it('should render a div', () => {
    expect(renderedComponent.length).toEqual(1);
  });
});
