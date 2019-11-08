import React, { Component, Fragment } from 'react'
import { Columns, Column, Level, LevelRight, LevelLeft, Button } from 'bloomer'
import { Loader, Collection as CollectionComponent, Lightbox } from '../../components'
import { AuthContext } from '../../services/auth'
import { withRouter } from 'react-router-dom'
import lightboxInitState from '../../components/Lightbox/initState'

class Collection extends Component {

  constructor(props) {
    super(props)
    this._mounted = false
  }

  state = {
    loading: true,
    user: {},
    collection: {},
    current: lightboxInitState,
    lightbox: false
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
    const { id } = this.props.match.params
    const Collection = this.props.api.getCollectionModel()
    const collection = await Collection.show({ id })
      .catch((err) => console.log(err))
    this._mounted && this.setState({ collection })
  }

  removeImage = () => {
    const collection = this.props.match.params.id
    const Image = this.props.api.getImageModel()
    Image.remove({ collection, image: this.state.current })
    this.getCollection()
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
                <Columns>
                  {
                    this.state.collection.images.map((image, index) => {
                      return (
                        <Column isSize={'1/3'} key={index}>
                          <CollectionComponent
                            title={image.title}
                            subtitle={image.subtitle}
                            src={image.urls.regular}
                            alt={image.alt_description}
                            image={image}
                            type={'image'}
                            showAction={this.showImage}
                          />
                        </Column>
                      )
                    })
                  }
                </Columns>
              </Fragment>
            )
        }
      </Fragment>
    )

  }

}

Collection.contextType = AuthContext

export default withRouter(Collection)