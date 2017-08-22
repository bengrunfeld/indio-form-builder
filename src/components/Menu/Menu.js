import React from 'react'

const Menu = ({children}) => {
  return (
    <ul className='nav nav-tabs nav-justified'>
      { children }
    </ul>
  )
}

export default Menu