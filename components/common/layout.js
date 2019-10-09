import Link from 'next/link'
import Head from 'next/head'

export default ({
  children,
  title = 'A default title',
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
          <a>Messages</a>
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
