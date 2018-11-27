import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../../firebase/firebase';

const uid = 'test-uid';
const defaultAuthState = { auth: {uid} };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({id, amount, description, note, createdAt}) => {
    expenseData[id] = { amount, description, note, createdAt };
  });

  database.ref(`users/${uid}/expenses`).set(expenseData)
    .then(() => {
      done();
    });
});

test('removeExpense action', () => {
  const result = removeExpense({id: '123'});
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('startRemoveExpense action', (done) => {
  const { id } = expenses[0];
  const store = createMockStore(defaultAuthState);
  
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

test('editExpense action', () => {
  const result = editExpense('123', { note: 'New note value' });
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'New note value'
    }
  });
});

test('startEditExpense action', (done) => {
  const { id } = expenses[1];
  const updates = {
    description: 'Trident',
    note: 'Chewable'
  };
  const store = createMockStore(defaultAuthState);

  store.dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(1);
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {  
      expect(snapshot.val().description).toEqual(updates.description);
      expect(snapshot.val().note).toEqual(updates.note);
      done();
    });
});

test('addExpense action', () => {
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
  const store = createMockStore(defaultAuthState);

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

          return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
       })
        .then((snapshot) => {
          expect(snapshot.val()).toEqual(defaultExpenseData);
          done();
        });
});

test('startAddExpense - action', (done) => {
  const expenseData = {
    description: 'Flour',
    note: 'never in house',
    amount: 50, 
    createdAt: 1000
  };

  const store = createMockStore(defaultAuthState);

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

         return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
       })
       .then((snapshot) => {
         expect(snapshot.val()).toEqual(expenseData);
         done();
       });
});

test('setExpenses action', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
}); 

test('startSetExpenses', (done) => {
  const store = createMockStore(defaultAuthState);

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