import React, { Component } from 'react'
import PropTypes from 'prop-types'
import imagesList from './components/imagesData.json'
import ImageSlide from './components/ImageSlide.component'
import NextImage from './components/NextImage.component'
import PreviousImage from './components/PreviousImage.component'

import styles from './styles.css'

export default class Carousel extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        {imagesList.map((image,index) => <ImageSlide key={index} image={image}/>)}
        <NextImage/>
        <PreviousImage/>
      </div>
    )
  }
}
