import { useState, useContext, useEffect } from 'react'
import AuthContext from '../services/auth/AuthContext'
import ApiContext from '../services/api/ApiContext'

const useFetchUser = () => {
  const auth = useContext(AuthContext)
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(auth.getCurrentUser())
  }, [auth, setUser])

  return user
}

const useFetchCollections = (loading, setLoading) => {
  const user = useFetchUser()
  const api = useContext(ApiContext)
  const [mounted, setMounted] = useState(false)
  const [collections, setCollections] = useState([])

  useEffect(() => {

    setMounted(true)
    const aysncData = (() => {
      api.getCollectionModel().userCollections({ _id: user._id })
        .then(({ userCollections }) => setCollections(userCollections))
        .then(() => setLoading(false))
        .catch((err) => console.log(err))
        .then(() => setLoading(false))
    })
    if (mounted) {
      aysncData()
    }
    return () => setMounted(false)
  }, [user, api, loading, setLoading, mounted])

  return [collections, api, user]
}

export default useFetchCollections