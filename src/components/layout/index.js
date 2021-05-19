import React from 'react';
import './layout.css';
// import * as type from './type.module.css';


const Layout = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
};

export default Layout;