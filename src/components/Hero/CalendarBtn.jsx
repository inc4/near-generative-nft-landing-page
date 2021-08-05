import React from 'react';
import PropTypes from 'prop-types';

const CalendarBtn = ({ className }) => (
  <button type="button" className={className}>
    + Add to your Calendar
  </button>
);

CalendarBtn.defaultProps = {
  className: '',
};

CalendarBtn.propTypes = {
  className: PropTypes.string,
};

export default CalendarBtn;
