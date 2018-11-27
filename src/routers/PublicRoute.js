import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PublicRoute = (props) => {
  const { 
    path, 
    component: Component, 
    isAuthenticated,
    ...rest
  } = props;

  const routeBasedOnAuth = () => {
    if (isAuthenticated) {
      return <Redirect to='/dashboard' />;
    }

    return <Component {...props} />;
  };

  return (
    <div>
      <Route {...rest} component={routeBasedOnAuth} />
    </div>
  );
};

PublicRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);