import React, { Component, Fragment } from 'react'
import { Columns, Column, Level, LevelRight, LevelLeft, Button } from 'bloomer'
import CollectionComponent from '../../components/Collection'
import { AuthContext } from '../../services/auth'
import { withRouter } from 'react-router-dom'

class Collection extends Component {

  constructor(props) {
    super(props)
    this._mounted = false
  }

  state = {
    loading: true,
    user: {},
    collection: {}
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
    let collection = await this.props.Collection.show({ id })
      .catch((err) => console.log(err))
    console.log(collection)
    this._mounted && this.setState({ collection })
  }

  render() {

    const images = [
      {
        key: 1,
        title: 'Sample text',
        subtitle: 'Sample sub',
        image: 'https://bulma.io/images/placeholders/480x480.png',
        alt_description: 'Description'
      },
      {
        key: 2,
        title: 'Sample text',
        subtitle: 'Sample sub',
        image: 'https://bulma.io/images/placeholders/480x480.png',
        alt_description: 'Description'
      },
      {
        key: 3,
        title: 'Sample text',
        subtitle: 'Sample sub',
        image: 'https://bulma.io/images/placeholders/480x480.png',
        alt_description: 'Description'
      }
    ];

    const imagesList = images.map((image, index) => {
      return (
        <Column key={index}>
          <CollectionComponent
            title={image.title}
            subtitle={image.subtitle}
            image={image.image}
            alt={image.alt_description}
          />
        </Column>
      )
    });

    return (
      <Fragment>
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
          {imagesList}
        </Columns>
      </Fragment>
    )

  }

}

Collection.contextType = AuthContext

export default withRouter(Collection)