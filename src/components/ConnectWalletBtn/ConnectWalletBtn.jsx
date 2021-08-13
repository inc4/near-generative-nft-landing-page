import React from 'react';
import PropTypes from 'prop-types';

const ConnectWalletBtn = ({ handleClick }) => (
  <button className="connect-wallet" type="button" onClick={handleClick}>
    Connect Wallet
  </button>
);

ConnectWalletBtn.propTypes = {
  handleClick: PropTypes.func,
};

export default ConnectWalletBtn;
