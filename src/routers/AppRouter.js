import React from 'react';
import { Switch, Router, Route } from 'react-router-dom'; 
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <PrivateRoute exact path='/dashboard' component={ExpenseDashboardPage} />
        <PrivateRoute exact path='/create' component={AddExpensePage} />
        <PrivateRoute exact path='/edit/:id' component={EditExpensePage} />
        <Route exact path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;