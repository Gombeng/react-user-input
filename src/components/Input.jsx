import React from 'react'

const Input = ({ label, placeholder, ...rest }) => {
  return (
    <>
      <p>{label}</p>
      <input className='input' type="text" placeholder={placeholder} {...rest} />
    </>
  )
}

export default Input