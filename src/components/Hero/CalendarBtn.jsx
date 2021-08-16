import React from 'react';
import PropTypes from 'prop-types';

const CalendarBtn = ({ className }) => (
  <button
    type="button"
    title="Add to Calendar"
    className={`calendar-btn addeventatc ${className}`}
  >
    + Add to your Calendar
    <span className="start calendar-btn__span">09/01/2021 09:00 AM</span>
    <span className="end calendar-btn__span">09/01/2021 10:00 AM</span>
    <span className="timezone calendar-btn__span">America/Los_Angeles</span>
    <span className="title calendar-btn__span">Main Launch | NEARcat NFTs</span>
    <span className="description calendar-btn__span">
      Join the NEARcats Discord for exclusive access to our presale starting 1
      hour before we go live https://discord.com/invite/UY9Xf2k
      <br />
      <br />
      Are you an NFT influencer, apply to get 3 NEARcats FREE when you give two
      away on your Twitter nearcatsnft.com/influencer
      <br />
      <br />
      Join the main sale nearcatsnft.com
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
