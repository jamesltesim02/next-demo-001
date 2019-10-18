import Head from 'next/head'

import Menus from './menus'
import LanguageChanger from './language-changer'

export default({
      children,
      title = 'A default title'
    }) => (
      <div>
        <Head>
          <meta charSet="utf8" />
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <header>
          <Menus />
        </header>
        <hr />
        {children}
        <hr />
        <LanguageChanger />
        <footer>page footer.</footer>
      </div>
    )
