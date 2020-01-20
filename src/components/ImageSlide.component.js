import React from "react";

function ImageSlide(props) {
  const { image, onHoverOut, onHoverOver } = props;
  const style = {
    backgroundImage: `url(${image.location})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%",
    height: "100%",
    width: "100%",
    display: "inline-block"
  };
  const linkStyle = {
    display: "inline-block",
    width: "100%",
    height: "100%",
    zIndex: "1"
  };

  return (
    <div
      className="image-slide"
      style={style}
      onMouseOver={onHoverOver}
      onMouseOut={onHoverOut}
    >
      <a href={image.url} target="_blank" aria-label={image.name}>
        <span className="no-content" style={linkStyle}></span>
      </a>
    </div>
  );
}

export default ImageSlide;
