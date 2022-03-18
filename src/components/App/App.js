import React, { useState, useEffect } from "react";
import "./App.css";
import Spotify from "../../utils/Spotify";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchedTracks, setSearchedTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [spotifyToken, setSpotifyToken] = useState(null);

  useEffect(() => {
    const spotifyTokenFromUrlFragment = window.location.hash
      .split("&")[0]
      .substring(14);
    setSpotifyToken(spotifyTokenFromUrlFragment);
  }, []);

  const addTrack = (track) => {
    let tracks = [...playlistTracks];
    // check if it had => return function
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    let results = [...searchResults];
    results = results.filter((currentTrack) => currentTrack.id !== track.id);
    setPlaylistTracks(tracks);
    setSearchResults(results);
  };

  const removeTrack = (track) => {
    let tracks = [...playlistTracks];
    // filter with not same id condition
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    setPlaylistTracks(tracks);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      // Reset playlistName and playlistTracks after save playlist
      setPlaylistName("");
      setPlaylistTracks([]);
    });
  };

  const search = (term) => {
    Spotify.search(term).then((searchResults) => {
      setSearchResults(searchResults);
    });
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
