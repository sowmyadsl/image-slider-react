import React from 'react'
import styles from './../styles.css'

function ImageSlide(props) {
  const { image } = props;
  const imagePath = require(`/Users/sowmyaudai/projects/carousel-component/src/assets/images/${image.fileName}`);

  return(
    <div className={styles.imageSlideContainer}>
    <a href={image.url} target="_blank">
      <img src={imagePath} className={styles.image} />
    </a>
    </div>
  );
}

export default ImageSlide;
