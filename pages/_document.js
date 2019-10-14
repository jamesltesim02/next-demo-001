import Document, { Head, Main, NextScript } from 'next/document'
import { isServer } from '../utils/env-utils'


export default class extends Document {

  constructor() {
    super()
    this.state = {
    };
  }

  render () {
    console.log('...自定义 document, 初始化时只执行一次')

    return (
        <html>
          <Head/>
          <body>
            <Main />
            <NextScript />
            <div style={{
              display: 'hidden'
            }}>
              {process.env.NODE_ENV}
            </div>
          </body>
        </html>
    )
  }
}
