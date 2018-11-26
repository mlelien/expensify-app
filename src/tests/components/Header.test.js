import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

let wrapper, startLogout;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test("render Header", () => {
  expect(wrapper).toMatchSnapshot();
});

test('startLogout called', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});