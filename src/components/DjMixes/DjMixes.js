import React from "react";
import "./DjMixes.css";

export class DjMixes extends React.Component {
  render() {
    return (
      <div className="bc" id="djLocation" name="djLocation">
        <h1 className="headerDjMixes">Dj Mixes</h1>
        <div className="playerNew">
          <iframe
            width="50%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1090210204%3Fsecret_token%3Ds-6yx56wg9UhI&color=%239c6cbc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
        <div class="header">
          <p class="passage">party people party forever</p>
        </div>
      </div>
    );
  }
}

export default DjMixes;
