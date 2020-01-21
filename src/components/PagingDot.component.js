import React from "react";
import PropTypes from "prop-types";

function PagingDot(props) {
  const { index, onDotClick, active } = props;

  const style = {
    height: "16px",
    width: "16px",
    padding: "1%",
    fontSize: "2em",
    cursor: "pointer",
    color: "black",
    textShadow: "1px 1px #B6B4B4"
  };

  return (
    <div
      className="paging-dot"
      style={style}
      onClick={() => {
        onDotClick(index);
      }}
    >
      {active ? <span>{index + 1}</span> : <span>&#9675;</span>}
    </div>
  );
}

PagingDot.propTypes = {
  index: PropTypes.number.isRequired,
  onDotClick: PropTypes.func.isRequired,
  active: PropTypes.bool
};

PagingDot.defaultProps = {
  active: false
};

export default PagingDot;
