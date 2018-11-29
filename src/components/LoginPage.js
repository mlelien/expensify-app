import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => {
  const { startLogin: startLoginLocal } = props;

  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expensify App</h1>
        <p>It's time to get your expenses under control.</p>
        <button className='button' onClick={startLoginLocal} type='submit'>Login with Google</button>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  startLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: dispatch(startLogin)
});

export default connect(undefined, mapDispatchToProps)(LoginPage);