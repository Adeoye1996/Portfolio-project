// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { getPlaylists } from '../services/playlist';  // Import the playlist service

const Home = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const token = 'your-auth-token';  // Replace with real token or auth logic
        const result = await getPlaylists(token);
        setPlaylists(result.playlists);  // Assuming the result contains playlists array
      } catch (error) {
        console.error('Failed to fetch playlists', error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h1>Your Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist._id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
