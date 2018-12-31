import { Link } from "react-router-dom"
import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InboxIcon from '@material-ui/icons/MoveToInbox'

const SidebarItem = ({ menuItem }) => (
  <li>
    <ListItem button component={ Link } to={ menuItem.path }>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      
      <ListItemText primary={ menuItem.text } />
    </ListItem>
  </li>
)

export default SidebarItem

