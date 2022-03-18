/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Playlist.css";
import Track from "../Track/Track";

function Playlist(props) {
  // Handle( maintence) input value and pass event into updatePlaylistName function in App.js
  const handleNameChange = (e) => {
    props.onNameChange(e.target.value);
  };

  return (
    <div className="Playlist">
      <input
        placeholder="New Playlist"
        onChange={handleNameChange}
        value={props.playlistName}
      />{" "}
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />{" "}
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY{" "}
      </button>{" "}
    </div>
  );
}

export default Playlist;
