import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let addExpense;
let history;
let wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test("AddExpensePage -- render", () => {
  expect(wrapper).toMatchSnapshot();
});

test("AddExpensePage -- onSubmit - Gum", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(addExpense).toHaveBeenCalledWith(expenses[1]);
  expect(history.push).toHaveBeenCalledWith("/");
});
