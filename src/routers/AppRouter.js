import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import { Switch, BrowserRouter, Route } from 'react-router-dom'; 

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ExpenseDashboardPage}/>
        <Route exact path='/create' component={AddExpensePage}/>
        <Route path='/edit/:id' component={EditExpensePage}/>
        <Route exact path='/help' component={HelpPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;