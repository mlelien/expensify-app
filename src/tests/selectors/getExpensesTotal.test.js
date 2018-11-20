import getExpensesTotal from "../../selectors/getExpensesTotal";
import { defaultFilters } from '../fixtures/filters';
import  expenses from '../fixtures/expenses';

test('getExpensesTotal -- 0 expense', () => {
  const result = getExpensesTotal([], defaultFilters);
  expect(result).toBe(0);
});

test('getExpensesTotal -- 1 expense', () => {
  const result = getExpensesTotal([expenses[0]], defaultFilters);
  expect(result).toBe(4000);
});

test('getExpensesTotal -- Multiple expense', () => {
  const result = getExpensesTotal(expenses, defaultFilters);
  expect(result).toBe(4350);
});