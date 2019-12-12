import React, { Component, Fragment } from 'react'
import { Level, LevelRight, LevelLeft, Button } from 'bloomer'
import { Loader, Collection as CollectionComponent, Lightbox, Alert, Comment, CommentForm } from '../../components'
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
    _id: '',
    loading: true,
    user: {},
    collection: {},
    comments: {},
    current: lightboxInitState,
    lightbox: false,
    alert: alertInitState
  }

  componentDidMount = async () => {
    this._mounted = true
    this.setState({ _id: this.props.match.params._id })
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
    const { collection } = await Collection.show({ _id })
      .catch((err) => console.log(err))
    this._mounted && this.setState({ collection })
    this._mounted && this.setState({ comments: collection.comments })
  }

  removeImage = () => {
    const { _id } = this.props.match.params
    const Collection = this.props.api.getCollectionModel()
    Collection.removeImage({ _id, image: this.state.current })
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

  getComments = async () => {
    const { _id } = this.props.match.params
    const Comment = this.props.api.getCommentModel()
    const comments = await Comment.index({ typeId: _id, type: 'collection' })
      .catch(err => this.showAlert(false, err))
    this.setState({ comments: comments.comments });
  }

  addComment = async (comment, type) => {
    const { _id } = this.props.match.params
    const Comment = this.props.api.getCommentModel()
    await Comment.add({ typeId: _id, type, comment })
      .catch(err => this.showAlert(false, err))
    // this.showAlert(true, 'Comment added')
    this.getComments()
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
                    {
                      (this.state.user._id === this.state.collection.user._id) &&
                      <Button onClick={() => this.history.push('/search')}>
                        + Find Images
                      </Button>
                    }
                  </LevelRight>
                </Level>
                <hr />
                {
                  (!this.state.collection ||
                    !this.state.collection.images ||
                    this.state.collection.images.length === 0) &&
                  <Fragment>
                    <h1 className="has-text-centered">
                      This collection doesn't have any images.
                      To add images, use the search feature.
                    </h1>
                    <div style={{ marginBottom: '10em' }}></div>
                  </Fragment>
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
                          user={this.state.collection.user}
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
        <h1 className="title">Comments</h1>
        <hr />
        {
          this.state.comments &&
          this.state.comments.length > 0 &&
          this.state.comments.map((comment, index) => {
            return <Comment comment={comment} key={index} />
          })
        }
        <CommentForm _id={this.state._id} type="collection" addComment={this.addComment} cancel={() => { }} />
      </Fragment>
    )

  }

}

Collection.contextType = AuthContext

export default withRouter(Collection)