import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';
import { ThemeContext } from '../../hookers/themeContext';


const NavBar = ({ showFilterBar, navBarClass, filterBarClass}) => {
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
                    <span onClick={manualThemeToggle}>
                        dark
                    </span>
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
}


const Header = () => {
    // const [bottomVisible, setBottomVisible] = useState(false);
    const [navBarActive, setNavBarActive] = useState(false);
    const [filterBarActive, setFilterBarActive] = useState(false);
    
    function showNavBar() {
        setNavBarActive(!navBarActive);
        if (filterBarActive) setFilterBarActive(false)
    };

    function showFilterBar() {
        setFilterBarActive(!filterBarActive);
        console.log('klyk')
    }

    let navBarClass =  navBarActive ? `${styles.navBar} ${styles.navBarActive}` : styles.navBar;
    let filterBarClass = filterBarActive ? `${styles.filterBar} ${styles.filterBarActive}` : styles.filterBar;

  return (
        <header className={styles.header}>
            <div className={styles.top}>
                <div className={styles.square}></div>
                <p className={styles.headerTitle}>
                    <Link to='/'>
                        Journal
                    </Link>
                </p>
                <button className={styles.plus} onClick={showNavBar}>
                    +
                </button>
            </div>
            
            <NavBar
                showFilterBar={showFilterBar}
                navBarClass={navBarClass}
                filterBarClass={filterBarClass}
             />
        </header>
  )
};

export default Header;
