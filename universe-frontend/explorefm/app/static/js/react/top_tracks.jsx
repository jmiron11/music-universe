import React from 'react'
import axios from 'axios';

import LoveButton from './love_button.jsx';

export default class TopTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    timespan: "month",
                    top: []
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
    var request = '/user/' + user + '/tracks?t_start=' + t_start.toString() + '&t_end=' + t_end.toString()
    axios.get(request).then(function(response) {
      var l = response['data']
      for (let i = 0; i < l.length; ++i) {
        var k = "track-" + i.toString();
        var width_percent=100
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
                <div className="listen-entry-time"><h6>{ l[i]['count'] }</h6></div>
            </div>
          </div>
          )
      }
      self.setState({ 
        timespan: value,
        top: newTop
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
    	<div className="top-track">
			<div className = "profile-section-header-timespan">
		        <h6>Top Tracks</h6>
		        <select className="profile-section-header-select" id="ts-form" onChange={this.updateTimespan} value={this.state.timespan}>
		            <option value="day">Last day</option>
		            <option value="week">Last week</option>
		            <option value="month">Last month</option>
		            <option value="year">Last year</option>
		            <option value="all">All time</option>
		        </select>
	    	</div>
    		{ this.state.top }
    	</div>
    );
  }
}