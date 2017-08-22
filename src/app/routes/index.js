import React from 'react'
import { Route } from 'react-router-dom'
import { Create, Preview, Export } from '../../components'

const routes = () => { 
  return (
    <div>
      <Route path="/create" component={ Create } />
      <Route path="/preview" component={ Preview } />
      <Route path="/export" component={ Export } />
    </div>
  )
}

export default routes()