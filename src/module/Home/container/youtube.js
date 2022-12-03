import React, { Component } from "react";
import YouTube from "react-youtube";
import 'bootstrap/dist/css/bootstrap.min.css';

class youtube extends Component {

    videoonReady (event) {
      event.target.playVideoAt(50)
      console.log(event.target)
    }

    videoOnPlay(event){
        const player = event.target
        console.log(player.target.getCurrentTime())
    }

    videoStateChange(event){
    console.log(event)
    }

  render() {
    const opts = {
      height: "350",
      width: "500",
    };

    const {videoId} = this.props

    return (
        <div style={{fontSize:"25px", color:"light-brown",textAlign:"center", 
        background: "#cc9900", fontFamily:"Lato", fontWeight:"bold"
     ,}}> What is  Wildlife protection Program?
           <br></br><br></br>
      <YouTube videoId={videoId} opts={opts} onReady={this.videoonReady} 
      onPlay={this.videoOnPlay} onStateChange={this.videoStateChange}/>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default youtube