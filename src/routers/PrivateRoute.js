import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
  const { 
    path, 
    component: Component, 
    isAuthenticated,
    ...rest
  } = props;

  const routeBasedOnAuth = () => {
    if (isAuthenticated) {
      return (
        <div>
          <Component {...props} />
        </div>
      );
    } 
  
    return <Redirect to='/' />;
  };

  return (
    <div>
      <Route {...rest} component={routeBasedOnAuth} />
    </div>
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);