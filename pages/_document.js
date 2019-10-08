import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render () {

    console.log('...自定义 document, 初始化时只执行一次')

    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
