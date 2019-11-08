import ApiContext from './ApiContext'

class Api {
  constructor(User, Collection, Image) {
    this.User = User
    this.Collection = Collection
    this.Image = Image
  }

  getUserModel = () => {
    return this.User
  }

  getCollectionModel = () => {
    return this.Collection
  }

  getImageModel = () => {
    return this.Image
  }

}

export default Api

export { ApiContext }