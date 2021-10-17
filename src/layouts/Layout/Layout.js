import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const { pathname, hash } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!hash) return;

    if (hash !== '#generate') history.push(pathname);

    if (hash !== '#share-nft') {
      setTimeout(() => {
        const elem = document.querySelector(hash);

        elem.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    } else {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }
  }, [hash]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
