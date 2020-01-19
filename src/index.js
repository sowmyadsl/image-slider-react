import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imagesList from './components/imagesData.json';
import ImageSlide from './components/ImageSlide.component';
import Navigation from './components/Navigation.component';

import styles from './styles.css'

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentImageIndex: 0,
      translateValue: 0,
    };
    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.imageWidth = this.imageWidth.bind(this);
  }

  showPrevImage() {
    const { currentImageIndex, translateValue } = this.state;
    const nextIndex = currentImageIndex === 0 ? currentImageIndex : currentImageIndex - 1;
    const newTranslateValue = currentImageIndex === 0 ? translateValue : translateValue + this.imageWidth();
    this.setState({
      currentImageIndex: nextIndex,
      translateValue: newTranslateValue
    });
  }

  showNextImage() {
    const { currentImageIndex, translateValue } = this.state;
    const nextIndex = currentImageIndex === imagesList.length - 1 ? 0 : currentImageIndex + 1;
    const newTranslateValue = currentImageIndex === imagesList.length - 1 ? 0 : translateValue - this.imageWidth();
    console.log(nextIndex);
    this.setState({
      currentImageIndex: nextIndex,
      translateValue: newTranslateValue
    });
  }

  imageWidth() {
    return document.querySelector('.image-slide').clientWidth;
  }


  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <div className={styles.slideContainer}>
        <Navigation
          direction="prev"
          onArrowClick={this.showPrevImage}
          symbol="&#9664;" />
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
            height: '100%'
          }}
        >
          {imagesList.map((image,index) => <ImageSlide key={index} image={image}/>)}
        </div>
        <Navigation
          direction="next"
          onArrowClick={this.showNextImage}
          symbol="&#9654;" />
      </div>
    )
  }
}
