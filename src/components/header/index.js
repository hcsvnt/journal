import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import Navbar from '../navbar';
import * as styles from './header.module.css';

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
    };

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
            
            <Navbar
                showFilterBar={showFilterBar}
                navBarClass={navBarClass}
                filterBarClass={filterBarClass}
             />
        </header>
  )
};

export default Header;
