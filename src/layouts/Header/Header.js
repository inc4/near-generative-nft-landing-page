import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { appStore } from '../../state/app';
import logo from '../../assets/images/nearkat-logo.svg';
import Navigation from '../../components/Navigation';
import SocialLinks from '../../components/SocialLinks';
import ConnectWalletBtn from '../../components/ConnectWalletBtn';
import Loader from '../../components/Loader/Loader';

const Header = () => {
  const { state } = useContext(appStore);
  const { wallet, account } = state;

  const getWalletName = () => (
    <div className="header__wallet">
      <span className="header__wallet-name">{account.accountId}</span>
      <button
        type="button"
        className="header__wallet-logout"
        onClick={() => wallet.signOut()}
      >
        Log Out
      </button>
    </div>
  );

  if (!wallet) {
    return <Loader />;
  }

  return (
    <header className="header">
      <ReactSVG className="header__logo" src={logo} />
      <Navigation className="header__navigation" signedIn={wallet.signedIn} />
      <SocialLinks className="header__social" />
      {account?.accountId ? (
        getWalletName()
      ) : (
        <ConnectWalletBtn handleClick={() => wallet.signIn()} />
      )}
    </header>
  );
};

export default Header;
