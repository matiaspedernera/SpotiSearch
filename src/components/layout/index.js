import React from 'react';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content-container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout