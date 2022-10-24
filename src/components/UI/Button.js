import React from 'react'
import './button.css';

function Button(props) {
  return (
    <div className='button' type={props.button}>{props.children}</div>
  )
}

export default Button