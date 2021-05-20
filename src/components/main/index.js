import React from 'react';
import Preview from '../preview';
import * as styles from './main.module.css'


const Main = () => {
  return (
    <main className={styles.main}>
        <p>I display your posts, fucker</p>
        <Preview />
    </main>
  )
};

export default Main;