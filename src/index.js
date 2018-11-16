import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const thisMonth = moment()
  .startOf('month')
  .valueOf();
const thisMonthPlusOneDay = moment(thisMonth)
  .add(1, 'days')
  .valueOf();
const thisMonthPlusTwoDays = moment(thisMonth)
  .add(2, 'days')
  .valueOf();

store.dispatch(addExpense({ description: 'Gas bill', amount: 4000, createdAt: thisMonth }));
store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 109500,
    createdAt: thisMonthPlusOneDay
  })
);
store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 4500,
    createdAt: thisMonthPlusTwoDays
  })
);

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
