import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import logo from 'logo.svg';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('has the logo...', () => {
    expect(wrapper.contains(<img src={require(logo)} className="App-logo" alt="logo" />)).to.equal(true);
  });
});
