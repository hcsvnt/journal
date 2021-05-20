import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';


const NavBar = ({className}) => {
    return (
        <div className={className}>
                <nav className={styles.nav}>
                    <Link to='/about'>
                        about
                    </Link>
                    <span>
                        filters
                    </span>
                    <span>
                        dark
                    </span>
                </nav>
                <div className={styles.filterBar}>
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
    
    function showNavBar() {
        setNavBarActive(!navBarActive);
    };

    let navClass =  navBarActive ? `${styles.navBar} ${styles.navBarActive}` : styles.navBar;

  return (
        <header className={styles.header}>
            <div className={styles.top}>
                <div className={styles.square}></div>
                <p className={styles.headerTitle}>
                    Journal
                </p>
                <button className={styles.plus} onClick={showNavBar}>
                    +
                </button>
            </div>
            
            <NavBar
                className={navClass}
             />
        </header>
  )
};

export default Header;