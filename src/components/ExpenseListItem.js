import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import moment from 'moment';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <NavLink exact to={`/edit/${id}`}><h3>{description}</h3></NavLink>
    <p>{amount} - {createdAt}</p>
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
