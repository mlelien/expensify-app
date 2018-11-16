import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

let onSubmitSpy, wrapper;
beforeEach(() => {
  onSubmitSpy = jest.fn();
  wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} />);
});

test("ExpenseForm -- no data", () => {
  expect(wrapper).toMatchSnapshot();
});

test("ExpenseForm -- Gas Bill", () => {
  wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("ExpenseForm -- onSubmit empty", () => {
  const e = { preventDefault: () => {} };
  wrapper.find("form").simulate("submit", e);
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("ExpenseForm -- onSubmit - Gas Bill", () => {
  wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  const e = { preventDefault: () => {} };

  wrapper.find("form").simulate("submit", e);
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test("ExpenseForm -- onDescriptionChange", () => {
  const value = "New description";
  const e = {
    target: { value }
  };
  wrapper
    .find("input")
    .at(0)
    .simulate("change", e);
  expect(wrapper.state("description")).toBe(value);
});

test("ExpenseForm -- onNoteChange", () => {
  const value = "New note";
  const e = {
    target: { value }
  };
  wrapper
    .find("textarea")
    .at(0)
    .simulate("change", e);
  expect(wrapper.state("note")).toBe(value);
});

test("ExpenseForm -- amount - 23.50", () => {
  const value = "23.50";
  const e = {
    target: { value }
  };
  wrapper
    .find("input")
    .at(1)
    .simulate("change", e);
  expect(wrapper.state("amount")).toBe(value);
});

test("ExpenseForm -- amount - 12.122", () => {
  const value = "12.122";
  const e = {
    target: { value }
  };
  wrapper
    .find("input")
    .at(1)
    .simulate("change", e);
  expect(wrapper.state("amount")).toBe("");
});

test("ExpenseForm -- onDateChange", () => {
  const now = moment();
  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("ExpenseForm -- onCalendarFocus", () => {
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
    focused: true
  });
  expect(wrapper.state("calendarFocused")).toBe(true);
});
