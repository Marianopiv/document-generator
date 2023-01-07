import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({action,text}) => {
  return (
    <div onClick={action} className='bg-green-600 uppercase font-bold py-2 rounded-md px-3 hover:cursor-pointer'>{text}</div>
  )
}

export default Button