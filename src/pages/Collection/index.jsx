import React, { Component, Fragment } from 'react'
import { Level, LevelRight, LevelLeft, Button } from 'bloomer'
import { Loader, Collection as CollectionComponent, Lightbox, Alert } from '../../components'
import { AuthContext } from '../../services/auth'
import { withRouter } from 'react-router-dom'
import lightboxInitState from '../../components/Lightbox/initState'
import alertInitState from '../../components/Alert/initState'
import Masonry from 'react-masonry-css'

class Collection extends Component {

  constructor(props) {
    super(props)
    this._mounted = false
    this.history = props.history
  }

  state = {
    loading: true,
    user: {},
    collection: {},
    current: lightboxInitState,
    lightbox: false,
    alert: alertInitState
  }

  componentDidMount = async () => {
    this._mounted = true
    const user = this.context.getCurrentUser()
    this._mounted && this.setState({ user })
    await this.getCollection()
    this._mounted && this.setState({ loading: false })
  }

  componentWillUnmount = () => {
    this._mounted = false
  }

  getCollection = async () => {
    const { _id } = this.props.match.params
    const Collection = this.props.api.getCollectionModel()
    const collection = await Collection.show({ _id })
      .catch((err) => console.log(err))
    this._mounted && this.setState({ collection })
  }

  removeImage = () => {
    const collection = this.props.match.params.id
    const Image = this.props.api.getImageModel()
    Image.remove({ collection, image: this.state.current })
      .catch(err => this.showAlert(false, err))
    this.showAlert(true, 'Image successfully removed')
    this.getCollection()
  }

  showAlert = (success, message) => {
    this.setState({
      lightbox: false,
      alert: {
        active: true,
        success: success,
        message: message
      }
    })
  }

  showImage = ({ image }) => {
    this.setState({
      current: image,
      lightbox: true
    })
  }

  render() {
    const { current } = this.state
    return (
      <Fragment>
        {
          (this.state.loading) ? (
            <Loader
              fullPage={true}
              loading={this.state.loading}
            />
          ) : (
              <Fragment>
                <Lightbox
                  active={this.state.lightbox}
                  className="modal modal-fx-fadeInScale modal-full-screen"
                  src={current.urls.regular}
                  alt={current.alt_description}
                  description={current.description}
                  user={current.user}
                  fromSearch={false}
                  contextAction={this.removeImage}
                  handleClose={() => this.setState({ lightbox: false })}
                />
                <Alert
                  active={this.state.alert.active}
                  success={this.state.alert.success}
                  message={this.state.alert.message}
                  handleClose={() => this.setState({ alert: alertInitState })}
                />
                <Level>
                  <LevelLeft>
                    <h1 className="title">My Collections</h1>
                  </LevelLeft>
                  <LevelRight>
                    <Button onClick={() => this.history.push('/search')}>
                      + Find Images
                    </Button>
                  </LevelRight>
                </Level>
                <hr />
                {
                  (!this.state.collection ||
                    !this.state.collection.images ||
                    this.state.collection.images.length === 0) &&
                  <h1 className="has-text-centered">
                    This collection doesn't have any images.
                    To add images, use the search feature.
                  </h1>
                }
                <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {
                    this.state.collection &&
                    this.state.collection.images &&
                    this.state.collection.images.map((image, index) => {
                      return (
                        <CollectionComponent
                          key={index}
                          title={image.title}
                          subtitle={image.subtitle}
                          src={image.urls.regular}
                          alt={image.alt_description}
                          image={image}
                          type={'image'}
                          showAction={this.showImage}
                        />
                      )
                    })
                  }
                </Masonry>
              </Fragment>
            )
        }
      </Fragment>
    )

  }

}

Collection.contextType = AuthContext

export default withRouter(Collection)