import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { AppProvider } from './state/app';

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root'),
);
