import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { expensePropTypes } from "../lib/proptypes";
import { history } from '../routers/AppRouter';

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    const {
      startEditExpense: startEditExpenseLocal,
      expense: { id }
    } = this.props;
    startEditExpenseLocal(id, expense);
    history.push("/dashboard");
  };

  onRemove = () => {
    const {
      startRemoveExpense: startRemoveExpenseLocal,
      expense: { id },
    } = this.props;
    startRemoveExpenseLocal(id);
    history.push("/dashboard");
  };

  render() {
    const { expense } = this.props;
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm expense={expense} onSubmit={this.onSubmit} />
          <button className='button--secondary' type='button' onClick={this.onRemove}>
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
}

EditExpensePage.propTypes = {
  startEditExpense: PropTypes.func.isRequired,
  startRemoveExpense: PropTypes.func.isRequired,
  expense: expensePropTypes.isRequired
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.computedMatch.params.id)
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: id => dispatch(startRemoveExpense({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
