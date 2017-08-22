import React from 'react'

import './menu.css'

const Menu = ({children}) => {
  return (
    <ul className='nav nav-tabs nav-justified menu'>
      { children }
    </ul>
  )
}

export default Menu