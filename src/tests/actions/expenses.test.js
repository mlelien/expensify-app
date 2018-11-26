import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../../firebase/firebase';

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({id, amount, description, note, createdAt}) => {
    expenseData[id] = { amount, description, note, createdAt };
  });

  database.ref('expenses').set(expenseData)
    .then(() => {
      done();
    });
});

const createMockStore = configureMockStore([thunk]);

test('removeExpense test', () => {
  const result = removeExpense({id: '123'});
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('startRemoveExpense test', (done) => {
  const { id } = expenses[0];
  const store = createMockStore({ id });
  
  store.dispatch(startRemoveExpense({ id }))
       .then(() => {
          const actions = store.getActions();
          expect(actions.length).toBe(1);
          expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
          });

          return database.ref(`expenses/${id}`).once('value')
       })
       .then((snapshot) => {
         expect(snapshot.val()).toBe(null);
         done();
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

test('startEditExpense test', (done) => {
  const { id } = expenses[1];
  const updates = {
    description: 'Trident',
    note: 'Chewable'
  };
  const store = createMockStore({});

  store.dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(1);
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });

      return database.ref(`expenses/${id}`).once('value');
    })
    .then((snapshot) => {  
      expect(snapshot.val().description).toEqual(updates.description);
      expect(snapshot.val().note).toEqual(updates.note);
      done();
    });
});

test('addExpense test', () => {
  const expense = expenses[0];
  const result = addExpense(expense);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense
  });
});

test('startAddExpense - default', (done) => {
  const defaultExpenseData = {
    description: '',
    note: '',
    amount: 0, 
    createdAt: 0
  };
  const store = createMockStore({});

  store.dispatch(startAddExpense({}))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
              ...defaultExpenseData,
              id: expect.any(String)
            }
          });

          return database.ref(`expenses/${actions[0].expense.id}`).once('value');
       })
        .then((snapshot) => {
          expect(snapshot.val()).toEqual(defaultExpenseData);
          done();
        });
});

test('startAddExpense - value', (done) => {
  const expenseData = {
    description: 'Flour',
    note: 'never in house',
    amount: 50, 
    createdAt: 1000
  };

  const store = createMockStore(expenseData);

  store.dispatch(startAddExpense(expenseData))
       .then(() => {
         const actions = store.getActions();
         expect(actions.length).toBe(1);
         expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
         });

         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
       })
       .then((snapshot) => {
         expect(snapshot.val()).toEqual(expenseData);
         done();
       });
});

test('setExpenses test', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
}); 

test('startSetExpenses', (done) => {
  const store = createMockStore({});

  store.dispatch(startSetExpenses())
       .then(() => {
          const actions = store.getActions();
          expect(actions.length).toBe(1);
          expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
          });
          done();
       });
});