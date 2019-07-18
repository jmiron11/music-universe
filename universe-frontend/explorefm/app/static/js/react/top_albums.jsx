import React from 'react'
import axios from 'axios';

import LoveButton from './love_button.jsx';

export default class TopAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    timespan: "month",
                    top_albums: []
                 };
  }

  getSecondsSinceEpoch() {
    var d = new Date();
    return Math.floor(d.getTime() / 1000)
  }

  getTimeOffsetByT(t, offset) {
    return t - offset
  }

  getNewTimespanData(value) {

    // Get the timeoffsets to be used in the track requests
    var t_start;
    var t_end = this.getSecondsSinceEpoch()
    if (this.state.timespan == "day") {
      t_start = this.getTimeOffsetByT(t_end, 24*60*60)
    } else if (this.state.timespan == "week") {
      t_start = this.getTimeOffsetByT(t_end, 7*24*60*60)
    } else if (this.state.timespan == "month") {
      t_start = this.getTimeOffsetByT(t_end, 30*24*60*60)
    } else if (this.state.timespan == "year") {
      t_start = this.getTimeOffsetByT(t_end, 365*24*60*60)
    } else if (this.state.timespan == "all") {
      t_start = this.getTimeOffsetByT(t_end, 10*365*24*60*60)
    }

    var newTop = []
    var self = this
    var request = '/user/' + user + '/top_albums?t_start=' + t_start.toString() + '&t_end=' + t_end.toString()
    axios.get(request).then(function(response) {
      var l = response['data']
      for (let i = 0; i < l.length; ++i) {
        var k = "album-" + i.toString();

        var img_path = album_art_endpoint + l[i]['img_id'] + '-medium.jpg'

        const love_button_data = {
          album_id: l[i]['album_id'],
          is_current_user: current_user == user,
          is_loved: l[i]['is_loved']
        }
        newTop.push(
          <div key={ k }>
            <div className="album-entry">
              <img className="album-entry-art" src={ img_path }/>
              <div className="album-entry-art-gradient"></div>
              <div className="album-entry-layer-wrapper">
                <LoveButton {...love_button_data}/>
                <div className="album-entry-text-group">
                  <div className="album-entry-text"><h5>{ l[i]['album'] }</h5></div>
                  <div className="album-entry-text"><h6>{ l[i]['artist'] }</h6></div>
                  <div className="album-entry-text"><h6>{ l[i]['count'] } listens</h6></div>
                </div>
              </div>
            </div>
          </div>
          )
      }
      self.setState({ 
        timespan: value,
        top_albums: newTop
      })
    })
  }

  updateTimespan = (event) => {
    this.state.timespan = event.target.value
    this.getNewTimespanData(event.target.value)
    
  }

  componentDidMount(){
    this.getNewTimespanData()
  }

  render() {
    return (
      <div className="top-album">
      <div className = "profile-section-header-timespan">
            <h6>Top Albums</h6>
            <select className="profile-section-header-select" id="ts-form" onChange={this.updateTimespan} value={this.state.timespan}>
                <option value="day">Last day</option>
                <option value="week">Last week</option>
                <option value="month">Last month</option>
                <option value="year">Last year</option>
                <option value="all">All time</option>
            </select>
        </div>
        <div className="top-album-wrapper">
        { this.state.top_albums }
        </div>
      </div>
    );
  }
}