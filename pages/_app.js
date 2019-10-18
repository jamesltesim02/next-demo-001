import App from 'next/app'
import React from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import Toast from 'react-toast-mobile'

import devConfig from '../configs/config.dev'

import { initializeStore } from '../stores'
import { isServer } from '../utils/env-utils'

import '../public/styles/common.css'
import 'react-toast-mobile/lib/react-toast-mobile.css'

export default class extends App {

  constructor (props) {
    super(props)
    this.store = initializeStore(props.isServer, props.initialState)
  }

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

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx
    const {
      locale = devConfig.defaultLocale,
      messages = {}
    } = req || window.__NEXT_DATA__.props

    return {
      initialState: getSnapshot(store),
      isServer,
      pageProps,
      locale,
      messages
    }
  }

  render () {
    const { Component, pageProps, router, locale, messages } = this.props
    this.store.app.setLocale(locale)

    return (
      <IntlProvider
        locale={locale}
        messages={messages}
      >
        <Provider store={this.store}>
          <div className="app-container">
            <Toast />
            <Component
              className="page-component"
              {...pageProps}
              router={router}
            />
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
      </IntlProvider>
    )
  }
}

