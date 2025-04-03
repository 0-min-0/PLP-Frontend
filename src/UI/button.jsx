import React from 'react'

export const Button = ({ btnType, btnStyle, btnId = 'btnAny', btnName}) => {
  return (
    <button type={ btnType } className={ btnStyle } id={ btnId }>{ btnName }</button>
  )
}
