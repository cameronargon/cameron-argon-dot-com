import React from "react";
import "./Chopped.css";

const choccdThings = {
vol1: <iframe
            width="50%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1090216633%3Fsecret_token%3Ds-z9jDo3OsNjx&color=%237c4c9c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>,
BM4: <iframe
            width="50%"
            height="315"
            src="https://www.youtube.com/embed/Og5opk8rFtU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>,

}

export class Chopped extends React.Component {
  render() {
    return (
      <div className="chop" id="chopLocation" name="chopLocation">
        {/* <h1 class="passage">death before dubstep 2</h1> */}
        <h1>Chocc'd & Screwed</h1>
        <div className="playerNew">
          {choccdThings.vol1}
          <a href="https://bigchocolate.bandcamp.com/album/choccd-screwed-vol-1-2" target="_blank">~*Download on Bandcamp*~</a>
        </div>
        <div class="header">
          <p class="passage">choccd vol 1 (2018)</p>
        </div>

        <div class="youtube">
          {choccdThings.BM4}
        </div>
        
      </div>
    );
  }
}

export default Chopped;
