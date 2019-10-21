import { FormattedMessage } from 'react-intl'
import { inject, observer } from 'mobx-react'
import { Link } from '../../utils/router-utils'

const pages = [
  {
    href: '/',
    id: 'home',
  },
  {
    href: '/about',
    id: 'about',
  },
  {
    href: '/profile',
    id: 'profile',
  },
  {
    href: '/todolist',
    id: 'todolist',
  },
  {
    href: '/messages',
    id: 'messages',
  },
  {
    href: '/toast',
    id: 'toast',
  },
  {
    href: '/tsdemo',
    id: 'tsdemo',
  },
  {
    href: '/hooks',
    id: 'hooks'
  },
  {
    href: '/notfound',
    id: 'notfound',
  },
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
