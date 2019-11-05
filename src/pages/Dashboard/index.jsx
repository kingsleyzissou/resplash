import React, { Component, Fragment } from 'react'
import { Container, Columns, Column, Button, Level, LevelLeft, LevelRight } from 'bloomer'
import { Loader, Collection, Modal, AddCollectionForm } from '../../components'
import { AuthContext } from '../../services/auth'


class Dashboard extends Component {

  state = {
    loading: true,
    collections: [],
    modalActive: false,
    user: {}
  }

  componentDidMount = async () => {
    const user = this.context.getCurrentUser()
    this.setState({ user })
    await this.listCollections()
    this.setState({ loading: false })
  }

  listCollections = async () => {
    const collections = await this.props.Collection.index(this.state.user)
      .catch((err) => console.log(err))
    this.setState({ collections })
  }

  addCollection = ({ name, description }) => {
    const { uid } = this.state.user
    this.props.Collection.create({ uid, name, description })
    this.listCollections()
  }

  toggleModal = () => {
    this.setState({ modalActive: !this.state.modalActive })
  }

  render() {
    return (
      <Fragment>
        {
          (this.state.loading) ? (
            <Loader
              fullPage={true}
              loading={this.state.loading}
            />
          ) : (
              <Container>
                <Modal
                  className="modal-fx-3dFlipVertical"
                  active={this.state.modalActive}
                  handleClose={this.toggleModal}
                  Component={() => <AddCollectionForm addCollection={this.addCollection} close={this.toggleModal} />}
                />
                <Level>
                  <LevelLeft>
                    <h1 className="title">My Collections</h1>
                  </LevelLeft>
                  <LevelRight>
                    <Button onClick={this.toggleModal}>
                      + Add Collection
                    </Button>
                  </LevelRight>
                </Level>
                <hr />
                <Columns isMultiline isCentered={false}>
                  {
                    this.state.collections.map((collection, index) => {
                      return (
                        <Column isSize={'1/3'} key={index}>
                          <Collection
                            name={'collection.name'}
                            subtitle={'this'}
                            image={collection.image}
                            alt={'stuff'}
                          />
                        </Column>
                      )
                    })
                  }
                </Columns>
              </Container>
            )
        }
      </Fragment>
    )
  }

}

Dashboard.contextType = AuthContext

export default Dashboard