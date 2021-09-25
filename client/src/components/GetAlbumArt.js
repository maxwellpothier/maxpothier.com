import React from "react";
import albumArt from 'album-art';

class GetAlbumArt extends React.Component {
  state = { url: "" }

  componentDidMount() {
    console.log(this.props.artist);
    albumArt(`${this.props.artist}`, { album: `${this.props.album}`, size: 'medium' }, (err, res) => {
      console.log(res)
    });
    this.setState({ url: this.props.artist })
  }

  render() {
    return (
      <img
        src={this.state.url}
        alt={this.props.album}
        height="250"
        width="250"
      />
    );
  }
}

export default GetAlbumArt;