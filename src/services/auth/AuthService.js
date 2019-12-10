import axios from 'axios'
// import firebase, { config } from '../../firebase'
// import { readSession, clearSession } from '../../utils/session'

export default class AuthService {

  // constructor(User) {
  // this.User = User
  // this.auth = firebase.auth()
  // this.auth.setPersistence(
  //   firebase.auth.Auth.Persistence.SESSION
  // )
  // this.provider = new firebase.auth.GoogleAuthProvider()
  // }

  login = async (email, password) => {
    let { data } = await axios
      .post('http://localhost:4000/login', { email, password })
      .catch((error) => {
        throw new Error(error)
      })
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data.user
  }

  logout = async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
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
    let { data } = await axios
      .post('http://localhost:4000/register', { email, password })
      .catch((error) => {
        throw new Error(error)
      })
    // this.User.create(user)
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.user);
    return data.user
  }

  authenticated = () => {
    const user = this.getCurrentUser()
    return !(Object.keys(user).length === 0)
  }

  getCurrentUser = () => {
    const authenticated = localStorage.getItem('token')
    return (authenticated) ? JSON.parse(localStorage.getItem('user')) : {}
  }

  // recover = async (email) => {
  //   return await this.auth
  //     .sendPasswordResetEmail(email)
  //     .catch((error) => {
  //       throw new Error(error)
  //     })
  // }

}