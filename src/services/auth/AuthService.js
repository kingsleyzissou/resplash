import * as firebase from 'firebase'
import config from '../../config/firebase'
import { readSession, clearSession ***REMOVED*** from '../../helpers/session'

export default class AuthService {

  constructor() {
    firebase.initializeApp(config)
    this.auth = firebase.auth()
    this.auth.setPersistence(
      firebase.auth.Auth.Persistence.SESSION
    )
    this.provider = new firebase.auth.GoogleAuthProvider()
  ***REMOVED***

  login = async (email, password) => {
    return await this.auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        throw new Error(error)
      ***REMOVED***)
  ***REMOVED***

  logout = async () => {
    this.auth.signOut()
    clearSession(config)
  ***REMOVED***

  googleLogin = async () => {
    return await this.auth
      .signInWithPopup(this.provider)
      .catch((error) => {
        throw new Error(error)
      ***REMOVED***)
  ***REMOVED***

  register = async (email, password) => {
    return await this.auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        throw new Error(error)
      ***REMOVED***)
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