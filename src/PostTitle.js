import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string
}

export default function PostTitle ({ title, id, url}) {
  return url
    ? <a className='link' href={url}>{title}</a>
    : <Link className='link' to={`/post?id=${id}`}>{title}</Link>
}
