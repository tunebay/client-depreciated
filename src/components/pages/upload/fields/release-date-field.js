import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ReleaseDateField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null
    };
  }

  handleDateChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <div className="release-date-field">
        <label
          className="field-label"
          htmlFor={this.props.label}
        >Release date
        </label>
        <div>
          <DatePicker
            className="date-picker-input"
            dateFormat="DD/MM/YYYY"
            todayButton="Today"
            {...this.props.input}
            selected={this.state.date}
            onChange={this.handleDateChange.bind(this)}
            placeholderText="DD/MM/YYYY"
            isClearable
            maxDate={moment()}
          />
        </div>
      </div>
    );
  }
}

export default ReleaseDateField;
