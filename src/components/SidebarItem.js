import { Link } from "react-router-dom"
import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Icon from '@material-ui/core/Icon'

const SidebarItem = ({ menuItem }) => (
  <li>
    <ListItem button component={ Link } to={ menuItem.path }>
      <ListItemIcon>
        <Icon color="secondary">
          { menuItem.icon || 'add_circle' }
        </Icon>
      </ListItemIcon>
      
      <ListItemText primary={ menuItem.text } />
    </ListItem>
  </li>
)

export default SidebarItem

