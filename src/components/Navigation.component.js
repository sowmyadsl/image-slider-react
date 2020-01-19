import React from 'react'

function Navigation(props) {
  const { onArrowClick, direction, symbol } = props;
  const rightPos = direction === 'next' ? '25px' : null;
  const leftPos = direction === 'prev' ? '25px' : null;
  const style = {
    position: 'absolute',
    top: '50%',
    right: rightPos,
    left: leftPos,
    zIndex: '999',
    color: '#fff',
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'black',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform ease-in .1s',
  }
  return (
    <div className={`${direction}-arrow`} style={style} onClick={onArrowClick}>
      { symbol }
    </div>
  );
}

export default Navigation;
