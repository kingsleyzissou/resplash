import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from '../../utils/axios'
import { Container, Field, Control, Button, Columns, Column } from 'bloomer'
import Loader from 'react-loader-spinner'
// import Modal from '../../components/Modal'
// import Test from '../../components/PrettyPrintJson'
import { Lightbox } from '../../components'

const Search = () => {
  const q = useRef()
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [results, setResults] = useState([])
  const [modal, setModal] = useState(false)
  const [current, setCurrent] = useState({
    urls: {
      regular: ''
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

  const openModal = (result) => {
    setCurrent(result)
    setModal(true)
  }

  return (
    <Container>
      <Lightbox
        active={modal}
        className="modal modal-fx-fadeInScale modal-full-screen"
        src={current.urls.regular}
        alt={current.alt_description}
        description={current.description}
        user={current.user}
        fromSearch={true}
        handleClose={() => setModal(false)}
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
        (loading) ? (
          <div className="has-text-centered">
            <Loader
              type="Triangle"
              color="#00BFFF"
              height={200}
              width={200}
            />
            <h1>Loading...</h1>
          </div>
        ) : (
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
          )
      }
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

export default Search