import React, { Component, Fragment } from 'react'
import {
  Container, Button, Level,
  LevelLeft, LevelRight
} from 'bloomer'
import {
  Loader, Collection, Modal, AddCollectionForm,
  EditCollectionForm, DeleteCollectionForm
} from '../../components'
import { AuthContext } from '../../services/auth'
import { withRouter } from 'react-router-dom'
import Masonry from 'react-masonry-css'

class Collections extends Component {

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
      _id: '',
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
    let { collections } = await this.props.Collection.index()
      .catch((err) => console.log(err));
    this._mounted && this.setState({ collections: collections })
  }

  showCollection = ({ _id }) => {
    this.props.history.push(`collection/${_id}`)
  }

  addCollection = ({ name, subtitle, description }) => {
    const user = this.state.user
    this.props.Collection.create({ user, name, subtitle, description })
    this.listCollections(user)
  }

  editCollection = (data) => {
    this.props.Collection.update(data)
      .catch(err => console.log(err))
    this.listCollections(this.state.user)
  }

  deleteCollection = ({ _id }) => {
    this.props.Collection.delete({ _id })
      .catch(err => console.log(err))
    this.listCollections(this.state.user)
  }

  toggleModal = (modal) => {
    this._mounted &&
      this.setState({ [modal]: !this.state[modal] })
  }

  setModalData = ({ _id, name, subtitle, description }) => {
    const update = { modalData: { _id, name, subtitle, description } }
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
                      _id={this.state.modalData._id}
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
                {
                  this.state.collections.length === 0 &&
                  <h1 className="has-text-centered">
                    Create a collection to get started
                  </h1>
                }
                <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {
                    this.state.collections.map((collection, index) => {
                      let image = (collection.images && collection.images.length > 0)
                        ? collection.images[0].urls.regular
                        : '/placeholder.jpg';
                      return (
                        <div key={index}>
                          <Collection
                            _id={collection._id}
                            name={collection.name}
                            subtitle={collection.subtitle}
                            user={collection.user}
                            src={image}
                            like={this.likeCollection}
                            description={collection.description}
                            setData={this.setModalData}
                            showAction={this.showCollection}
                            type={'collection'}
                            openEditModal={() => this.toggleModal('editModal')}
                            openDeleteModal={() => this.toggleModal('deleteModal')}
                          />
                        </div>
                      )
                    })
                  }
                </Masonry>
              </Container>
            )
        }
      </Fragment>
    )
  }

}

Collections.contextType = AuthContext

export default withRouter(Collections)