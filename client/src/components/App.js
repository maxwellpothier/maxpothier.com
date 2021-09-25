import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Blog from './Blog';
import About from './About';
import Admin from './Admin';
import Post from './Post';
import CreatePost from './CreatePost';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/maxpothier/write/123105" component={CreatePost} />
          <Route path="/blog/:id" component={Post} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;