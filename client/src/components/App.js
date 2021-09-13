import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Blog from './Blog';
import About from './About';
import Admin from './Admin';
import Post from './Post';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Blog} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          <Route path="/blog/post" component={Post} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;