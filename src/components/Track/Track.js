import React from "react";
import "./Track.css";

function Track(props) {
  const addTrack = () => {
    props.onAdd(props.track);
  };

  const removeTrack = () => {
    props.onRemove(props.track);
  };

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3> {props.track.title} </h3>{" "}
        <p>
          {" "}
          {props.track.artist} | {props.track.album}{" "}
        </p>{" "}
      </div>{" "}
      <a
        className="Track-action"
        onClick={() => props.handleTrackAction(props.track)}
      >
        {" "}
        {props.trackActionCharacter}{" "}
      </a>{" "}
    </div>
  );
}

export default Track;
