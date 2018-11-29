import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { SingleDatePicker } from "react-dates";
import { expensePropTypes } from "../lib/proptypes";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onCalendarFocusChanged = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    const { amount, description, createdAt, note } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();

    if (!amount || !description) {
      this.setState(() => ({ error: "Please type in amount and description" }));
    } else {
      this.setState(() => ({ error: "" }));

      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      });
    }
  };

  render() {
    const {
      error,
      amount,
      description,
      calendarFocused,
      value,
      createdAt
    } = this.state;

    return (
      <div>
        {error && <p className='form__error'>{error}</p>}
        <form className='form' onSubmit={this.onSubmit}>
          <input
            className='text-input'
            type='text'
            placeholder='Description'
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            className='text-input'
            type='text'
            placeholder='Amount'
            value={amount}
            onChange={this.onAmountChange}
          />
          <textarea
            className='textarea'
            value={value}
            onChange={this.onNoteChange}
            placeholder='Note (optional)'
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onCalendarFocusChanged}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <div>
            <button className='button' type='submit'>Save Expense</button>
          </div>
        </form>
      </div>
    );
  }
}

ExpenseForm.defaultProps = {
  expense: undefined
};

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  expense: expensePropTypes
};
