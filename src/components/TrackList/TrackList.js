import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
    // recieve searchResults as tracks from searchResults.js and map with Track component

    return ( <
        div className = "TrackList" > {
            props.tracks.map((track) => {
                return ( <
                    Track track = { track }
                    key = { track.id }
                    onAdd = { props.onAdd }
                    onRemove = { props.onRemove }
                    isRemoval = { props.isRemoval }
                    />
                );
            })
        } <
        /div>
    );
}

export default TrackList;