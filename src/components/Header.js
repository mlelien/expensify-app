import React from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { startLogout } from '../actions/auth';

export const Header = (props) => {
  const { startLogout: startLogoutLocal } = props;

  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact to='/dashboard' activeClassName='is-active'>Dashboard</NavLink>
      <NavLink exact to='/create' activeClassName='is-active'>Create Expense</NavLink>
      <NavLink exact to='/help' activeClassName='is-active'>Help</NavLink>
      <button type='submit' onClick={startLogoutLocal}>Logout</button>
    </header>
  )
};

Header.propTypes = {
  startLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: dispatch(startLogout)
});

export default connect(undefined, mapDispatchToProps)(Header);
