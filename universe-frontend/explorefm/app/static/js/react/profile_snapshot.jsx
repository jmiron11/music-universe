import React from 'react'
import axios from 'axios';

import LoveButton from './love_button.jsx';

export default class ProfileSnapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                  profile_snapshot: {}
                 };
                }

  componentDidMount(){
      var self = this
      var request = '/user/' + profile_modal_user + '/profile_snapshot/'
      axios.get(request).then(function(response) {
        self.state.profile_snapshot = response.data
        self.setState(self.state)
      })
  }

  render() {
    var profile_path = profile_art_endpoint + this.state.profile_snapshot['img_id'] + '.jpg'
    

    if (!('top_artist' in this.state.profile_snapshot)) {
      return (
        <div className="profile-snapshot-modal-space">
          <h1> Loading... </h1>
        </div>
      )
    }

    var artist_img = artist_art_endpoint + this.state.profile_snapshot['top_artist'][0]['img_id'] + '-medium.jpg'
    var album_img = album_art_endpoint + this.state.profile_snapshot['top_album'][0]['img_id'] + '-medium.jpg'
    var track_img = album_art_endpoint + this.state.profile_snapshot['top_track'][0]['img_id'] + '-medium.jpg'

    var top_artist = this.state.profile_snapshot['top_artist'][0]
    var top_album = this.state.profile_snapshot['top_album'][0]
    var top_track = this.state.profile_snapshot['top_track'][0]

    var recent_listens_state = this.state.profile_snapshot['recent_tracks']

    const album_love_button_data = {
      album_id: top_album['album_id'],
      is_current_user: false,
      is_loved: top_album['is_loved']
    }

    const artist_love_button_data = {
      artist_id: top_artist['artist_id'],
      is_current_user: false,
      is_loved: top_artist['is_loved']
    }

    const track_love_button_data = {
      track_id: top_track['track_id'],
      is_current_user: false,
      is_loved: top_track['is_loved']
    }

    var recent_listens = []
    for (let i = 0; i < recent_listens_state.length; ++i) {
      var k = "listen-snapshot-" + i.toString();
      var className;
      if (i % 2 == 0) {
        className = "listen-entry"
      } else {
        className = "listen-entry-shaded"
      }

      const love_button_data = {
        track_id: recent_listens_state[i]['track_id'],
        is_current_user: false,
        is_loved: recent_listens_state[i]['is_loved']
      }

      var img_path = album_art_endpoint + recent_listens_state[i]['img_id'] + '-small.jpg'
      recent_listens.push(
        <div key={ k }>
          <div className={className}>
            <img className="listen-entry-art" src={ img_path }/>
            <div className="listen-entry-track"><h6>{ recent_listens_state[i]['artist'] } - { recent_listens_state[i]['track'] }</h6></div>
              <LoveButton {...love_button_data}/>
              <div className="listen-entry-time"><h6>{ recent_listens_state[i]['time'] }</h6></div>
          </div>
        </div>
        )
    }

    return (
      <div className="profile-snapshot-modal-space">
        <div className="profile-snapshot-column">
          <div className="profile-snapshot-row-underlined">
            <img className="profile-snapshot-img" src={ profile_path }/>
            <div className="profile-snapshot-username">
              <h1>{ profile_modal_user }</h1>
            </div>
          </div>
          <div className="profile-snapshot-row">
            <div className="profile-snapshot-top-music">
              <h1>Top Track (1m)</h1>
              <div className="album-entry-profile-snapshot">
                <img className="album-entry-art-profile-snapshot" src={ track_img }/>
                <div className="album-entry-art-gradient"></div>
                <div className="album-entry-layer-wrapper">
                  <LoveButton {...track_love_button_data}/>
                  <div className="album-entry-text-group">
                    <div className="album-entry-text"><h5>{ top_track['track'] }</h5></div>
                    <div className="album-entry-text"><h5>{ top_track['album'] }</h5></div>
                    <div className="album-entry-text"><h6>{ top_track['artist'] }</h6></div>
                    <div className="album-entry-text"><h6>{ top_track['count'] } listens</h6></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-snapshot-top-music">
              <h1>Top Album (1m)</h1>
              <div className="album-entry-profile-snapshot">
                <img className="album-entry-art-profile-snapshot" src={ album_img }/>
                <div className="album-entry-art-gradient"></div>
                <div className="album-entry-layer-wrapper">
                  <LoveButton {...album_love_button_data}/>
                  <div className="album-entry-text-group">
                    <div className="album-entry-text"><h5>{ top_album['album'] }</h5></div>
                    <div className="album-entry-text"><h6>{ top_album['artist'] }</h6></div>
                    <div className="album-entry-text"><h6>{ top_album['count'] } listens</h6></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-snapshot-top-music">
              <h1>Top Artist (1m)</h1>
              <div className="album-entry-profile-snapshot">
                <img className="album-entry-art-profile-snapshot" src={ artist_img }/>
                <div className="album-entry-art-gradient"></div>
                <div className="album-entry-layer-wrapper">
                  <LoveButton {...artist_love_button_data}/>
                  <div className="album-entry-text-group">
                    <div className="album-entry-text"><h5>{ top_artist['artist'] }</h5></div>
                    <div className="album-entry-text"><h6>{ top_artist['count'] } listens</h6></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-snapshot-row">
          <div className="profile-snapshot-column">
            <div className="recent-tracks-profile-snapshot">
              <h1> Recent Listens </h1>
              { recent_listens }
            </div>
          </div>
        </div>
        <div className="profile-snapshot-row">
        </div>
      </div>
    )
  }
}