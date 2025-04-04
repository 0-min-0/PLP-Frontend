import React from 'react'

export const Button = ({ btnType, btnStyle, btnId = 'btnAny', btnName}) => {

  const btnBaseStyle = `
    font-bold px-4 py-2 rounded-full cursor-pointer
    transition-all duration-300 ease-in-out
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#405e7f]
  `

  return (
    <button type={ btnType } className={ `${btnStyle} ${btnBaseStyle}` } id={ btnId }>{ btnName }</button>
  )
}
