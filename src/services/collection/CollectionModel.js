import { db } from '../../firebase'

class Collection {

  create = ({ uid, name, description }) => {
    db.collection('collections').add({
      user: `users/${uid}`,
      name,
      description
    })
  }

  index = async ({ uid }) => {
    const snapshot = await db.collection('collections')
      .get()
      .catch((error) => {
        throw new Error(error)
      })
    return snapshot.docs.map(doc => doc.data());
  }

  show = async ({ id }) => {
    let ref = db.collection.doc(id)
    return await ref
      .get()
      .catch((error) => {
        throw new Error(error)
      })
  }

}

export default Collection