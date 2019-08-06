import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  postsList: {
    listStyle: 'none'
  },
  post: {
    margin: '20px 0'
  }
}

function formatDate (timestamp) {
  return new Date(timestamp * 1000)
    .toLocaleDateString("en-US", {
      hour: 'numeric' ,
      minute: 'numeric'
    })
}

Post.propTypes = {
  data: PropTypes.object.isRequired
}

function Post ({ data }) {
  const { by, time, title, url, descendants } = data;
  return (
    <div>
      <a
        className="link"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        {title}
      </a>
      <div className="meta-info-light">
        {`by ${by} on ${formatDate(time)} with ${descendants} comments`}
      </div>
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default function PostsList({ posts }) {
  return (
    <ul style={styles.postsList}>{posts.map(post => (
      <li style={styles.post} key={post.id}>
        <Post data={post} />
      </li>
    ))}</ul>
  )
}
