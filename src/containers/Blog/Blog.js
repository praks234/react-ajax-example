import React, { Component } from 'react'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';

import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  }
  render () {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><NavLink to="/posts" exact activeClassName="active">Posts</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route path="/new-post" exact render={() => <h1>Home2</h1>} />*/}
        <Switch>
          {/*this is a guard below*/}
          {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          {/*To catch any unknown route remove path*/}
          <Route render={() => <h1> Not Found </h1>}/>
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>

      </div>
    )
  }
}

export default Blog