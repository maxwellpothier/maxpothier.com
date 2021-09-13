import React from 'react';
import '../styles/Post.css';

const tester = {
  artist: "Nine Inch Nails",
  title: "Pretty Hate Machine",
  url: "https://i.scdn.co/image/ab67616d00001e029764c0993e45db213f0e359f"
}

const Post = (/*{ artist, title, url }*/) => {
  const { artist, title, url } = tester;
  document.title = title;

  return (
    <div className="post-container">

      <div className="left-side-box">
        <div className="cover-rating-container">
          <div className="cover-art">
            <img src={url} alt={title} height="250" width="250" />
          </div>
          <div className="rating">

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

          </div>

        </div>

      </div>

      <div className="post-content">

      </div>

    </div>
  );
};

export default Post;