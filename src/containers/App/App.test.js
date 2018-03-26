import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('(Component) App', () => {
  const wrapper = shallow(<App />);
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});

// it('renders without crashing', () => {
//   const app = shallow(<App />);
//   expect(app.contains(`<img src={logo} className="App-logo" alt="logo" />`)).to.equal(true);
// });
