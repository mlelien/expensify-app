import getVisibleExpenses from './getVisibleExpenses';

const getExpensesTotal = (expenses, {text, sortBy, startDate, endDate}) => {
  const visibleExpenses = getVisibleExpenses(expenses, {text, sortBy, startDate, endDate});

  const reducer = (acc, currAmount) => acc + currAmount;
  const total = visibleExpenses.map( expense => expense.amount)
                 .reduce(reducer, 0);
  return total;  
}

export default getExpensesTotal;
