import React from 'react';
import albumArt from 'album-art';

class AlbumCard extends React.Component {
  state = { artURL: null };

  componentDidMount() {
    this.loadAlbumCover(this.props.album.artist, this.props.album.title);
  }

  loadAlbumCover(artist, album) {
    albumArt(artist, { album: album, size: 'medium' }, (err, res) => {
      this.setState({ artURL: res });
    });
  };

  render() {
    return (
      <div>
        <div className="grid-art">
          <div className="art-container">
            <img
              src={this.state.artURL}
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
    );
  }
}

export default AlbumCard;