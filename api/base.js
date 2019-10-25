import { Component } from 'react'
import Axios , { CancelTokenSource, CancelToken } from 'axios'

import { isServer } from '../utils/env-utils'
import { initializeStore } from '../stores'

class BaseApi{
  axios = null
  store = null
  constructor (config) {
    this.axios = Axios.create(config)
    this.init()
  }

  init () {
    this.axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'
    this.axios.interceptors.request.use(
      this.handleRequest.bind(this),
      this.handleRequestError.bind(this)
    )
    this.axios.interceptors.response.use(
      this.handleResponse.bind(this),
      this.handleResponseError.bind(this)
    )
  }

  setStore (store) {
    this.store = store
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
    const {
      status,
      data
    } = err.response

    this.store.toast.error(`[${status}]${data}`)
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

export { BaseApi }

export default (SubComponent, api) => {

  const createApiProps = (store) => {
    const apiProps = {}

    if (!store) {
      return apiProps
    }

    const entries = Object.entries(api)
    if (entries && entries.length) {
      entries.forEach(([k, v]) => {
        apiProps[k] = new v()
        apiProps[k].setStore(store)
      })
    }

    return apiProps
  }

  class ApiWrappedComponent extends Component {
    static async getInitialProps (ctx) {
      let pageProps = {}

      const store = initializeStore(isServer())
      const apiProps = createApiProps(store)

      if(SubComponent.getInitialProps) {
        pageProps = await SubComponent.getInitialProps({
          ...ctx,
          ...apiProps,
        })
      }

      return {
        ...pageProps,
      }
    }
    render () {
      const store = initializeStore(isServer())
      const apiProps = createApiProps(store)
      
      return (
        <SubComponent
          {...this.props}
          {...apiProps}
        />
      )
    }
  }

  return ApiWrappedComponent
}

