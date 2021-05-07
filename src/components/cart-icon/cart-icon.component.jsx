import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'

import { toggleHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'


const CartIcon = ({ toggleHidden }) => (
  <div className='cart-icon' onClick={toggleHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

CartIcon.propTypes = {
  toggleHidden: PropTypes.any
}

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)