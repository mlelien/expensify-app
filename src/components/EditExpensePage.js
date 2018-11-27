import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { historyPropTypes, expensePropTypes } from "../lib/proptypes";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    const {
      startEditExpense: startEditExpenseLocal,
      history,
      expense: { id }
    } = this.props;
    startEditExpenseLocal(id, expense);
    history.push("/dashboard");
  };

  onRemove = () => {
    const {
      startRemoveExpense: startRemoveExpenseLocal,
      expense: { id },
      history
    } = this.props;
    startRemoveExpenseLocal(id);
    history.push("/dashboard");
  };

  render() {
    const { expense } = this.props;
    return (
      <div>
        <ExpenseForm expense={expense} onSubmit={this.onSubmit} />
        <button type='button' onClick={this.onRemove}>
          Remove
        </button>
      </div>
    );
  }
}

EditExpensePage.propTypes = {
  startEditExpense: PropTypes.func.isRequired,
  startRemoveExpense: PropTypes.func.isRequired,
  history: historyPropTypes.isRequired,
  expense: expensePropTypes.isRequired
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: id => dispatch(startRemoveExpense({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
