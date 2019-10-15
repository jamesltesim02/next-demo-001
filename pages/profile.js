import { Component } from 'react'
import Layout from '../components/common/layout'
// import Image from '../components/common/image'

// export default () => (
//   <Layout>
//     profile page.
//     <img src="/static/images/es350.jpg" />
//   </Layout>
// )

// import '../static/styles/profile.scss'

import ES350 from '../public/images/es350.jpg?url'

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
        {/* <img src="/images/es350.jpg" /> */}
        <img src={ES350} />
        {/* <Image src="/images/es350.jpg" /> */}
      </Layout>
    )
  }
}
