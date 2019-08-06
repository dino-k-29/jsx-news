import React from 'react';
import PostsList from './PostsList'
import { fetchMainPosts } from './utils/api';

class App extends React.Component {
  state = {
    posts: null
  }

  componentDidMount () {
    fetchMainPosts('top')
      .then(posts => this.setState({posts: posts}))
  }

  render () {
    const { posts } = this.state;

    return (
      <div className="container">
        {posts ? <PostsList posts={posts} /> : 'Loading...'}
      </div>
    );
  }
}

export default App;
