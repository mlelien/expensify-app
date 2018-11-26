import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => {
  const { startLogin: startLoginLocal } = props;

  return (
    <div>
      <button onClick={startLoginLocal} type='submit'>Login</button>
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