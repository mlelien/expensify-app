// Get visible expenses
import moment from 'moment';

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => expenses.filter((expense) => {
  const createdAtMoment = moment(expense.createdAt);
  
  const startDateFlag = startDate ? (startDate.isSameOrBefore(createdAtMoment, 'day')) : true;
  const endDateFlag = endDate ? (endDate.isSameOrAfter(createdAtMoment, 'day')) : true;
  const textFlag = expense.description.toLowerCase().includes(text);

  return startDateFlag && endDateFlag && textFlag;
}).sort((a, b) => {
  if (sortBy === 'date') {
    return a.createdAt < b.createdAt ? 1 : -1;
  } else if (sortBy === 'amount') {
    return a.amount < b.amount ? 1 : -1;
  }
});

export default getVisibleExpenses;