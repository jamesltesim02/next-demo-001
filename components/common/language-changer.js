import Link from 'next/link'
import { withRouter } from 'next/router'

export default withRouter(({ router: { pathname } }) => (
  <div>
    <Link href={`/zh-CN${pathname}`}>
      <a type="primary">中文</a>
    </Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link href={`/en-US${pathname}`}>
      <a type="primary">English</a>
    </Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link href={`/zh-TW${pathname}`}>
      <a type="primary">繁体</a>
    </Link>
  </div>
))
