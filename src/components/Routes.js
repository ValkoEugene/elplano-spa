import React from 'react'
import { Route } from "react-router-dom"
import menuItems from '../menuItems.js'

const Routes = () => (
  menuItems.map(item => {
    const props = { path: item.path, component: item.component }

    if (item.exact) props.exact = item.exact

    return <Route { ...props } key={ item.path }/>
  })
)

export default Routes