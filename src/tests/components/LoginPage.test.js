import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLogin;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test('LoginPage snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});

test('startLogin called', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});