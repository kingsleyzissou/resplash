import React, { useState, useEffect, useRef, useCallback, useContext } from 'react'
import axios from '../../utils/axios'
import { Container, Field, Control, Button } from 'bloomer'
import { Loader, Lightbox, Modal, Alert, SelectCollectionForm } from '../../components'
import { withRouter } from 'react-router-dom'
import AuthContext from '../../services/auth/AuthContext'
import ApiContext from '../../services/api/ApiContext'
import lightBoxInitState from '../../components/Lightbox/initState'
import alertInitState from '../../components/Alert/initState'
import filterResult from './filterResult'
import Masonry from 'react-masonry-css'

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
  const [current, setCurrent] = useState(lightBoxInitState)
  const [alert, setAlert] = useState(alertInitState)
  const auth = useContext(AuthContext)
  const api = useContext(ApiContext)

  useEffect(() => {
    setUser(auth.getCurrentUser())
  }, [auth, setUser])

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
      .catch(err => showAlert(false, err))
    showAlert(true, 'Image successfully added!')
  }

  const showAlert = (success, message) => {
    setModal(false)
    setAlert({
      active: true,
      success: success,
      message: message
    })
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
      <Alert
        active={alert.active}
        success={alert.success}
        message={alert.message}
        handleClose={() => setAlert({ alertInitState })}
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
      {
        (results.length === 0 && query === '') &&
        <h1 className="has-text-centered">
          Search for some images!
        </h1>
      }
      {
        (results.length === 0 && query !== '') &&
        <h1 className="has-text-centered">
          Sorry, no results found.
        </h1>
      }
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          results.length > 0 && results.map((result, index) => {
            return (
              <figure
                key={index}
                className="image is-256by256"
                onClick={() => openModal(result)}
              >
                <img src={result.urls.regular} alt={result.alt_description} />
              </figure>
            )
          })
        }
      </Masonry>
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