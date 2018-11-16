import React from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import { expensePropTypes } from "../lib/proptypes";
import getVisibleExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

export const ExpenseList = props => {
  const { expenses } = props;

  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropType.arrayOf(expensePropTypes).isRequired
};

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
