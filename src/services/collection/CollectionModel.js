import { db ***REMOVED*** from '../../firebase'

class Collection {

  create = ({ uid, name, description ***REMOVED***) => {
    db.collection('collections').add({
      user: `users/${uid***REMOVED***`,
      name,
      description
    ***REMOVED***)
  ***REMOVED***

  index = async ({ uid ***REMOVED***) => {
    const snapshot = await db.collection('collections')
      .get()
      .catch((error) => {
        throw new Error(error)
      ***REMOVED***)
    return snapshot.docs.map(doc => doc.data());
  ***REMOVED***

  show = async ({ id ***REMOVED***) => {
    let ref = db.collection.doc(id)
    return await ref
      .get()
      .catch((error) => {
        throw new Error(error)
      ***REMOVED***)
  ***REMOVED***

***REMOVED***

export default Collection