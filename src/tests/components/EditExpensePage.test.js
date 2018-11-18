import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let removeExpense;
let editExpense;
let history;
let wrapper;

beforeEach(() => {
  removeExpense = jest.fn();
  editExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      removeExpense={removeExpense}
      editExpense={editExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});

test("EditExpensePage -- render", () => {
  expect(wrapper).toMatchSnapshot();
});

test("EditExpensePage -- onRemove", () => {
  wrapper.find("button").simulate("click");
  const { id } = expenses[1];

  expect(removeExpense).toHaveBeenCalledWith(id);
  expect(history.push).toHaveBeenCalledWith("/");
});

test("EditExpensePage -- onSubmit", () => {
  wrapper.find("ExpenseForm").simulate("submit", expenses[1]);

  expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1]);
  expect(history.push).toHaveBeenCalledWith("/");
});