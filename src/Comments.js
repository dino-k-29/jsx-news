import React from 'react'
import PropTypes from 'prop-types'
import { fetchComments } from './utils/api.js'

function Comment ({ comment }) {
  return (
    <div className="comment">
      <p dangerouslySetInnerHTML={{__html: comment.text}} />
    </div>
  )
}

export default class Comments extends React.Component {
  static propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number).isRequired
  }

  state = {
    comments: null
  }

  componentDidMount () {
    const { ids } = this.props

    fetchComments(ids)
      .then(comments => this.setState({comments: comments}))
  }

  render () {
    const { comments } = this.state

    return (
      <React.Fragment>
        {comments
         ? comments.map(comment => <Comment key={comment.id} comment={comment}/>)
         : <p>Loading Comments...</p>}
      </React.Fragment>
    )
  }
}
