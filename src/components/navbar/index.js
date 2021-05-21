import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from '../../hookers/themeContext';
import * as styles from './navbar.module.css';

const Navbar = ({ showFilterBar, navBarClass, filterBarClass}) => {
    const themeData = useContext(ThemeContext)
    const {theme, setTheme} = themeData;
    const manualThemeToggle = () => {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('light');
    };
    
    return (
        <div className={navBarClass}>
                <nav className={styles.nav}>
                    <Link to='/about'>
                        about
                    </Link>
                    <button onClick={showFilterBar}>
                        filters
                    </button>
                    <button onClick={manualThemeToggle}>
                        dark
                    </button>
                </nav>
                <div className={filterBarClass}>
                    <span>
                        {/* these items need to be lists */}
                        order 
                    </span>
                    <span>
                        {/* a multi selector list, who dis? */}
                        tags
                    </span>
                </div>
            </div>
    )
};

export default Navbar;