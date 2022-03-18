import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";
//import Track from "../Playlist/Playlist";

function TrackList(props) {
  return (
    <div className="TrackList">
      {" "}
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            isRemoval={props.isRemoval}
          />
        );
      })}{" "}
    </div>
  );
}

export default TrackList;
