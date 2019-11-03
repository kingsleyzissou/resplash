import React, { Component ***REMOVED*** from 'react'
import {
  Container, Columns, Column, Button, Level, LevelLeft, LevelRight
***REMOVED*** from 'bloomer'
import Loader from 'react-loader-spinner'
import { AuthContext ***REMOVED*** from '../../services/auth'
import Collection from '../../components/Collection'
import Modal from '../../components/Modal'
import AddCollectionForm from '../../components/AddCollectionForm'

class Dashboard extends Component {

  state = {
    loading: true,
    collections: [],
    modalActive: false,
    user: {***REMOVED***
  ***REMOVED***

  componentDidMount = async () => {
    const user = this.context.getCurrentUser()
    this.setState({ user ***REMOVED***)
    await this.listCollections()
    this.setState({ loading: false ***REMOVED***)
  ***REMOVED***

  listCollections = async () => {
    const collections = await this.props.Collection.index(this.state.user)
      .catch((err) => console.log(err))
    this.setState({ collections ***REMOVED***)
  ***REMOVED***

  addCollection = ({ name, description ***REMOVED***) => {
    const { uid ***REMOVED*** = this.state.user
    this.props.Collection.create({ uid, name, description ***REMOVED***)
    this.listCollections()
  ***REMOVED***

  toggleModal = () => {
    this.setState({ modalActive: !this.state.modalActive ***REMOVED***)
  ***REMOVED***

  render() {
    return (
      <Container>
        <Modal
          active={this.state.modalActive***REMOVED***
          handleClose={this.toggleModal***REMOVED***
          Component={() => <AddCollectionForm addCollection={this.addCollection***REMOVED*** close={this.toggleModal***REMOVED*** />***REMOVED***
        />
        <Level>
          <LevelLeft>
            <h1 className="title">My Collections</h1>
          </LevelLeft>
          <LevelRight>
            <Button onClick={this.toggleModal***REMOVED***>
              + Add Collection
            </Button>
          </LevelRight>
        </Level>
        <hr />
        {
          (this.state.loading) ? (
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
            )
        ***REMOVED***

      </Container>
    )
  ***REMOVED***

***REMOVED***

Dashboard.contextType = AuthContext

export default Dashboard