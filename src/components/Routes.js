import React from 'react'
import { Route } from "react-router-dom"
import menuItems from '../menuItems.js'

const Routes = () => (
  menuItems.map(item => 
    item.exact ?
    <Route path={item.path} exact component={item.component} />
    : <Route path={item.path} component={item.component} />
  )
)

export default Routes