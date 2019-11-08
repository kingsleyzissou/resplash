import firebase, { db } from '../../firebase'

class Image {

  add = async ({ collection, image }) => {
    return await db.collection('collections')
      .doc(collection)
      .update({
        images: firebase.firestore.FieldValue.arrayUnion(image)
      })
  }

  index = async ({ collection }) => {
    const snapshot = await db
      .collection('collections')
      .doc(collection)
      .get()
      .catch((error) => {
        throw new Error(error)
      })
    return snapshot.docs.map(doc => {
      let { images } = doc.data()
      return {
        id: doc.id,
        images
      }
    });
  }

  show = async ({ collection }) => {
    const ref = db
      .collection('collections')
      .doc(collection)
      .collection('images')
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

  update = async ({ collection, image }) => {
    return await db
      .collection('collections')
      .doc(collection)
      .collection('images')
      .doc(image)
      .update(image)
      .catch((error) => {
        throw new Error(error)
      })
  }

  remove = async ({ collection, image }) => {
    return await db.collection('collections')
      .doc(collection)
      .update({
        images: firebase.firestore.FieldValue.arrayRemove(image)
      })
  }

}

export default Image