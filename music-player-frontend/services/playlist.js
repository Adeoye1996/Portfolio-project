// src/services/playlist.js
const BASE_URL = process.env.REACT_APP_API_URL;

export const createPlaylist = async (playlistData, token) => {
  const response = await fetch(`${BASE_URL}/api/playlists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(playlistData),
  });
  return response.json();
};

export const getPlaylists = async (token) => {
  const response = await fetch(`${BASE_URL}/api/playlists`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
