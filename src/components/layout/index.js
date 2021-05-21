import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../hookers/themeContext';
import './layout.css';
// import * as type from './type.module.css';


// const lightThemeValues = {
//   '--clr-bg': 'white',
//   '--clr-main': 'black'
// };
// const darkThemeValues = {
//   '--clr-bg': '#0c0c0c',
//   '--clr-main': '#f0f0f0'
// };

// const changeRootStyleValuesRapidly = (object) => {
//   const arrOfArr = Object.entries(object); 
//   // that's an array of arrays of key:value pairs as strings
//   arrOfArr.forEach(item => {
//       const [property, value] = item;
//       const rootElementStyle = document.documentElement.style;
//       rootElementStyle.setProperty(property, value);
//   }); 
// };


const Layout = ({children}) => {
  // const [theme, setTheme] = useState('light');
  
  
  // const themeData = {
  //   themeValue: theme,
  //   themeToggle: manualThemeToggle,
  // };
  

  // function setLight() {
  //   setTheme('light');
  //   changeRootStyleValuesRapidly(lightThemeValues);
  // };
  
  // function setDark() {
  //   setTheme('dark');
  //   changeRootStyleValuesRapidly(darkThemeValues);
  // };
  
  // const manualThemeToggle = () => {
  //   if (theme === 'light') {
  //       setDark();
  //   };
  //   if (theme === 'dark') {
  //       setLight();
  //   };
  // };

  const ThemeData = useContext(ThemeContext)
  console.log(ThemeData)

  return (
    <div className='container'>
      {/* <ThemeContextProvider> */}
        {children}
      {/* </ThemeContextProvider> */}
    </div>
  )
};

export default Layout;