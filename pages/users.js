import { Component } from 'react'
import { injectIntl } from 'react-intl'

import Button from '@material-ui/core/Button'

import Layout from '../components/common/layout'
import UserInput from '../components/users/user-input'

import withUsers from '../api/users'

class Users extends Component {
  static async getInitialProps ({users}) {
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

  render () {
    const {
      props: {
        intl
      },
      state: {
        list,
        adding
      }
    } = this

    return (
      <Layout title={intl.formatMessage({ id: 'users.title' })}>
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
        />

        <table>
          <caption>
            users
          </caption>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>gender</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>删除</td>
                </tr>
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td clspan="4">
                tfoot.
              </td>
            </tr>
          </tfoot>
        </table>
        <style jsx>{`
          .add-fade-container {
            height: 100%;
            width: 100%;
          }
          .add-panel {
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 5px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default withUsers(injectIntl(Users))
// export default Users
