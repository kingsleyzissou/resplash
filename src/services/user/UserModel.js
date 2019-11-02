import { db ***REMOVED*** from '../../firebase'

class User {

  create = ({ uid, displayName ***REMOVED***) => {
    db.collection('users').doc(uid).set({
      displayName: displayName || ''
    ***REMOVED***)
  ***REMOVED***

  get = async ({ uid ***REMOVED***) => {
    let ref = db.collection.doc(uid)
    return await ref
      .get()
      .catch((error) => {
        throw new Error(error)
      ***REMOVED***)
  ***REMOVED***

***REMOVED***

export default User