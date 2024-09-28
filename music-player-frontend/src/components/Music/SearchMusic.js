// src/components/Music/SearchMusic.js
import { useState } from 'react';
import axios from 'axios';

const SearchMusic = ({ onSongSelect }) => {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.deezer.com/search?q=${query}`);
      setSongs(response.data.data);
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <div>
      <h2>Search for Songs</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for music..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} by {song.artist.name} - <button onClick={() => onSongSelect(song)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMusic;
