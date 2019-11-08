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
    return snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
  }

  show = async ({ id }) => {
    const ref = db.collection('collections').doc(id)
    const snapshot = await ref
      .get()
      .catch((error) => {
        throw new Error(error)
      })
    return {
      id: snapshot.id,
      ...snapshot.data()
    }
  }

  update = async (data) => {
    return await db.collection('collections')
      .doc(data.id).update(data)
      .catch((error) => {
        throw new Error(error)
      })
  }

  delete = async ({ id }) => {
    return await db.collection('collections')
      .doc(id).delete()
      .catch((error) => {
        throw new Error(error)
      })
  }

}

export default Collection