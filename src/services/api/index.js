import ApiContext from './ApiContext'
import { UserModel, CollectionModel, ImageModel, CommentModel } from '../models'

class Api {
  constructor() {
    this.User = new UserModel()
    this.Collection = new CollectionModel()
    this.Image = new ImageModel()
    this.Comment = new CommentModel()
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

  getCommentModel = () => {
    return this.Comment
  }

}

export default Api

export { ApiContext }