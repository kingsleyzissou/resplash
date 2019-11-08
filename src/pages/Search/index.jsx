import React, { useState, useEffect, useRef, useCallback, useContext } from 'react'
import axios from '../../utils/axios'
import { Container, Field, Control, Button, Columns, Column } from 'bloomer'
import { Loader, Lightbox, Modal, SelectCollectionForm } from '../../components'
import { withRouter } from 'react-router-dom'
import AuthContext from '../../services/auth/AuthContext'
import ApiContext from '../../services/api/ApiContext'

const filterResult = (result) => {
  const { id, user, alt_description, description, urls } = result
  const { name, username, profile_image } = user
  return {
    id,
    urls: {
      regular: urls.regular,
      full: urls.full
    },
    alt_description,
    description,
    user: {
      id: user.id,
      name,
      username,
      profile_image: {
        medium: profile_image.medium
      }
    }
  }
}

const Search = () => {
  const q = useRef()
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [collections, setCollections] = useState([])
  const [results, setResults] = useState([])
  const [lightbox, setLightbox] = useState(false)
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState({})
  const [mounted, setMounted] = useState(false)
  const auth = useContext(AuthContext)
  const api = useContext(ApiContext)

  useEffect(() => {
    setUser(auth.getCurrentUser())
  }, [auth, setUser])

  const [current, setCurrent] = useState({
    id: '',
    urls: {
      regular: '',
      full: ''
    },
    alt_description: '',
    description: '',
    user: {
      id: '',
      name: '',
      username: '',
      profile_image: {
        small: ''
      }
    }
  })

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

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
  }, [page, q])

  useEffect(() => {
    search()
  }, [search])

  useEffect(() => {
    setMounted(true)
    const aysncData = (() => {
      api.getCollectionModel().index({ uid: user.uid })
        .then((res) => setCollections(res))
        .then(() => setLoading(false))
        .catch((err) => console.log(err))
        .then(() => setLoading(false))
    })
    if (mounted) {
      aysncData()
    }
    return () => {
      setMounted(false)
    }
  }, [user, api, loading, mounted])

  const openModal = (result) => {
    setCurrent(filterResult(result))
    setLightbox(true)
  }

  const addToCollection = () => {
    setLightbox(false)
    setModal(true)
  }

  const selectCollection = ({ collection }) => {
    const Image = api.getImageModel()
    Image.add({ collection, image: current })
  }

  if (loading) return <Loader
    fullPage={true}
    loading={loading}
  />

  return (
    <Container>
      <Lightbox
        active={lightbox}
        className="modal modal-fx-fadeInScale modal-full-screen"
        src={current.urls.regular}
        alt={current.alt_description}
        description={current.description}
        user={current.user}
        fromSearch={true}
        contextAction={addToCollection}
        handleClose={() => setLightbox(false)}
      />
      <Modal
        className="modal-fx-slideLeft"
        active={modal}
        handleClose={() => setModal(false)}
        Component={() => {
          return <SelectCollectionForm
            collections={collections}
            selectCollection={selectCollection}
            close={() => setModal(false)}
          />
        }}
      />
      <h1 className="title">Search for images</h1>
      <Field className="has-addons">
        <Control className="is-expanded">
          <input
            className="input is-fullwidth"
            type="text"
            name="q"
            placeholder="Search"
            onChange={handleChange}
            value={query}
            ref={q}
          />
        </Control>
        <Control>
          <Button
            onClick={() => search(query)}
            isColor={"info"}
          >
            Search
          </Button>
        </Control>
      </Field>
      <hr />
      <Columns isMultiline>
        {
          results.length > 0 && results.map((result, index) => {
            return (
              <Column key={index} isSize={'1/3'}>
                <figure
                  className="image is-256by256"
                  onClick={() => openModal(result)}
                >
                  <img src={result.urls.regular} alt={result.alt_description} />
                </figure>
              </Column>
            )
          })
        }
      </Columns>
      <Field>
        {(results.length > 0 && page > 1) &&
          <Button
            className="is-pulled-left"
            onClick={() => setPage(page - 1)}
          >
            Back
          </Button>
        }
      </Field>
      <Field>
        {(results.length > 0) &&
          <Button
            isColor={'info'}
            className="is-pulled-right"
            onClick={() => setPage(page + 1)}
          >
            Next
        </Button>
        }
      </Field>
    </Container>
  )
}

export default withRouter(Search)