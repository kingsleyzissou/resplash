import React, { useState } from 'react'
import { Container, Field, Control, Button } from 'bloomer'
import { Loader, Lightbox, Modal, Alert, SelectCollectionForm } from '../../components'
import { withRouter } from 'react-router-dom'
import lightBoxInitState from '../../components/Lightbox/initState'
import alertInitState from '../../components/Alert/initState'
import filterResult from './filterResult'
import Masonry from 'react-masonry-css'
import useSearch from '../../utils/useSearch'
import useFetchCollections from '../../utils/useFetchCollections'



const Search = () => {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [lightbox, setLightbox] = useState(false)
  const [modal, setModal] = useState(false)
  const [current, setCurrent] = useState(lightBoxInitState)
  const [alert, setAlert] = useState(alertInitState)

  // Handle api calls
  const [collections, api] = useFetchCollections(loading, setLoading)
  const [results, search, q] = useSearch(page, setLoading)

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const openModal = (result) => {
    setCurrent(filterResult(result))
    setLightbox(true)
  }

  const addToCollection = () => {
    setLightbox(false)
    setModal(true)
  }

  const selectCollection = ({ collection }) => {
    const Collection = api.getCollectionModel()
    Collection.addImage({ _id: collection, image: current })
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
                style={{ marginBottom: '30px', cursor: 'pointer' }}
                className="collection"
                onClick={() => openModal(result)}
              >

                <span
                  onClick={() => openModal(result)}
                  className="overlay"
                ></span>
                <img
                  className="collection-image"
                  src={result.urls.regular}
                  alt={result.alt_description}
                />
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