import React, { Comopnent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TeachersTable from './TeachersTable.js'


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

class Teachers extends React.Component {
  state = {
    teachers: [
      {
        id: 1,
        name: 'Иван Иванов',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        lesson: [
          { title: 'Математический анализ' }
        ]
      },
      {
        id: 2,
        name: 'Казим Нуримов',
        avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
        lesson: [
          { title: 'История Кубани' },
          { title: 'БЖД' }
        ]
      },
      {
        id: 3,
        name: 'Ирина Петрова',
        avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
        lesson: [
          { title: 'Экономика' }
        ]
      }
    ]
  }

  render() {
    const { classes } = this.props
    const { teachers } = this.state

    return (
      <Paper className={ classes.root } elevation={ 1 }>
        <h4 className={ classes.title }>Список преподавателей</h4>

        <TeachersTable teachers={ teachers } />
      </Paper>
    )
  }
}

Teachers.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Teachers)