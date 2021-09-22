import React from 'react';
import dateformat from 'dateformat';
import ipsum from '../assets/ipsum';

const CreatePost = () => {
  let now = new Date();

  return (
    <div className="post-container">
      <div className="left-side-box">
        <div className="arrow"></div>
        <div className="cover-rating-container">
          <div className="cover-art">
            <img src="https://static.wikia.nocookie.net/animated_inanimate_battle/images/a/a3/Image-not-found.png/revision/latest?cb=20200723230444" alt="not found" height="300" width="300" />
          </div>
          <div className="rating">
            <h1>8.4</h1>
          </div>
        </div>
      </div>

      <div className="right-side-box">

        <div className="post-header">

          <div className="post-title">
            Insert Title Here
          </div>

          <div className="post-artist">
            Insert Artist Here
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

export default CreatePost;