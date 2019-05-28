import React from 'react'
import './OverlayImage.style.css'

const OverlayImage = props => {
  const isShow = props.show ? 'c-overlay--show' : ''
  return (
    <div
      className={`c-overlay__container ${isShow}`}
      onClick={props.handleClose}
    >
      <div className='c-overlay__image-container'>
        <img src={props.imageUrl} />
      </div>
    </div>
  )
}

export default OverlayImage
