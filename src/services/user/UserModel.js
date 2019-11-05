import { db } from '../../firebase'

class User {

  create = ({ uid, displayName }) => {
    db.collection('users').doc(uid).set({
      displayName: displayName || ''
    })
  }

  get = async ({ uid }) => {
    let ref = db.collection.doc(uid)
    return await ref
      .get()
      .catch((error) => {
        throw new Error(error)
      })
  }

}

export default User