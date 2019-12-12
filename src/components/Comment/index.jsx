import React from 'react'
import moment from 'moment'
import { Media, MediaLeft, MediaContent, Image, Level, LevelLeft, LevelItem, Content } from 'bloomer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faReply, } from "@fortawesome/free-solid-svg-icons"

const Comment = (props) => {
  const comment_time = moment.unix(props.comment.created_at / 1000).fromNow();
  return (
    <Media>
      <MediaLeft>
        <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>{props.comment.user.name}</strong> <small>@{props.comment.user.username}</small> <small>{comment_time}</small>
            <br />
            {props.comment.message}
          </p>
        </Content>
        <Level isMobile>
          <LevelLeft>
            <LevelItem href='#'>
              {/* <Icon isSize='small'><span className="fa fa-reply" aria-hidden="true" /></Icon> */}
              <FontAwesomeIcon icon={faReply} />
            </LevelItem>
            <LevelItem href='#'>
              {/* <Icon isSize='small'><span className="fa fa-heart" aria-hidden="true" /></Icon> */}
              <FontAwesomeIcon icon={faHeart} />
            </LevelItem>
          </LevelLeft>
        </Level>
        {
          props.comment.comments &&
          props.comment.comments.length > 0 &&
          props.comment.comments.map((c, i) => {
            return <Comment comment={c} key={i} />
          })
        }
        {/* <MediaRight><Delete /></MediaRight> */}
      </MediaContent>
    </Media>
  )
}

export default Comment;
