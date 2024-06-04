import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-10 bg-blue-gradient font-poppins font-medium text-[18px] rounded-full text-primary outline-none ${styles}`}>
      Inizia ora
    </button>
  )
}

export default Button