import Link from 'next/link';
import Layout from '../components/common/layout'
import { useAmp } from 'next/amp'
import { FormattedMessage, injectIntl, intlShape  } from 'react-intl'; 

export default ({intl}) => (
  <Layout title="Home page.">
    This is index page.<br />
    user amp: {useAmp()}<br />
    i18n message &lt;FormattedMessage id="message"/&gt;: <FormattedMessage id="message"/><br />
    i18n message {`intl.formatMessage({id:'message'})`}:{ intl && intl.formatMessage({id:'message'}) }<br />
    {/* 语言切换 */}
    <Link href={`/zh-CN/`}>
      <a type="primary">中文</a>
    </Link>
    |
    <Link href={`/en-US/`}>
      <a type="primary">English</a>
    </Link>
    |
    <Link href={`/zh-TW/`}>
      <a type="primary">繁体</a>
    </Link>
  </Layout>
)