import React from 'react'
import PostTitle from './PostTitle'
import PostMetaInfo from './PostMetaInfo'
import Comments from './Comments'
import { fetchItem } from './utils/api.js'
import queryString from 'query-string'

export default class Post extends React.Component {
  state = {
    post: null
  }

  componentDidMount () {
    const { id } =
          queryString.parse(this.props.location.search)

    fetchItem(id)
      .then(post => this.setState({post: post}))
  }

  render () {
    const { post } = this.state

    return (
      <div>
        {post
         ? <React.Fragment>
             <h1 className="header">
               <PostTitle
                 title={post.title}
                 id={post.id}
                 url={post.url}/>
             </h1>
             <PostMetaInfo post={post} />
             {post.kids
              ? <Comments ids={post.kids}/>
              : null}
           </React.Fragment>
         : 'Loading...'}
      </div>
    )
  }
}
