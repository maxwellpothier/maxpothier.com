import React from 'react';
import ipsum from '../assets/ipsum';
import '../styles/Post.css';
import dateformat from 'dateformat';

const tester = {
  artist: "Nine Inch Nails",
  title: "Pretty Hate Machine",
  url: "https://i.scdn.co/image/ab67616d00001e029764c0993e45db213f0e359f"
}

const Post = (/*{ artist, title, url }*/) => {
  const { artist, title, url } = tester;
  document.title = title;

  let now = new Date();

  return (
    <div className="post-container">

      <div className="left-side-box">
        <div className="arrow"></div>
        <div className="cover-rating-container">
          <div className="cover-art">
            <img src={url} alt={title} height="300" width="300" />
          </div>
          <div className="rating">
            <h1>8.4</h1>
          </div>
        </div>
      </div>

      <div className="right-side-box">

        <div className="post-header">

          <div className="post-title">
            {title}
          </div>

          <div className="post-artist">
            {artist}
          </div>

          <div className="post-time">
            {dateformat(now, 'mmmm dS, yyyy')}
          </div>

        </div>

        <div className="post-content">
          {ipsum}
        </div>

      </div>

    </div>
  );
};

export default Post;