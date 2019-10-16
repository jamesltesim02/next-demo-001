import Link from 'next/link'
import Head from 'next/head'
import { inject, observer } from 'mobx-react'

export default inject('store')(
  observer(
    ({
      children,
      title = 'A default title',
      store: {
        messages
      }
    }) => (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <header>
          <nav>
            <Link href="/" scroll={false}>
              <a title="home page">Home</a>
            </Link>
            |
            <Link href="/about">
              <a>About</a>
            </Link>
            |
            <Link href="/profile">
              <a>Profile</a>
            </Link>
            |
            <Link href="/todolist">
              <a>Todolist</a>
            </Link>
            |
            <Link href="/messages">
              <a>Messages ({messages.unReadCount})</a>
            </Link>
            |
            <Link href="/toast">
              <a>Toast</a>
            </Link>
            |
            <Link href="/aaaa">
              <a>Aaaa</a>
            </Link>
          </nav>
        </header>
        {children}
        <footer>page footer.</footer>
        <style jsx>{`
          nav a {
            margin: 10px;
          }
        `}</style>
      </div>
    )
  )
)
