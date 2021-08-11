import React from 'react';
import PropTypes from 'prop-types';

const CalendarBtn = ({ className }) => (
  <button
    type="button"
    title="Add to Calendar"
    className={`calendar-btn addeventatc ${className}`}
  >
    + Add to your Calendar
    <span className="start calendar-btn__span">08/16/2021 08:00 AM</span>
    <span className="end calendar-btn__span">08/16/2021 10:00 AM</span>
    <span className="timezone calendar-btn__span">America/Los_Angeles</span>
    <span className="title calendar-btn__span">Nearkats: Next Generation</span>
    <span className="description calendar-btn__span">
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
