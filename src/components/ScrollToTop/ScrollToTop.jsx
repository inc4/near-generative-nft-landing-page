import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <></>;
};

export default ScrollToTop;
