import React from 'react';
import { connect } from "react-redux";
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import getExpensesTotal from "../selectors/getExpensesTotal";

export const ExpensesSummary = (props) => {
  const { expensesCount, totalAmount } = props;
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const total = numeral(totalAmount / 100).format('$0,0.00');

  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{total}</span>
        </h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  );
}

ExpensesSummary.propTypes = {
  expensesCount: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  expensesCount: getVisibleExpenses(state.expenses, state.filters).length,
  totalAmount: getExpensesTotal(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);