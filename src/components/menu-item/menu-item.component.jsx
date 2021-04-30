import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

import PropTypes from 'prop-types'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`${size} menu-item` } onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
  size: PropTypes.string,
  linkUrl: PropTypes.string,
  history: PropTypes.any,
  match: PropTypes.any
}

export default withRouter(MenuItem)
