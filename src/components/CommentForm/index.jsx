import React, { useContext } from 'react'
import useForm from 'react-hook-form'
import { Media, MediaLeft, MediaContent, Content, Image } from 'bloomer'
import { AuthContext } from '../../services/auth';
import { textareaClasses } from '../../utils/formClasses'


const CommentForm = (props) => {
  let Auth = useContext(AuthContext);
  let user = Auth.getCurrentUser();

  let avatar = user.avatar || '/user.jpg'

  const { register, handleSubmit, errors, reset } = useForm()

  const addComment = (input) => {
    props.addComment(input.comment, props.type)
    clear();
  }

  const cancelComment = () => {
    clear();
    props.cancel();
  }

  const clear = () => {
    reset({
      'comment': '',
    })
  }

  return (
    <Media>
      <MediaLeft>
        <Image isSize='64x64' src={avatar} />
      </MediaLeft>
      <MediaContent>
        <Content>
          <div className="field">
            <p className="control">
              <textarea
                className={textareaClasses('comment', errors)}
                name="comment"
                placeholder="Add a comment..."
                ref={register({
                  required: true
                })}
              >

              </textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-danger is-small" onClick={cancelComment}>Cancel comment</button>&nbsp;&nbsp;
              <button className="button is-small" onClick={handleSubmit(addComment)}>Post comment</button>
            </p>
          </div>
        </Content>
      </MediaContent>
      {/* <MediaRight><Delete /></MediaRight> */}
    </Media>
  )
}

export default CommentForm;
