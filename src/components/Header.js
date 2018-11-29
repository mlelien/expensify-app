import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { startLogout } from '../actions/auth';

export const Header = (props) => {
  const { startLogout: startLogoutLocal } = props;

  return (
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <Link className='header__title' to='/dashboard'><h1>Expensify</h1></Link>
          <button className='button button--link' type='submit' onClick={startLogoutLocal}>Logout</button>
        </div>
      </div>
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
