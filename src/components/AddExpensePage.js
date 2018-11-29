import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startAddExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import { history } from '../routers/AppRouter';

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    const { startAddExpense: startAddExpenseLocal } = this.props;

    startAddExpenseLocal(expense);
    history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

AddExpensePage.propTypes = {
  startAddExpense: PropTypes.func.isRequired,
  // history: PropTypes.shape({
  //   push: PropTypes.func.isRequired
  // }).isRequired
};

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
