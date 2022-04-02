import React from 'react'
import '../assets/scss/clear.scss'

const Clear = (props) => {
  return (
    <div id={props.id} className='clear' onClick={props.clickHandler}>{props.children}</div>
  )
}

export default Clear