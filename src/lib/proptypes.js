import PropTypes from 'prop-types';

export const expensePropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  note: PropTypes.string,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number
});

export const historyPropTypes = PropTypes.shape({
  push: PropTypes.func.isRequired
});
