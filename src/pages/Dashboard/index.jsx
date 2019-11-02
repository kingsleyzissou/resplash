import React, { Component ***REMOVED*** from 'react'
import {
  Container, Columns, Column, Button, Level, LevelLeft, LevelRight
***REMOVED*** from 'bloomer'
import { ApiContext ***REMOVED*** from '../../services/api'
import Collection from '../../components/Collection'

class Dashboard extends Component {

  state = {
    loading: true,
    collections: [],
  ***REMOVED***

  componentDidMount = async () => {
    const Collection = this.context.getCollectionModel();
    const mock = { uid: '1234' ***REMOVED***
    const collections = await Collection.index(mock)
      .catch((err) => console.log(err))
    this.setState({ loading: false ***REMOVED***)
    this.setState({ collections ***REMOVED***)
  ***REMOVED***

  render() {
    return (
      <Container>
        <Level>
          <LevelLeft>
            <h1 className="title">My Collections</h1>
          </LevelLeft>
          <LevelRight>
            <Button>+ Add Collection</Button>
          </LevelRight>
        </Level>
        <hr />
        <Columns isMultiline isCentered={false***REMOVED***>
          {
            this.state.collections.map((collection, index) => {
              return (
                <Column isSize={'1/3'***REMOVED*** key={index***REMOVED***>
                  <Collection
                    name={'collection.name'***REMOVED***
                    subtitle={'this'***REMOVED***
                    image={collection.image***REMOVED***
                    alt={'stuff'***REMOVED***
                  />
                </Column>
              )
            ***REMOVED***)
          ***REMOVED***
        </Columns>
      </Container>
    )
  ***REMOVED***

***REMOVED***

Dashboard.contextType = ApiContext

export default Dashboard