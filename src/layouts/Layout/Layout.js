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

    history.push(pathname);

    setTimeout(() => {
      const elem = document.querySelector(hash);

      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
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
