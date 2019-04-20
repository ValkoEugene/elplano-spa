import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'

MoreMenu.propTypes = {
  options: PropTypes.array.isRequired,
}

function MoreMenu({ options }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = event => setAnchorEl(event.currentTarget)

  const handleClose = () => {
    console.log('handleClose')
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <IconButton
        aria-label="More"
        aria-owns={ open ? 'long-menu' : undefined }
        aria-haspopup="true"
        onClick={ handleOpen }
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
      >
        { options.map(({ title, onClick }) => (
          <MenuItem
            key={ title }
            onClick={ () => {
              onClick()
              handleClose()
            } }
          >
            { title }
          </MenuItem>
        )) }
      </Menu>
    </>
  )
}

export default MoreMenu
