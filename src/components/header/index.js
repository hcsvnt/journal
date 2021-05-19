import React, { useState } from 'react';
import * as styles from './header.module.css';


const Bottom = () => {
    return (
        <div className={styles.bottom}>
                <nav className={styles.nav}>
                    <span>
                        about
                    </span>
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
    const [bottomVisible, setBottomVisible] = useState(false);
    
    function showBottom() {
        setBottomVisible(!bottomVisible);
        console.log("przeciezklikam")
    };

    // let visible = 

  return (
        <header className={styles.header}>
            <div className={styles.top}>
                <div className={styles.square}></div>
                <p className={styles.headerTitle}>
                    Journal
                </p>
                <p className={styles.plus} onClick={showBottom}>
                    +
                </p>
            </div>
            {/* how to make this better for accessibility? */}
            { bottomVisible ? <Bottom /> : null } 
            {/* <Bottom className={ bottomVisible ? styles.bottomVisible : styles.bottomInvisible } /> */}
            
        </header>
  )
};

export default Header;