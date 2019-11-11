import { useState, useRef, useCallback, useEffect } from 'react'
import axios from '../../utils/axios'


const useSearch = (page, setLoading) => {
  const [results, setResults] = useState([])

  const q = useRef()
  const search = useCallback(async () => {
    let query = q.current.value
    if (!query || query === '') return
    setLoading(true)
    const { data } = await axios.get('/', {
      params: {
        query, page
      }
    })
      .catch((error) => error)
    setLoading(false)
    setResults(data.results)
  }, [page, q, setLoading])

  useEffect(() => {
    search()
  }, [search])

  return [results, search, q]
}

export default useSearch