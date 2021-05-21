import React from 'react';
import * as styles from './preview.module.css';

const Preview = () => {
  return (
    <article className={styles.preview}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Sample Post.  
          </h2>
          <p className={styles.description}>
            Description of the sample post lorem ipsum dolor sit amet
          </p>
        </div>
        <div className={styles.topPic}>

        </div>
        <div className={styles.bottomPic}>
          
          </div>
    </article>
  )
};

export default Preview;