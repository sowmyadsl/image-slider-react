import React from 'react'
import styles from './../styles.css'

function PreviousImage(props) {
  const { onArrowClick } = props;
  const prevButton = require('/Users/sowmyaudai/projects/carousel-component/src/assets/images/back-button.png');

  return (
    <div className={styles.arrowContainer} onClick={onArrowClick}>
      <img src={prevButton} className={styles.prevButton} />
    </div>
  );
}

export default PreviousImage;
