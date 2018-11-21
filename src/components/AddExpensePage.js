import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startAddExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    const { startAddExpense: startAddExpenseLocal, history } = this.props;

    startAddExpenseLocal(expense);
    history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

AddExpensePage.propTypes = {
  startAddExpense: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
