import React from 'react';

function ImageSlide(props) {
  const { image } = props;
  const style = {
    backgroundImage: `url(${image.location})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    height: '100%',
    width: '100%',
    display: 'inline-block'
  };
  const linkStyle= {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: '1'
  }

  return (
    <div className="image-slide" style={style}>
      <a href={image.url} target="_blank">
        <span className="no-content" style={linkStyle}></span>
      </a>
    </div>
  );
}

export default ImageSlide;
