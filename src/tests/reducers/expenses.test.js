import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("expensesReducer init", () => {
  const defaultState = expensesReducer(undefined, { type: "@@INIT" });
  expect(defaultState).toEqual([]);
});

test("addExpense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      description: "Tree",
      note: "Gardening",
      amount: 10000,
      createdAt: moment(5000)
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("removeExpense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("removeExpense - fail", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "asd"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses]);
});

test("editExpense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      note: "Trident"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe("Trident");
});

test("editExpense -- fail", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "asdf",
    updates: {
      note: "Trident"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
