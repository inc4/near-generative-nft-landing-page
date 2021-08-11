import React from 'react';
import PropTypes from 'prop-types';

const CalendarBtn = ({ className }) => (
  <button
    type="button"
    title="Add to Calendar"
    className={`addeventatc ${className}`}
  >
    + Add to your Calendar
    <span className="start">08/16/2021 08:00 AM</span>
    <span className="end">08/16/2021 10:00 AM</span>
    <span className="timezone">America/Los_Angeles</span>
    <span className="title">Nearkats: Next Generation</span>
    <span className="description">
      Now you can own some of the cutest critters in the Metaverse.
      <br />
      <br />
      https://main.d19lx4kz8myqvl.amplifyapp.com/
    </span>
  </button>
);

CalendarBtn.defaultProps = {
  className: '',
};

CalendarBtn.propTypes = {
  className: PropTypes.string,
};

export default CalendarBtn;
