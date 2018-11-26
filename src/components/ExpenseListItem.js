import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <NavLink exact to={`/edit/${id}`}><h3>{description}</h3></NavLink>
    <p>
      {numeral(amount / 100).format('$0,0.00')} 
      - 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

ExpenseListItem.defaultProps = {
  createdAt: undefined
};

ExpenseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number
};

export default ExpenseListItem;
