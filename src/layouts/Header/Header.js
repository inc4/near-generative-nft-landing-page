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

  if (!wallet) {
    return <Loader />;
  }

  return (
    <header className="header">
      <ReactSVG className="header__logo" src={logo} />
      <Navigation className="header__navigation" signedIn={wallet.signedIn} />
      <SocialLinks className="header__social" />
      {account?.accountId ? (
        <ConnectWalletBtn
          text={account.accountId}
          handleClick={() => wallet.signOut()}
        />
      ) : (
        <ConnectWalletBtn handleClick={() => wallet.signIn()} />
      )}
    </header>
  );
};

export default Header;
