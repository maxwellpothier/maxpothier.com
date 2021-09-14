import React from 'react'
import '../styles/Blog.css';
import albums from '../assets/albums';
import AlbumCard from './AlbumCard';

const Blog = () => {
  document.title = "Blog";

  const renderArtwork = albums.map((album) => {
    return (
      <div className="grid-item" key={album.title}>
        <AlbumCard album={album} />
      </div>
    );
  });

  return (
    <div>
      <div className="grid-container">
        {renderArtwork}
      </div>
    </div>
  );
};

export default Blog;