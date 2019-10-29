import { FormattedMessage } from 'react-intl'
import { inject, observer } from 'mobx-react'
import { Link } from '../../utils/router-utils'

const pages = [
  {
    href: '/',
    id: 'home',
    prefetch: true
  },
  {
    href: '/about',
    id: 'about',
    prefetch: true
  },
  {
    href: '/profile',
    id: 'profile',
    prefetch: true
  },
  {
    href: '/todolist',
    id: 'todolist',
  },
  {
    href: '/messages',
    id: 'messages',
  },
  // {
  //   href: '/toast',
  //   id: 'toast',
  // },
  {
    href: '/tsdemo',
    id: 'tsdemo',
  },
  {
    href: '/hooks',
    id: 'hooks'
  },
  {
    href: '/material',
    id: 'material'
  },
  {
    href: '/reactspring',
    id: 'reactspring'
  },
  {
    href: '/users',
    id: 'users'
  },
  {
    href: '/notfound',
    id: 'notfound',
  }
]

export default inject('store')(
  observer(
    ({ store: { messages } }) => (
      <nav>
        {
          pages.map((m) => (
            <Link
              href={m.href}
              scroll={false}
              key={m.id}
              prefetch={!!m.prefetch}
            >
              <a title="home page">
                <FormattedMessage id={`common.menus.${m.id}`} />
                {
                  m.id === 'messages'
                  ? `(${messages.unReadCount})` : null
                }
              </a>
            </Link>
          ))
        }
        <style jsx>{`
          nav a {
            margin: 10px;
          }
        `}</style>
      </nav>
    )
  )
)
