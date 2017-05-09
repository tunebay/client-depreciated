import React, { Component } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ReleaseDateField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: null
    };
  }

  render() {
    // const maxDate = moment().add(1, 'day');
    // console.log(maxDate);
    const { input } = this.props;
    console.log('Input', input);
    const tomorrow = moment().add(1, 'days').startOf('day');
    return (
      <div className="release-date-field">
        <label htmlFor="release-date-field" className="field-label">Release date</label>
        <SingleDatePicker
          date={input.value || null} // momentPropTypes.momentObj or null
          onDateChange={date => input.onChange(date)} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          showClearDate
          // hideKeyboardShortcutsPanel
          isOutsideRange={day => day.isAfter(tomorrow)}
          displayFormat="DD/MM/YYYY"
          numberOfMonths={1}
          placeholder={'DD/MM/YYYY'}
        />
      </div>
    );
  }
}

export default ReleaseDateField;
