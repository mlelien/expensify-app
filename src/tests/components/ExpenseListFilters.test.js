import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { defaultFilters, filters } from "../fixtures/filters";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={defaultFilters}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test("ExpenseListFilters -- render - default filters", () => {
  expect(wrapper).toMatchSnapshot();
});

test("ExpenseListFilters -- render - filters", () => {
  wrapper.setProps({ filters });
  expect(wrapper).toMatchSnapshot();
});

test("ExpenseListFilters -- textFilterOnChange - text: gum", () => {
  const value = "gum";
  const e = {
    target: { value }
  };
  wrapper.find("input").simulate("change", e);
  expect(setTextFilter).toHaveBeenCalledWith(value);
  // expect(wrapper.find('input').prop('value')).toBe(value);
});

test("ExpenseListFilters -- selectFilterOnChange -- sortBy: amount", () => {
  const value = "amount";
  const e = {
    target: { value }
  };
  wrapper.find("select").simulate("change", e);
  expect(sortByAmount).toHaveBeenCalled();
  // expect(wrapper.find('select').prop('value')).toBe(value);
});

test("ExpenseListFilters -- selectFilterOnChange -- sortBy: amount", () => {
  const value = "date";
  const e = {
    target: { value }
  };
  wrapper.find("select").simulate("change", e);
  expect(sortByDate).toHaveBeenCalled();
  // expect(wrapper.find('select').prop('value')).toBe(value);
});

test("ExpenseListFilters -- onDatesChange", () => {
  const e = {
    startDate: moment().startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf() 
  };

  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(e);
  expect(setStartDate).toHaveBeenCalledWith(e.startDate);
  expect(setEndDate).toHaveBeenCalledWith(e.endDate);
});

test("ExpenseListFilters -- onFocusChange", () => {
  const focusedInput = 'startDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focusedInput);
  expect(wrapper.state().focusedInput).toBe(focusedInput);
});
