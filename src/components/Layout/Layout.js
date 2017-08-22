import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from '../../app/routes'
import Menu from '../Menu/Menu'
import Tab from '../Tab/Tab'

import './layout.css'

const Layout = () => {
  return (
    <Router>
      <section className='container layout'>
        <div className='row panel panel-default'>
          <div className='panel-body'>
            <Menu>
              <Tab title='Create' url='create' />
              <Tab title='Preview' url='preview' />
              <Tab title='Export' url='export' />
            </Menu>
            { routes }
          </div>
        </div>
      </section>
    </Router> 
  )
}

export default Layout