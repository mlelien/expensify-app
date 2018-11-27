import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let startAddExpense;
let wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} />
  );
});

test("AddExpensePage -- render", () => {
  expect(wrapper).toMatchSnapshot();
});

test("AddExpensePage -- onSubmit - Gum", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(startAddExpense).toHaveBeenCalledWith(expenses[1]);
  //expect(history.push).toHaveBeenCalledWith("/dashboard");
});
