import React from 'react';
import { Link } from 'react-router-dom';
// import albumArt from 'album-art';

class AlbumCard extends React.Component {
  state = { artURL: null, linkName: '' };

  render() {
    return (
      <Link to={`/blog/${this.props.album.id}`} className="link-container">
        <div className="album-card">
          <div className="grid-art">
            <div className="art-container">
              <img
                src={this.props.album.url}
                alt={this.props.album.title}
                height="250"
                width="250"
              />
            </div>
          </div>
          <div className="description">
            <div className="album-title">
              {this.props.album.title}
            </div>
            <div className="artist-name" style={{ color: 'gray' }}>
              {this.props.album.artist}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default AlbumCard;