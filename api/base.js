import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Axios , { CancelTokenSource, CancelToken } from 'axios'

import { isServer } from '../utils/env-utils'

@inject('store')
@observer
class BaseApi extends Component {
  axios = null
  constructor (config) {
    this.axios = Axios.create(config)
    this.init()
  }

  init () {
    this.axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'
    this.axios.interceptors.request.use(this.handleRequest, this.handleRequestError)
    this.axios.interceptors.response.use(this.handleResponse, this.handleResponseError)
  }

  handleRequest (conf) {
    console.log('handle request')
    return conf
  }

  handleRequestError (err) {
    console.log('handle request error')
    return Promise.reject(err)
  }

  handleResponse ({data}) {
    console.log('handle response')
    return data
  }

  handleResponseError (err) {
    console.log('handle response error:', err.response)
    return Promise.reject(err)
  }

  render () {
    return null
  }
}

['get', 'post', 'put', 'delete'].forEach(method => {
  BaseApi.prototype[method] = function (...args) {
    console.log(`handle method ${method} ${JSON.stringify(args)}`)
    return this.axios[method](...args)
  }
})

export {
  BaseApi
}

export default (SubComponent, api) => {
  const apiProps = {}
  const entries = Object.entries(api)

  if (entries && entries.length) {
    entries.forEach(([k, v]) => {
      apiProps[k] = new v()
    })
  }

  return class extends Component {
    static async getInitialProps (ctx) {
      let pageProps = {}
      if(SubComponent.getInitialProps) {
        pageProps = SubComponent.getInitialProps({
          ...ctx,
          ...apiProps
        }) 
      }
      return pageProps
    }
    render () {
      return (
        <SubComponent
          {...this.props}
          {...apiProps}
        />
      )
    }
  }
}

// export default (SubComponent) => {
//   return class extends Component {

//     constructor(props) {
//       super(props)
//       this.state = {
//         users: new UserApi()
//       }
//     }

//     render () {
//       return (
//         <SubComponent
//           {...this.props}
//         />
//       )
//     }
//   }
// }
