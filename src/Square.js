import React from 'react'
// import SVG from 'react-inlinesvg'

const XIcon = () => <img alt='piece' src='/X.svg' />
const OIcon = () => <img alt='piece' src='/O.svg' />

export const Square = props => {
  return (
    <div className='square'>
      <button
        className={
          props.winning ? 'winning ' + props.value : 'standard ' + props.value
        }
        data-testid='square_button'
        onClick={props.onClick}
      >
        {props.value === 'X' ? <XIcon /> : props.value === 'O' ? <OIcon /> : ''}
      </button>
    </div>
  )
}
