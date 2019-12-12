import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'
import { Media, MediaLeft, MediaContent, Image, Level, LevelLeft, LevelItem, Content } from 'bloomer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { CommentForm } from '../index';
import { ApiContext } from '../../services/api';

const SubComment = (props) => {

  let avatar = props.comment.user.avatar || '/user.jpg'
  const comment_time = moment.unix(props.comment.created_at / 1000).fromNow();

  return (
    <Media>
      <MediaLeft>
        <Image isSize='64x64' src={avatar} />
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>{props.comment.user.name}</strong> <small>@{props.comment.user.username}</small> <small>{comment_time}</small>
            <br />
            {props.comment.message}
          </p>
        </Content>
      </MediaContent>
    </Media>
  )
}

const Comment = (props) => {
  const Api = useContext(ApiContext);
  const Comment = Api.getCommentModel()

  const [isActive, setIsActive] = useState(false)
  const [comments, setComments] = useState([])

  let avatar = props.comment.user.avatar || '/user.jpg'
  const comment_time = moment.unix(props.comment.created_at / 1000).fromNow();

  useEffect(() => {
    setComments(props.comment.comments)
  }, [props.comment])

  const addComment = async (comment) => {
    const _id = props.comment._id;
    const type = 'comment';
    await Comment.add({ typeId: _id, type, comment })
      .catch(err => console.log(err))
    setIsActive(false);
    getComments()
  }

  const getComments = async () => {
    const { comments } = await Comment.index({ typeId: props.comment._id, type: 'comment' })
    setComments(comments);
  }

  const cancelComment = () => {
    setIsActive(false);
  }

  const showCommentBox = (e) => {
    e.preventDefault();
    setIsActive(true);
  }

  return (
    <Media>
      <MediaLeft>
        <Image isSize='64x64' src={avatar} />
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
              <FontAwesomeIcon icon={faReply} onClick={showCommentBox} />
            </LevelItem>
          </LevelLeft>
        </Level>
        {
          comments.length > 0 &&
          comments.map((c, i) => {
            return <SubComment comment={c} key={i} />
          })
        }
        {
          isActive &&
          <CommentForm _id={props.comment._id} type="comment" addComment={addComment} cancel={cancelComment} />
        }
      </MediaContent>
    </Media>
  )
}

export default Comment;
