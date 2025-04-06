import React from 'react'

export const CardInfo = ({ title, info }) => {

    const cardStyle = ''

  return (
    <div className={ cardStyle }>
        <h2>{ title }</h2>
        <p>{ info }</p>
    </div>
  )
}
