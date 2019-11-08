import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/admin'
import 'firebase/firestore'
import config from './config'

firebase.initializeApp(config)
const db = firebase.firestore()

export { config, db }
export default firebase

