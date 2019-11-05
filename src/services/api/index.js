import ApiContext from './ApiContext'

class Api {
  constructor(User, Collection) {
    this.User = User
    this.Collection = Collection
  }

  getUserModel = () => {
    return this.User
  }

  getCollectionModel = () => {
    return this.Collection
  }

}

export default Api

export { ApiContext }