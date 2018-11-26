import React from 'react';
import { connect } from "react-redux";
import numeral from 'numeral';
import PropTypes from "prop-types";
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import getExpensesTotal from "../selectors/getExpensesTotal";

export const ExpensesSummary = (props) => {
  const { expensesCount, totalAmount } = props;
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const total = numeral(totalAmount / 100).format('$0,0.00');

  return (
    <div>
      <h1>
        Viewing {expensesCount} {expenseWord} totalling {total}
      </h1>
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