import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import logo from 'logo.svg';
import Home from './index';

describe('Home', () => {
  const wrapper = shallow(<Home />);
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('has the proper text...', () => {
    expect(wrapper.contains('Home asdasd')).to.equal(true);
  });
});
