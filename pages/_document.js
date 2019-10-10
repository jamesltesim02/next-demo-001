import Document, { Head, Main, NextScript } from 'next/document'
import { isServer } from '../utils/env-utils'


export default class extends Document {

  constructor() {
    super()
    const self = this;
    this.state = {
      configs: {}
    };
    if (isServer()) {
      const sconf = require('../public/config')
      this.state.configs = sconf
    } else {
      const cconf = import('../public/config')
      cconf.then((ccontent) => {
        console.log('client config:', ccontent)
        self.state.configs = ccontent
      })
    }
  }

  render () {
    console.log('...自定义 document, 初始化时只执行一次')

    return (
        <html>
          <Head>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `window.SystemConfig = ${JSON.stringify(this.state.configs)}`
              }}
            ></script>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
    )
  }
}
