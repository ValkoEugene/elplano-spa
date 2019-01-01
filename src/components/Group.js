import React, { Comopnent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import GroupTable from './GroupTable'

const styles = theme => ({
  root: {
    padding: 15
  },
  avatar: {
    margin: 10,
  },
  title: {
    color: theme.palette.primary.light 
  }
})

class Group extends React.Component {
  state = {
    group: [
      {
        id: 1,
        name: 'Петров Петрович',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        tel: '8-961-582-56-52',
        email: 'wefwef@fewfwe.ru',
        isAdmin: false
      },
      {
        id: 2,
        name: 'Роман Романович',
        avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
        tel: '8-961-234-23-23',
        email: 'fewhetht@heheth.ru',
        isAdmin: true
      },
      {
        id: 3,
        name: 'Наталья Петрова',
        avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
        tel: '8-961-141-11-51',
        email: 'ergerger@erge.ru',
        isAdmin: false
      }
    ]
  }

  render() {
    const { classes } = this.props
    const { group } = this.state



    return (
      <Paper className={ classes.root } elevation={ 1 }>
        <h4 className={ classes.title }>Список одногрупников</h4>

        <GroupTable group={ group } />
      </Paper>
    )
  }
}

Group.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Group)