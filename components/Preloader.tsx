import React from 'react'
import './Preloader.style.css'

const Preloader = (props: {
  wrapperStyle: React.CSSProperties | undefined
  loadingStyle: React.CSSProperties | undefined
}) => {
  return (
    <div style={props.wrapperStyle}>
      <div style={props.loadingStyle} className='u-loading-gradient'>
        <div className='u-invisible'>&nbsp;</div>
      </div>
    </div>
  )
}

export default Preloader
