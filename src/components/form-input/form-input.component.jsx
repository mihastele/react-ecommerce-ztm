import React from 'react'

import './form-input.styles.scss'

import PropTypes from 'prop-types'

const FormInput = ({ handleChange, label, ...otherprops }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherprops}/>
    {
      label
        ? (<label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
        : null
    }
  </div>
)

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string
}

export default FormInput
