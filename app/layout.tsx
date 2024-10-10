"use client";

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
};
export default Layout;