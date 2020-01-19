import React from 'react'
import styles from './../styles.css'

function NextImage(props) {
  const { onArrowClick } = props;
  const nextButton = require('/Users/sowmyaudai/projects/carousel-component/src/assets/images/next-button.png');

  return (
    <div className={styles.arrowContainer} onClick={onArrowClick}>
      <img src={nextButton} className={styles.nextButton} />
    </div>
  );
}

export default NextImage;
