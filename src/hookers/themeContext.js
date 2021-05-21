import React, { useState } from 'react';

const ThemeContext = React.createContext('dupajas');

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const value = {theme, setTheme}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext};

  
  
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


