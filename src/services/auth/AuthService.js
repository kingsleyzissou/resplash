import firebase, { config } from '../../firebase'
import { readSession, clearSession } from '../../utils/session'

export default class AuthService {

  constructor(User) {
    this.User = User
    this.auth = firebase.auth()
    this.auth.setPersistence(
      firebase.auth.Auth.Persistence.SESSION
    )
    this.provider = new firebase.auth.GoogleAuthProvider()
  }

  login = async (email, password) => {
    let { user } = await this.auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        throw new Error(error)
      })
    return user
  }

  logout = async () => {
    this.auth.signOut()
    clearSession(config)
  }

  googleLogin = async () => {
    let { user } = await this.auth
      .signInWithPopup(this.provider)
      .catch((error) => {
        throw new Error(error)
      })
    this.User.create(user)
    return user
  }

  register = async (email, password) => {
    let { user } = await this.auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        throw new Error(error)
      })
    this.User.create(user)
    return user
  }

  authenticated = () => {
    const user = this.getCurrentUser()
    return !(Object.keys(user).length === 0)
  }

  getCurrentUser = () => {
    const user = readSession(config)
    return (user) ? JSON.parse(user) : {}
  }

}