import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <div className="page">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
