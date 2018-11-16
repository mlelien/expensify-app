import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('removeExpense test', () => {
  const result = removeExpense({id: '123'});
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('editExpense test', () => {
  const result = editExpense('123', { note: 'New note value' });
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'New note value'
    }
  });
});

test('addExpense with values', () => {
  const expenseData = {
    description: 'Gas Bill',
    note: 'Utilities', 
    amount: 10000, 
    createdAt: 1000
  };

  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('addExpense with defaults', () => {
  const result = addExpense();
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '', 
      amount: 0, 
      createdAt: 0
    }
  });
});