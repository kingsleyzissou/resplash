import React, { useState, useEffect, useRef, useCallback ***REMOVED*** from 'react'
import axios from '../../utils/axios'
import { Container, Field, Control, Button, Columns, Column ***REMOVED*** from 'bloomer'
import Loader from 'react-loader-spinner'
import Modal from '../../components/Modal'
import Test from '../../components/Test'

const Search = () => {
  const q = useRef()
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [results, setResults] = useState([])
  const [modal, setModal] = useState(false)
  const [current, setCurrent] = useState({***REMOVED***)

  const handleChange = (event) => {
    setQuery(event.target.value)
  ***REMOVED***

  const search = useCallback(async () => {
    let query = q.current.value
    if (!query || query === '') return
    setLoading(true)
    const { data ***REMOVED*** = await axios.get('/', {
      params: {
        query, page
      ***REMOVED***
    ***REMOVED***)
      .catch((error) => error)
    setLoading(false)
    setResults(data.results)
  ***REMOVED***, [page, q])

  useEffect(() => {
    search()
  ***REMOVED***, [search])

  const openModal = (result) => {
    setCurrent(result)
    setModal(true)
  ***REMOVED***

  return (
    <Container>
      <Modal
        active={modal***REMOVED***
        Component={() => <Test result={current***REMOVED*** />***REMOVED***
        handleClose={() => setModal(false)***REMOVED***
      />
      <h1 className="title">Search for images</h1>
      <Field className="has-addons">
        <Control className="is-expanded">
          <input
            className="input is-fullwidth"
            type="text"
            name="q"
            placeholder="Search"
            onChange={handleChange***REMOVED***
            value={query***REMOVED***
            ref={q***REMOVED***
          />
        </Control>
        <Control>
          <Button
            onClick={() => search(query)***REMOVED***
            isColor={"info"***REMOVED***
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
              height={200***REMOVED***
              width={200***REMOVED***
            />
            <h1>Loading...</h1>
          </div>
        ) : (
            <Columns isMultiline>
              {
                results.length > 0 && results.map((result, index) => {
                  return (
                    <Column key={index***REMOVED*** isSize={'1/3'***REMOVED***>
                      <figure
                        className="image is-256by256"
                        onClick={() => openModal(result)***REMOVED***
                      >
                        <img src={result.urls.regular***REMOVED*** alt={result.alt_description***REMOVED*** />
                      </figure>
                    </Column>
                  )
                ***REMOVED***)
              ***REMOVED***
            </Columns>
          )
      ***REMOVED***
      <Field>
        {(results.length > 0 && page > 1) &&
          <Button
            className="is-pulled-left"
            onClick={() => setPage(page - 1)***REMOVED***
          >
            Back
          </Button>
        ***REMOVED***
      </Field>
      <Field>
        {(results.length > 0) &&
          <Button
            isColor={'info'***REMOVED***
            className="is-pulled-right"
            onClick={() => setPage(page + 1)***REMOVED***
          >
            Next
        </Button>
        ***REMOVED***
      </Field>
    </Container>
  )
***REMOVED***

export default Search