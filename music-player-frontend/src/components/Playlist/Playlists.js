// src/components/Playlist/Playlists.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import MusicPlayer from '../Music/MusicPlayer'; // Import the MusicPlayer component

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [currentSong, setCurrentSong] = useState(null); // State to manage the currently playing song

  useEffect(() => {
    const fetchPlaylists = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/playlists', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlaylists(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchPlaylists();
  }, []);

  // Handle play song button click
  const handlePlaySong = (song) => {
    setCurrentSong(song); // Set the song to be played
  };

  return (
    <div>
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist._id}>
            <h3>{playlist.name}</h3>
            <ul>
              {playlist.songs.map((song, index) => (
                <li key={index}>
                  {song.title} by {song.artist} - 
                  {/* Replace href with button and use handlePlaySong to set the current song */}
                  <button onClick={() => handlePlaySong(song)}>Play</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Render the MusicPlayer only if a song is selected */}
      {currentSong && <MusicPlayer song={currentSong} />}
    </div>
  );
};

export default Playlists;
