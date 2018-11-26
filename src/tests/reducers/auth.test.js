import authReducer from '../../reducers/auth';

test('login test reducer', () => {
  const uid = 'test-uid';
  const loginAction = {
    type: 'LOGIN',
    uid
  };

  const state = authReducer({}, loginAction);
  expect(state).toEqual({
    uid
  });
});

test('logout test reducer', () => {
  const logoutAction = {
    type: 'LOGOUT'
  };

  const state = authReducer({ uid: 'test-uid' }, logoutAction);
  expect(state).toEqual({});
});