import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Input } from 'reactstrap';
import Login from './Login';

describe('Login', () => {
  const wrapper = shallow(<Login />);
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('contains the email entry...', () => {
    expect(wrapper.find(Input).length).to.equal(2);
  });
});
