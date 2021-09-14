import React from 'react';
import { Link } from 'react-router-dom';
// import albumArt from 'album-art';

class AlbumCard extends React.Component {
  state = { artURL: null, linkName: '' };

  /* componentDidMount() {
    this.loadAlbumCover(this.props.album.artist, this.props.album.title);
    this.createLinkName(this.props.album.artist, this.props.album.title);
  } */

  /* loadAlbumCover(artist, album) {
    albumArt(artist, { album: album, size: 'medium' }, (err, res) => {
      if (artist === "Tame Impala") {
        console.log(res);
      }
      this.setState({ artURL: res });
    });
  } */

  /* createLinkName(artist, title) {
    const newName = artist.replace(/\s+/g, '-').toLowerCase()
      + "_" + title.replace(/\s+/g, '-').toLowerCase();
    this.setState({ linkName: newName });
  } */

  render() {
    return (
      <Link to={`/blog/${this.props.album.id}`} className="link-container">
        <div>
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