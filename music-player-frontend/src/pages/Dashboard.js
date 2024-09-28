// src/pages/Dashboard.js
import CreatePlaylist from '../components/Playlist/CreatePlaylist';
import Playlists from '../components/Playlist/Playlists';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CreatePlaylist />
      <Playlists />
    </div>
  );
};

export default Dashboard;
