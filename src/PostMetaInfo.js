import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function formatDate (timestamp) {
  return new Date(timestamp * 1000)
    .toLocaleDateString("en-US", {
      hour: 'numeric' ,
      minute: 'numeric'
    })
}

PostMetaInfo.propTypes = {
  post: PropTypes.object.isRequired
}

export default function PostMetaInfo ({ post }) {
  const { id, by, time, descendants } = post;
  return (
    <div className="meta-info-light">
      <span>by {by} on {formatDate(time)} </span>
      {descendants || descendants === 0
       ? <span>with <Link to={`/post?id=${id}`}>
           {descendants} comments
         </Link></span>
       : null}
    </div>
  )
}
