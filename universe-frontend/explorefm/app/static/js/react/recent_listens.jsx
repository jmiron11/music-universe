import React from 'react'
import axios from 'axios';

import LoveButton from './love_button.jsx';

export default class RecentListens extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    top: [],
                    count: this.props.count
                 };
  }

  updateRecentListenData() {
    var newTop = []
    var self = this
    var request = '/user/' + user + '/recent_listens?count=' + this.state.count.toString()
    axios.get(request).then(function(response) {
      var l = response['data']
      for (let i = 0; i < l.length; ++i) {
        var k = "listen-" + i.toString();
        var className;
        if (i % 2 == 0) {
          className = "listen-entry"
        } else {
          className = "listen-entry-shaded"
        }

        const love_button_data = {
          track_id: l[i]['track_id'],
          is_current_user: current_user == user,
          is_loved: l[i]['is_loved']
        }

        var img_path = album_art_endpoint + l[i]['img_id'] + '-small.jpg'
        newTop.push(
          <div key={ k }>
            <div className={className}>
              <img className="listen-entry-art" src={ img_path }/>
              <div className="listen-entry-track"><h6>{ l[i]['artist'] } - { l[i]['track'] }</h6></div>
                <LoveButton {...love_button_data}/>
                <div className="listen-entry-time"><h6>{ l[i]['time'] }</h6></div>
            </div>
          </div>
          )
      }
      self.setState({ 
        top: newTop
      })
    })
  }

  componentDidMount(){
    this.updateRecentListenData()
  }

  render() {
    return (
      <div className="top-track-area">
        <div className="profile-section-header">
            <h6>Recent Listens</h6>
        </div>
        <div className="top-track">
          { this.state.top }
        </div>
      </div>
    );
  }
}