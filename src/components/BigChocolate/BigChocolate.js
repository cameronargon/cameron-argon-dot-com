import React from "react";
import "./BigChocolate.css";

const bigCThings = {
  player: <iframe
            width="50%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1090828879%3Fsecret_token%3Ds-ysantKDtry6&color=%237c4c9c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>,
}

export class BigChocolate extends React.Component {
  render() {
    return (
      <div className="bc" id="bcLocation" name="bcLocation">
        {/* <h1 class="passage">death before dubstep 2</h1> */}
        <h1>Big Chocolate</h1>
        <div className="playerNew">
          {bigCThings.player}
        </div>

        <p class="passage">
          <a target="_blank" href="https://bigchocolate.bandcamp.com/">
            Records from the past... 
            {/* this is a test change for git */}
          </a>
        </p>
      </div>
    );
  }
}

export default BigChocolate;
