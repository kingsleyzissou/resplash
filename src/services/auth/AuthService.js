import $axios from '../../utils/axios'

export default class AuthService {

  login = async (input) => {
    let { data } = await $axios.server
      .post('/login', { ...input })
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

  register = async (input) => {
    let { data } = await $axios.server
      .post('/register', { ...input })
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data.user
  }

  authenticated = () => {
    const token = localStorage.getItem('token')
    return (token)
  }

  getCurrentUser = () => {
    return (this.authenticated) ? JSON.parse(localStorage.getItem('user')) : {}
  }

  // recover = async (email) => {
  //   return await this.auth
  //     .sendPasswordResetEmail(email)
  //     .catch((error) => {
  //       throw new Error(error)
  //     })
  // }

}