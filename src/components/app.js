import React from 'react';
import Header from './header';

export default ({ children }) => {
  return (
    <div style={{ padding: '10px' }}>
      <Header />
      {children}
    </div>
  );
};
