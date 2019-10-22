import useApi, { BaseApi } from './base'

import OpsConfig from '../configs/config.ops'

class UserApi extends BaseApi {
  constructor () {
    super({
      baseURL: OpsConfig.API_URL
    })
  }

  list () {
    return super.get('/users')
  }

  add (user) {
    return super.post('/users', user)
  }

  update (user) {
    if (!user.id) {
      throw Error('The new data must have attribute "id"')
    }

    return super.put(`/users/${user.id}`, user)
  }

  delete (id) {
    return super.delete(`/users/${id}`)
  }
}

export default (SubComponent) => useApi(SubComponent, { users: UserApi })
