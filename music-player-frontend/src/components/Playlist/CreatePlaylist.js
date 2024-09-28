// src/components/Playlist/CreatePlaylist.js
import { useState } from 'react';
import axios from 'axios';
import SearchMusic from '../Music/SearchMusic';

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [songs, setSongs] = useState([]);

  const handleSongSelect = (song) => {
    const newSong = {
      title: song.title,
      artist: song.artist.name,
      url: song.link,
    };
    setSongs([...songs, newSong]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'http://localhost:5000/playlists',
        { name: playlistName, songs },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Playlist created successfully!');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Create Playlist</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />

        <h3>Selected Songs</h3>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              {song.title} by {song.artist}
            </li>
          ))}
        </ul>

        <SearchMusic onSongSelect={handleSongSelect} />

        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
