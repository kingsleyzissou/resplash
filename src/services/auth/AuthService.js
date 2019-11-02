import firebase, { config ***REMOVED*** from '../../firebase'
import { readSession, clearSession ***REMOVED*** from '../../helpers/session'

export default class AuthService {

  constructor(User) {
    this.User = User
    this.auth = firebase.auth()
    this.auth.setPersistence(
      firebase.auth.Auth.Persistence.SESSION
    )
    this.provider = new firebase.auth.GoogleAuthProvider()
  ***REMOVED***

  login = async (email, password) => {
    let { user ***REMOVED*** = await this.auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        throw new Error(error)
      ***REMOVED***)
    return user
  ***REMOVED***

  logout = async () => {
    this.auth.signOut()
    clearSession(config)
  ***REMOVED***

  googleLogin = async () => {
    let { user ***REMOVED*** = await this.auth
      .signInWithPopup(this.provider)
      .catch((error) => {
        throw new Error(error)
      ***REMOVED***)
    this.User.create(user)
    return user
  ***REMOVED***

  register = async (email, password) => {
    let { user ***REMOVED*** = await this.auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        throw new Error(error)
      ***REMOVED***)
    this.User.create(user)
    return user
  ***REMOVED***

  authenticated = () => {
    const user = this.getCurrentUser()
    return !(Object.keys(user).length === 0)
  ***REMOVED***

  getCurrentUser = () => {
    const user = readSession(config)
    return (user) ? JSON.parse(user) : {***REMOVED***
  ***REMOVED***

***REMOVED***