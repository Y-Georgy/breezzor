import { memo } from 'react'
import './Button.scss'

const Button = ({ children, main = false } ) => {
  return (
    <button 
      className={`button${main ? ' button_main' : ''}` }
      type='submit'
    >
      {children}
    </button>
  )
}

export default memo(Button)
