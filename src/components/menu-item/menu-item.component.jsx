import React from 'react'

import './menu-item.styles.scss'

import PropTypes from 'prop-types'

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item` }>
    <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`

    }}/>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string
}

export default MenuItem
