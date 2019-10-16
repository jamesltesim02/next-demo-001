import App from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react'
import Toast from 'react-toast-mobile'

import { getSnapshot } from 'mobx-state-tree'
import { initializeStore } from '../stores'
import { isServer } from '../utils/env-utils'

import '../public/styles/common.css'

import 'react-toast-mobile/lib/react-toast-mobile.css'

export default class extends App {

  static async getInitialProps ({ Component, ctx }) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const store = initializeStore(isServer())
    //
    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    //
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      initialState: getSnapshot(store),
      isServer,
      pageProps
    }
  }

  constructor (props) {
    super(props)
    this.store = initializeStore(props.isServer, props.initialState)
  }

  render () {
    const { Component, pageProps } = this.props

    console.log('....自定义 app, 可以添加插件等全局初始化操作, 每个page初始化时都会执行')

    return (
      <Provider store={this.store}>
        <div className="app-container">
          <Toast />
          <Component className="page-component" {...pageProps} />
        </div>
        <style global jsx>{`
          .app-container {
            width: 100%;
            height: 100%;
          }
          .app-container > div.page-component {
            min-height: 100%;
          }
        `}</style>
      </Provider>
    )
  }
}

