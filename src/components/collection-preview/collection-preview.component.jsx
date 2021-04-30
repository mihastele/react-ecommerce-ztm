import React from 'react'
import PropTypes from 'prop-types'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preciew'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>{items.slice(0, 4).map((item) => (
      <div key={item.id}>{item.name}</div>
    ))}</div>
  </div>
)

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

export default CollectionPreview
