const isProd = process.env.NODE_ENV === 'production'

export default {
  CDN_URL: isProd ? 'http://10.96.17.107:3800' : '',
  API_URL: '',
}
