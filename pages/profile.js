import { Component } from 'react'
import Layout from '../components/common/layout'

// export default () => (
//   <Layout>
//     profile page.
//     <img src="/static/images/es350.jpg" />
//   </Layout>
// )

// import '../static/styles/profile.scss'

export default class extends Component {

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

    console.log('running initial props.')

    return { userAgent }
  }

  render() {
    return (
      <Layout>
        <div className="profile">
          profile page. {this.props.userAgent}
        </div>
        <img src="/images/es350.jpg" />
      </Layout>
    )
  }
}
