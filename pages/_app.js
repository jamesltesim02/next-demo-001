import App from 'next/app'
import React from 'react'


export default class extends App {

  render () {
    const { Component, pageProps } = this.props

    console.log('....自定义 app, 可以添加插件等全局初始化操作, 每个page初始化时都会执行')

    return <Component {...pageProps} />
  }
}
