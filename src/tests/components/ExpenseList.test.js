import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { ExpenseList } from "../../components/ExpenseList";

test("ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("ExpenseList - empty", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
