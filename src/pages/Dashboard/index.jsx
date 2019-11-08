import React, { Component, Fragment } from 'react'
import {
  Container, Columns, Column, Button, Level,
  LevelLeft, LevelRight
} from 'bloomer'
import {
  Loader, Collection, Modal, AddCollectionForm,
  EditCollectionForm, DeleteCollectionForm
} from '../../components'
import { AuthContext } from '../../services/auth'
import { withRouter } from 'react-router-dom'


class Dashboard extends Component {

  constructor(props) {
    super(props)
    this._mounted = false
  }

  state = {
    loading: true,
    collections: [],
    addModal: false,
    editModal: false,
    deleteModal: false,
    modalData: {
      id: '',
      name: '',
      subtitle: '',
      description: ''
    },
    user: {}
  }

  componentDidMount = async () => {
    this._mounted = true
    const user = this.context.getCurrentUser()
    this._mounted && this.setState({ user })
    await this.listCollections()
    this._mounted && this.setState({ loading: false })
  }

  componentWillUnmount = () => {
    this._mounted = false
  }

  listCollections = async () => {
    let collections = await this.props.Collection.index(this.state.user)
      .catch((err) => console.log(err))
    this._mounted && this.setState({ collections })
  }

  showCollection = ({ id }) => {
    this.props.history.push(`collection/${id}`)
  }

  addCollection = ({ name, subtitle, description }) => {
    const { uid } = this.state.user
    this.props.Collection.create({ uid, name, subtitle, description })
      .catch(err => console.log(err))
    this.listCollections()
  }

  editCollection = (data) => {
    const { uid } = this.state.user
    data.user = `users/${uid}`
    this.props.Collection.update(data)
      .catch(err => console.log(err))
    this.listCollections()
  }

  deleteCollection = ({ id }) => {
    this.props.Collection.delete({ id })
      .catch(err => console.log(err))
    this.listCollections()
  }

  toggleModal = (modal) => {
    this._mounted &&
      this.setState({ [modal]: !this.state[modal] })
  }

  setModalData = ({ id, name, subtitle, description }) => {
    const update = { modalData: { id, name, subtitle, description } }
    this._mounted &&
      this.setState(update)
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
                  active={this.state.addModal}
                  handleClose={() => this.toggleModal('addModal')}
                  Component={() => {
                    return <AddCollectionForm
                      addCollection={this.addCollection}
                      close={() => this.toggleModal('addModal')}
                    />
                  }}
                />
                <Modal
                  className="modal-fx-3dFlipVertical"
                  active={this.state.editModal}
                  handleClose={() => this.toggleModal('editModal')}
                  Component={() => {
                    return <EditCollectionForm
                      data={this.state.modalData}
                      editCollection={this.editCollection}
                      close={() => this.toggleModal('editModal')}
                    />
                  }}
                />
                <Modal
                  className="modal-fx-3dFlipVertical"
                  active={this.state.deleteModal}
                  handleClose={() => this.toggleModal('deleteModal')}
                  Component={() => {
                    return <DeleteCollectionForm
                      id={this.state.modalData.id}
                      deleteCollection={this.deleteCollection}
                      close={() => this.toggleModal('deleteModal')}
                    />
                  }}
                />
                <Level>
                  <LevelLeft>
                    <h1 className="title">My Collections</h1>
                  </LevelLeft>
                  <LevelRight>
                    <Button onClick={() => this.toggleModal('addModal')}>
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
                            id={collection.id}
                            name={collection.name}
                            subtitle={collection.subtitle}
                            src={collection.image}
                            description={collection.description}
                            setData={this.setModalData}
                            showAction={this.showCollection}
                            type={'collection'}
                            openEditModal={() => this.toggleModal('editModal')}
                            openDeleteModal={() => this.toggleModal('deleteModal')}
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

export default withRouter(Dashboard)