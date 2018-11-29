import React from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import { expensePropTypes } from "../lib/proptypes";
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import ExpenseListItem from "./ExpenseListItem";

export const ExpenseList = props => {
  const { expenses } = props;

  return (
    <div className='content-container'>

      <div className='list-header'>
        <div className='show-for-mobile'>Expenses</div>
        <div className='show-for-desktop'>Expense</div>
        <div className='show-for-desktop'>Amount</div>
      </div>

      <div className='list-body'>
        {expenses.length === 0 ? (
          <div className='list-item__message'>
            <span>No expenses</span>
          </div>
        ) : (
          expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))
        )}
      </div>
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
