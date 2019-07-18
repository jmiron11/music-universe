import React from 'react'
import axios from 'axios';

export default class LoveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    track_id: -1,
                    album_id: -1,
                    artist_id: -1,
                    is_loved: false,
                    is_current_user: true,
                    is_hover: false,          
                 };

    if ('track_id' in this.props) {
      this.state.track_id = this.props.track_id
    } else if ('album_id' in this.props) {
      this.state.album_id = this.props.album_id
    } else if ('artist_id' in this.props) {
      this.state.artist_id = this.props.artist_id
    }

    this.state.is_loved = this.props.is_loved
    this.state.is_current_user = this.props.is_current_user
  }

  iconClicked = (event) => {
    if (!this.state.is_current_user) {
      return // Do nothing, icon is static.
    }

    this.state.is_loved = !this.state.is_loved
    this.state.is_hover = false
    this.setState(this.state)

    var music_type = ""
    var music_id = -1
    if (this.state.track_id != -1) {
      music_type = 'track'
      music_id = this.state.track_id
    } else if (this.state.album_id != -1) {
      music_type = 'album'
      music_id = this.state.album_id
    } else if (this.artist_id != -1) {
      music_type = 'artist'
      music_id = this.state.artist_id
    }

    // Update with ep
    if (this.state.is_loved) {
      var request = '/update/love_music/' + music_type + '/' + music_id.toString()
      axios.get(request)
    } else {
      var request = '/update/unlove_music/' + music_type + '/' + music_id.toString()
      axios.get(request)
    }
  }

  onMouse = (event) => {
    this.state.is_hover = true
    this.setState(this.state)
  }

  offMouse = (event) => {
    this.state.is_hover = false
    this.setState(this.state)
  }

  render() {
    if (this.state.is_current_user) {
      if (this.state.is_loved) {
        if (!this.state.is_hover) {
          return (
            <i onMouseOver={this.onMouse} onMouseOut={this.offMouse} onClick={this.iconClicked} className="fa fa-heart fa-lg love-music-icon" style={{color: 'red'}}></i>
          )
        } else {
          return (
            <i onMouseOver={this.onMouse} onMouseOut={this.offMouse} onClick={this.iconClicked} className="fa fa-heart-o fa-lg love-music-icon" style={{color: 'black'}}></i>
          )
        }
      } else {
        if (!this.state.is_hover) {
          return (
            <i onMouseOver={this.onMouse} onMouseOut={this.offMouse} onClick={this.iconClicked} className="fa fa-heart-o fa-lg love-music-icon" style={{color: 'black'}}></i>
          )
        } else {
          return (
            <i onMouseOver={this.onMouse} onMouseOut={this.offMouse} onClick={this.iconClicked} className="fa fa-heart fa-lg love-music-icon" style={{color: 'red'}}></i>
          )
        }
      }
    } else {
      if (this.state.is_loved) {
       return (
          <i onMouseOver={this.onMouse} onMouseOut={this.offMouse} onClick={this.iconClicked} className="fa fa-heart fa-lg love-music-icon" style={{color: 'red'}}></i>
        )
      } else {
        return (
          <div></div>
        )
      }
    }
  }
}