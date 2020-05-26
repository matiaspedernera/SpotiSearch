import React from 'react';
import SearchHeader from '../search-header';
import Footer from '../footer';

const LayoutSearcher = ({ children }) => {
  return (
    <div className="layout-container">
      <SearchHeader />
      <div className="content-container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default LayoutSearcher