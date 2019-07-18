import React from 'react'
import axios from 'axios';

// MusicHighlight {
//   "Type": <One of "Track", "Album", "Artist">
//   "Track": <TrackName or omitted>
//   "Album": <AlbumName or omitted> 
//   "Artist": <ArtistName or omitted>
//  }
export default class MusicHighlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    type: this.props.type,
                    music_id: this.props.music_id,
                    note: this.props.note,
                    music_data: {}
                 };
  }

  componentDidMount(){
    var request = "/query/music?type=" + this.state.type
    request += "&id=" + this.state.music_id

    var self = this
    axios.get(request).then(function(response) {
      self.state.music_data = response.data
      self.setState(self.state)
    })
  }

  render() {

    var note_div = "";
    if (this.state.note != "") {
      note_div = (
        <div className="music-highlight-note">
          <h6 className="music-highlight-note-text">{ this.state.note }</h6>
        </div>
      )
    }
    if(this.state.type == "Artist") {
      var artist_img = artist_art_endpoint + this.state.music_data['img_id'] + '-medium.jpg'
      return (
        <div className="music-highlight">
          <img className="music-highlight-img" src={artist_img} />
          <div className="music-highlight-gradient"></div>
          <div className="music-highlight-text-layer-wrapper">
            <div className="music-highlight-text-group">
              <h6 className="music-highlight-text">{ this.state.music_data['artist'] }</h6>
            </div>
          </div>
          { note_div }
        </div>
      )
    } else if (this.state.type == "Album") {
      var album_img = album_art_endpoint + this.state.music_data['img_id'] + '-medium.jpg'
      return (
        <div className="music-highlight">
          <img className="music-highlight-img" src={album_img} />
          <div className="music-highlight-gradient"></div>
          <div className="music-highlight-text-layer-wrapper">
            <div className="music-highlight-text-group">
              <h6 className="music-highlight-text">{ this.state.music_data['album'] }</h6>
              <h6 className="music-highlight-text-small">{ this.state.music_data['artist'] }</h6>
            </div>
          </div>
          { note_div }
        </div>
      )
    } else if (this.state.type == "Track") {
      var album_img = album_art_endpoint + this.state.music_data['img_id'] + '-medium.jpg'
      return (
        <div className="music-highlight">
          <img className="music-highlight-img" src={album_img} />
          <div className="music-highlight-gradient"></div>
          <div className="music-highlight-text-layer-wrapper">
            <div className="music-highlight-text-group">
              <h6 className="music-highlight-text">{ this.state.music_data['track'] }</h6>
              <h6 className="music-highlight-text-small">{ this.state.music_data['album'] }</h6>
              <h6 className="music-highlight-text-small">{ this.state.music_data['artist'] }</h6>
            </div>
            { note_div }
          </div>
        </div>
      )
    } else {
      return ""
    }
  }
}