import React from 'react'
import './button.css';

function Button(props) {
  return (
    <button className='button' type={props.type}>{props.children}</button>
  )
}

export default Button