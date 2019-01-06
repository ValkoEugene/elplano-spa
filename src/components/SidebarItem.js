import { Link } from 'react-router-dom'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Icon from '@material-ui/core/Icon'

const SidebarItem = ({ menuItem, classes }) => (
  <li>
    <ListItem button component={ Link } to={ menuItem.path }>
      <ListItemIcon>
        <Icon color="primary" classes={ { colorPrimary: classes.colorPrimary } }>
          { menuItem.icon || 'add_circle' }
        </Icon>
      </ListItemIcon>

      <ListItemText
        primary={ menuItem.text }
        classes={ { primary: classes.colorPrimary } }
      />
    </ListItem>
  </li>
)

const styles = theme => ({
  colorPrimary: {
    color: 'white',
  },
})

export default withStyles(styles)(SidebarItem)
