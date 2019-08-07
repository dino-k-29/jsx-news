import React from 'react';
import PostsList from './PostsList'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { fetchMainPosts } from './utils/api';

class Posts extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired
  }

  state = {
    posts: null
  }

  componentDidMount () {
    fetchMainPosts(this.props.type)
      .then(posts => this.setState({posts: posts}))
  }

  render () {
    const { posts } = this.state;

    return (
      <div>
        {posts ? <PostsList posts={posts} /> : 'Loading...'}
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    const activeStyle = {
      color: 'rgb(187, 46, 31)'
    }

    return (
      <Router>
        <div className="container">
          <nav className="row space-between">
            <ul className="row nav">
              <li>
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  exact
                  to="/">
                  Top
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/new">
                  New
                </NavLink>
              </li>
            </ul>
          </nav>

          <Route exact path="/" render={() => <Posts type='top' />} />
          <Route path="/new" render={() => <Posts type='new' />} />
        </div>
      </Router>
    );
  }
}

export default App;
