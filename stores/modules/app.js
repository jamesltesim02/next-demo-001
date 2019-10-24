import  { types } from 'mobx-state-tree'

export const App = types.model(
  'App',
  {
    locale: types.string,
    toasts: types.array(types.string)
  }
).actions(self => ({
  setLocale (locale) {
    self.locale = locale
  },
  toast(message) {
    self.toasts.push(message)
  }
}))
