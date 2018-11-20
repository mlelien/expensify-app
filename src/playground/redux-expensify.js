import { createStore, combineReducers } from 'redux';









store.subscribe(() => {
  const state = store.getState();
});

const expense1Action = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 100}));
const expense2Action = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 500}));

// store.dispatch(removeExpense({id: expense1Action.expense.id }));
// store.dispatch(editExpense(expense2Action.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [{
    id: 'soidfjaoidsf',
    description: 'January rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
