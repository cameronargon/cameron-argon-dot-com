import React from "react";
import "./DisfiguringTheGoddess.css";

const dtg = {
  playerNew:
     <iframe
            width="50%"
            height="450px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1088942455%3Fsecret_token%3Ds-lqxNFUETdGY&color=%237c4c9c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true'
          ></iframe>,
  playerSub:
   <iframe
            width="50%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/855951124%3Fsecret_token%3Ds-yN388Rsz12Y&color=%239c8c9c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>,
  spotify:
          <iframe src="https://open.spotify.com/embed/artist/4KNivmUcgaar8yZvjYRoqv" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,

};

export class DisfiguringTheGoddess extends React.Component {
  render() {
    return (
      <div className="dtg" id="dtgLocation" name="dtgLocation">
        <h1>Disfiguring The Goddess</h1>
        <div className="playerNew">
        {dtg.playerNew}
        {/* sub machine */}
        <h6>IntoTheTank</h6>
        {dtg.playerSub}
        </div>
        {dtg.spotify}
        <div className='merchStore'>
        <a href="https://www.shopbenchmark.com/disfiguringthegoddess/" target="_blank">
        <h2>Merch Store</h2>
        <img src="./dtg_merchMock.jpg" alt='dtg store'></img>
        </a>
        </div>
      </div>
      
      
    );
  }
}

export class DtgBio extends React.Component {
  render() {
    return;
  }
}

export default DisfiguringTheGoddess;
