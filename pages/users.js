import { Component } from 'react'
import { injectIntl } from 'react-intl'
import Layout from '../components/common/layout'
import withUsers from '../api/users'

class Users extends Component {
  static async getInitialProps ({users}) {
    const list = await users.list()

    return {
      list
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      list: props.list
    }
  }

  queryList () {
    console.log('queryList: this props: ', this.props)
  }

  render () {
    const { intl } = this.props
    return (
      <Layout title={intl.formatMessage({ id: 'users.title' })}>
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
              this.state.list.map(item => (
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
      </Layout>
    )
  }
}

export default withUsers(injectIntl(Users))
// export default Users
