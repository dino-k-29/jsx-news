import React from 'react';
import PropTypes from 'prop-types';
import PostMetaInfo from './PostMetaInfo'
import PostTitle from './PostTitle'

const styles = {
  postsList: {
    listStyle: 'none'
  },
  post: {
    margin: '20px 0'
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default function PostsList({ posts }) {
  return (
    <ul style={styles.postsList}>{posts.map(post => (
      <li style={styles.post} key={post.id}>
        <PostTitle
          title={post.title}
          id={post.id}
          url={post.url}
        />
        <PostMetaInfo post={post} />
      </li>
    ))}</ul>
  )
}
