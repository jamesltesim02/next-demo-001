import React from 'react'
// import Config from '../../public/config'

import { isServer } from '../../utils/env-utils'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resourceURL: ''
    } 

    if (isServer) {
      // this.state.resourceURL = Config.CDN_URL
    } else {

      this.state.resourceURL = window.ClientConfig.CDN_URL
    }
  }

  render() {
    console.log('props:', this.props.__NEXT_DATA__)
    return (
      <img src={`${this.state.resourceURL}${this.props.src}`} />
      // <img src={`${assetPrefix}${this.props.src}`} />
    )
  }
}

// export default ({ src }) => {
//   return (
//     <img src={`${this.state.resourceURL}${src}`} />
//   )
// }

