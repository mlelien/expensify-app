import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import PropTypes from 'prop-types';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: null
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { setStartDate: setStartDateLocal, setEndDate: setEndDateLocal } = this.props;

    setStartDateLocal(startDate);
    setEndDateLocal(endDate);
  };

  onFocusChange = focusedInput => {
    this.setState(() => ({ focusedInput }));
  };

  textFilterOnChange = e => {
    const { setTextFilter: setTextFilterLocal } = this.props;
    setTextFilterLocal(e.target.value);
  };

  selectFilterOnChange = e => {
    const { sortByDate: sortByDateLocal, sortByAmount: sortByAmountLocal } = this.props;
    if (e.target.value === 'date') {
      sortByDateLocal();
    } else if (e.target.value === 'amount') {
      sortByAmountLocal();
    }
  };

  render() {
    const {
      filters: { text, sortBy, startDate, endDate }
    } = this.props;

    const { focusedInput } = this.state;

    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input 
              className='text-input' 
              type='text' 
              value={text} 
              placeholder='Search expenses'
              onChange={this.textFilterOnChange} />
          </div>
          <div className='input-group__item'>
            <select className='select' value={sortBy} onChange={this.selectFilterOnChange}>
              <option value='date'>Date</option>
              <option value='amount'>Amount</option>
            </select>
          </div>
          <div className='input-group__item'>
            <DateRangePicker
              startDate={startDate}
              startDateId='startDate'
              endDate={endDate}
              endDateId='endDate'
              onDatesChange={this.onDatesChange}
              focusedInput={focusedInput}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates
            />
          </div>
        </div>
      </div>
    );
  }
}

ExpenseListFilters.defaultProps = {
  filters: undefined
};

ExpenseListFilters.propTypes = {
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
  setTextFilter: PropTypes.func.isRequired,
  sortByAmount: PropTypes.func.isRequired,
  sortByDate: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    text: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    startDate: PropTypes.object,
    endDate: PropTypes.object
  })
};

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setTextFilter: value => dispatch(setTextFilter(value)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
