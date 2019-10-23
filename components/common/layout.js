import Head from 'next/head'

import Menus from './menus'
import Languages from './languages'

export default ({
  children,
  title = 'A default title'
}) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>

    <header>
      <Menus />
    </header>
    <hr />
    {children}
    <hr />
    <Languages />
    <footer>page footer.</footer>
  </div>
)
