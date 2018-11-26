import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../actions/expenses";
import { historyPropTypes, expensePropTypes } from "../lib/proptypes";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    const {
      editExpense: editExpenseLocal,
      history,
      expense: { id }
    } = this.props;
    editExpenseLocal(id, expense);
    history.push("/");
  };

  onRemove = () => {
    const {
      removeExpense: removeExpenseLocal,
      expense: { id },
      history
    } = this.props;
    removeExpenseLocal(id);
    history.push("/");
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
  editExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  history: historyPropTypes.isRequired,
  expense: expensePropTypes.isRequired
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: id => dispatch(startRemoveExpense({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
