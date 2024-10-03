// src/services/player.js
const BASE_URL = process.env.REACT_APP_API_URL;

export const playSong = async (songId) => {
  const response = await fetch(`${BASE_URL}/api/songs/${songId}/play`, {
    method: 'POST',
  });
  return response.json();
};

export const pauseSong = async (songId) => {
  const response = await fetch(`${BASE_URL}/api/songs/${songId}/pause`, {
    method: 'POST',
  });
  return response.json();
};
