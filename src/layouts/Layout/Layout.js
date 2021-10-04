/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    setTimeout(() => {
      const elem = document.querySelector(hash);

      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }, 10);
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
