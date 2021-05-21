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
};

export { ThemeContextProvider, ThemeContext};
