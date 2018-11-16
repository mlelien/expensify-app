import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('setStartDate', () => {
  const result = setStartDate(moment(0));
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('setEndDate', () => {
  const result = setEndDate(moment(0));
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('setTextFilter', () => {
  const text = 'date';
  const result = setTextFilter(text);
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('setTextFilter default', () => {
  const result = setTextFilter();
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('sortByDate', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('sortByAmount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

