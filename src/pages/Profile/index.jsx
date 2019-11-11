import React, { useState, Fragment } from 'react'
import moment from 'moment'
import { Loader } from '../../components'
import {
  Columns, Column, Level, LevelItem
} from 'bloomer'
import useFetchCollections from '../../utils/useFetchCollections'

const Profile = () => {
  const [loading, setLoading] = useState(true)

  const [collections, , user] = useFetchCollections(loading, setLoading)

  let lastLogin = (user.lastLoginAt)
    ? moment.unix(user.lastLoginAt / 1000).fromNow()
    : 'Last login not available';

  let count = 0
  collections.map(collection => {
    return count += collection.images.length
  })

  if (loading) return <Loader
    fullPage={true}
    loading={loading}
  />

  return (
    <Fragment>
      <Columns isMultiline>
        <Column isSize={'full'} hasTextAlign="centered">
          <img src={user.photoURL || '/user.jpg'} alt="Profile" style={{ width: "64px" }} />
          <p>
            <strong>{user.displayName || user.email}</strong> <br />
            <small>Last seen:</small> <small>{lastLogin}</small>
            <br />
          </p>
          <hr />
        </Column>
        <Column isSize={4} isOffset={4}>
          <Level>
            <LevelItem className="has-text-centered">
              <div>
                <p className="heading">#Collections</p>
                <p className="title">{collections.length}</p>
              </div>
            </LevelItem>
            <LevelItem className="has-text-centered">
              <div>
                <p className="heading">#Images</p>
                <p className="title">{count}</p>
              </div>
            </LevelItem>
          </Level>
        </Column>
      </Columns>

    </Fragment>
  )
}

export default Profile