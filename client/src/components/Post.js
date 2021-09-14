import React, { useState, useEffect } from 'react';
import ipsum from '../assets/ipsum';
import albums from '../assets/albums';
import '../styles/Post.css';
import dateformat from 'dateformat';

const Post = ({ match }) => {
  const [albumInfo, setAlbumInfo] = useState({});
  const albumID = match.params.id;

  useEffect(() => {
    populateState();
  });

  const populateState = () => {
    for (let i = 0; i < albums.length; i++) {
      if (albums[i].id === albumID) {
        setAlbumInfo(albums[i]);
      }
    }
  }
  document.title = albumInfo.title
  let now = new Date();

  return (
    <div className="post-container">

      <div className="left-side-box">
        <div className="arrow"></div>
        <div className="cover-rating-container">
          <div className="cover-art">
            <img src={albumInfo.url} alt={albumInfo.id} height="300" width="300" />
          </div>
          <div className="rating">
            <h1>8.4</h1>
          </div>
        </div>
      </div>

      <div className="right-side-box">

        <div className="post-header">

          <div className="post-title">
            {albumInfo.title}
          </div>

          <div className="post-artist">
            {albumInfo.artist}
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