import albumArt from 'album-art';
import React from 'react';
import { Link } from 'react-router-dom';
import albums from '../assets/albums';
import "../styles/CreatePost.css";

class CreatePost extends React.Component {
  state = { albumName: "Insert Title Here", artistName: "Insert Artist Here", coverURL: '' };

  getCoverURL = () => {
    albumArt(`${this.state.artistName}`, { album: `${this.state.albumName}`, size: 'medium' }, (err, res) => {
      this.setState({ coverURL: res })
    });
  };

  submitPost = () => {
    albums.unshift({
      id: 305,
      artist: this.state.artistName,
      title: this.state.albumName,
      url: this.state.coverURL
    });
  };

  displayArt() {
    if (this.state.coverURL !== "" && this.state.albumName !== "Insert Title Here"
      && this.state.albumName !== "" && this.state.artistName !== "Insert Artist Here"
      && this.state.artistName !== "") {
      return (
        <img
          src={this.state.coverURL}
          alt="unknown"
          height="250"
          width="250"
        />
      );
    }
    else {
      return (
        <img
          src="https://lh3.googleusercontent.com/proxy/1PZa6P9abldiqOj9oWurLknKzFJbyQiaRr7dyLUPHD2lpxKeBnnKabBeRRHcwjkaA8sGvB2qbIKMNcJlIS1XWookG29CLcs"
          alt={this.state.albumName}
          height="250"
          width="250"
        />
      );
    }


  };

  render() {
    return (
      <div className="post-container">
        <div className="left-side-box">
          <div className="arrow"></div>
          <div className="cover-rating-container">
            <div className="cover-art">
              {this.displayArt()}
            </div>
            <div className="rating">
              <input
                className=" rating add-rating"
                type="text"
                placeholder="8.4"
              />
            </div>
          </div>
        </div>

        <div className="right-side-box">

          <div className="post-header">

            <div className="post-title">
              <input
                onClick={(e) => this.setState({ albumName: "" })}
                className="post-title add-title-artist"
                type="text"
                value={this.state.albumName}
                placeholder={this.state.albumName}
                onChange={(e) => this.setState({ albumName: e.target.value })}
              />
            </div>

            <div className="post-artist">
              <input
                onClick={(e) => this.setState({ artistName: "" })}
                className="post-artist add-title-artist"
                type="text"
                value={this.state.artistName}
                placeholder={this.state.artistName}
                onChange={(e) => this.setState({ artistName: e.target.value })}
              />
            </div>
          </div>

          <div className="newpost-text-area">
            <textarea
              className="newpost-content"
              type="text"
              placeholder="What opinions do you have today..."
              onClick={this.getCoverURL}
            ></textarea>
            <div className="publish-button-area">
              <button onClick={this.submitPost} className="publish-button">
                Post
              </button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default CreatePost;