import { Component } from 'react'
import { injectIntl } from 'react-intl'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import Layout from '../components/common/layout'
import UserInput from '../components/users/user-input'
import UserItem from '../components/users/user-item'

import withUsers from '../api/users'

class Users extends Component {
  static async getInitialProps ({ users }) {
    const list = await users.list()

    return {
      list
    }
  }

  constructor(props) {
    super()
    this.state = {
      list: props.list,
      adding: false
    }
  }

  queryList () {
    console.log('queryList: this props: ', this.props)
  }

  async reloadList () {
    console.log('will reload user list.')
    this.setState({
      list: await this.props.users.list()
    })
  }

  render () {
    const {
      props: {
        classes,
        intl: {
          formatMessage
        }
      },
      state: {
        list,
        adding
      },
    } = this

    return (
      <Layout title={formatMessage({ id: 'users.title' })}>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.setState({ adding: true })}
          >添加用户信息</Button>
        </div>
        <UserInput
          adding={adding}
          onClose={() => this.setState({ adding: false })}
          onFinish={() => {
            this.setState({ adding: false})
            this.reloadList()
          }}
        />

        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>age</TableCell>
                <TableCell>gender</TableCell>
                <TableCell>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map(item => (
                <UserItem
                  item={item}
                  key={item.id}
                  onFinish={this.reloadList.bind(this)}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Layout>
    )
  }
}

const styles = () => ({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 400
  }
})

export default withUsers(injectIntl(withStyles(styles)(Users)))
