import React, { Component } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

class ReleaseDateField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null
    };
  }

  render() {
    return (
      <div className="release-date-field">
        <label htmlFor="release-date-field" className="field-label">Release date</label>
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          showClearDate
          displayFormat="DD/MM/YYYY"
          numberOfMonths={1}
          placeholder={'DD/MM/YYYY'}
        />
      </div>
    );
  }
}

export default ReleaseDateField;
