import { login, logout } from '../../actions/auth';

test('login test - action', () => {
  const uid = 'uid-test';
  const result = login(uid);
  expect(result).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('logout test - action', () => {
  const result = logout();
  expect(result).toEqual({
    type: 'LOGOUT'
  });
});