import React from 'react';
import BottomNavigation from '../components/bottom-navigation';

const Layout = ({ children }) => (
  <>
    {children}
    <BottomNavigation />
  </>
);

export default Layout;
