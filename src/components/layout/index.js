import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../hookers/themeContext';
import './layout.css';
// import * as type from './type.module.css';


const lightThemeValues = {
  '--clr-bg': 'white',
  '--clr-main': 'black'
};
const darkThemeValues = {
  '--clr-bg': '#0c0c0c',
  '--clr-main': '#f0f0f0'
};

const changeRootStyleValuesRapidly = (object) => {
  const arrOfArr = Object.entries(object); 
  // that's an array of arrays of key:value pairs as strings
  arrOfArr.forEach(item => {
      const [property, value] = item;
      const rootElementStyle = document.documentElement.style;
      rootElementStyle.setProperty(property, value);
  }); 
};

const Layout = ({children}) => {
  const themeData = useContext(ThemeContext);
  const {theme, setTheme} = themeData;

  useEffect(() => {
    applyTheme();
  },[theme])

  function applyTheme() {
    if (theme === 'light') {
      changeRootStyleValuesRapidly(lightThemeValues);
    } 
    if (theme === 'dark') {
      changeRootStyleValuesRapidly(darkThemeValues);
    } 
  };

  return (
    <div className='container'>
        {children}
    </div>
  )
};

export default Layout;