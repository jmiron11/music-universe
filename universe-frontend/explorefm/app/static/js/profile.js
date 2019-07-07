require("@babel/register");

const axios = require('axios')

'use strict';

const e = React.createElement;

class LoveButton extends React.Component {
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

class TopTracks extends React.Component {
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

    newTop = []
    var self = this
    var request = '/user/' + user + '/tracks?t_start=' + t_start.toString() + '&t_end=' + t_end.toString()
    axios.get(request).then(function(response) {
      l = response['data']
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
              <LoveButton {...love_button_data}/>
              <div className="listen-entry-track"><h6>{ l[i]['artist'] } - { l[i]['track'] }</h6></div>
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
		        <select id="ts-form" onChange={this.updateTimespan} value={this.state.timespan}>
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

class TopAlbums extends React.Component {
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
      l = response['data']
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
            <select id="ts-form" onChange={this.updateTimespan} value={this.state.timespan}>
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

class TopArtists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    timespan: "month",
                    top_artists: []
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
    var request = '/user/' + user + '/top_artists?t_start=' + t_start.toString() + '&t_end=' + t_end.toString()
    axios.get(request).then(function(response) {
      l = response['data']
      for (let i = 0; i < l.length; ++i) {
        var k = "artist-" + i.toString();
        var img_path = artist_art_endpoint + l[i]['img_id'] + '-medium.jpg'

        const love_button_data = {
          artist_id: l[i]['artist_id'],
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
                  <div className="album-entry-text"><h5>{ l[i]['artist'] }</h5></div>
                  <div className="album-entry-text"><h6>{ l[i]['count'] } listens</h6></div>
                </div>
              </div>
            </div>
          </div>
          )
      }
      self.setState({ 
        timespan: value,
        top_artists: newTop
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
      <div className="top-artist">
      <div className = "profile-section-header-timespan">
            <h6>Top Artists</h6>
            <select id="ts-form" onChange={this.updateTimespan} value={this.state.timespan}>
                <option value="day">Last day</option>
                <option value="week">Last week</option>
                <option value="month">Last month</option>
                <option value="year">Last year</option>
                <option value="all">All time</option>
            </select>
        </div>
        <div className="top-album-wrapper">
        { this.state.top_artists }
        </div>
      </div>
    );
  }
}


class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    inEditMode: false,
                    bio: "..."
                 };
  }

  componentDidMount(){
    var self = this
    var request = '/user/' + user + '/bio/'
    axios.get(request).then(function(response) {
      self.state.bio = response['data']
      self.setState(self.state)
    })
  }

  renderNoBio(isCurrentUser) {
    if (isCurrentUser) {
      return (
          <div className="bio">
              <h6>{ "Add a bio to tell people about you and the music you love." }</h6>
          <button className="bio-edit" onClick={ this.activeEditMode }>Add Bio</button>
          </div>
        )
    } else {
      return ("")
    }
  }

  activeEditMode = (event) => {
    this.state.inEditMode = true
    this.setState(this.state)
  }

  disableEditModeClearBio = (event) => {
    this.state.inEditMode = false
    document.getElementById("bio-edit-form").value = ""
    this.setState(this.state)
  }

  disableEditModeSaveBio = (event) => {
    var new_bio = document.getElementById("bio-edit-form").value
    this.state.inEditMode = false
    this.state.bio = new_bio

    this.setState(this.state)

    var self = this
    var request = '/update/bio/?bio=' + new_bio
    axios.get(request)
  }

  renderBio(isCurrentUser) {
    if (isCurrentUser) {
      return (
        <div className="bio">
          <h6>{ this.state.bio }</h6>
          <button className="bio-edit" onClick={ this.activeEditMode }>Edit Bio</button>
        </div>
      )
    } else {
      return (
        <div className="bio">
          <h6>{ this.state.bio }</h6>
        </div>
      )
    }
  }

  renderEditMode() {
    return (
      <div class="bio-edit-area">
      <textarea id="bio-edit-form" className="bio-edit-form" type="text" max-length="500">{this.state.bio}
      </textarea>
      <div class="bio-button-row">
        <button className="bio-button" onClick={ this.disableEditModeClearBio }>Cancel</button>
        <button className="bio-button" onClick={ this.disableEditModeSaveBio }>Save</button>
      </div>
      </div>
    )
  }

  render() {
    var isCurrentUser = (user == current_user)
    if (this.state.inEditMode) {
      return this.renderEditMode()
    } else {
      if (this.state.bio == "")
        return this.renderNoBio(isCurrentUser)
      else {
        return this.renderBio(isCurrentUser)
      }
    }
  }
}


class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    addNewHighlightMode: false,
                    highlights: [],
                    editIndex: -1
                 };
  }

  componentDidMount(){
    var self = this
    var request = '/user/' + user + '/highlight/'
    axios.get(request).then(function(response) {
      self.state.highlights = response['data']
      self.setState(self.state)
    })
  }

  activeEditMode = (event) => {
    this.state.addNewHighlightMode = true
    this.setState(this.state)
  }

  disableEditMode = (event) => {
    this.state.addNewHighlightMode = false
    this.setState(this.state)
  }

  editHighlightEntry = (event) => {
    var id = event.currentTarget.id
    var highlight_idx = Number(id.substring(id.length - 1))
    this.state.editIndex = highlight_idx
    this.setState(this.state)
  }

  disableEditHighlight = (event) => {
    this.state.editIndex = -1
    this.setState(this.state)
  }

  deleteEditHighlight = (event) => {
    var artist = document.getElementById("exist-highlight-edit-artist").value
    var album = document.getElementById("exist-highlight-edit-album").value
    var track = document.getElementById("exist-highlight-edit-track").value

    var id = event.currentTarget.id
    var highlight_idx = Number(id.substring(id.length - 1))
    var old_highlight = this.state.highlights[highlight_idx]
    var old_track, old_album, old_artist
    if ('track' in old_highlight) {
      old_track = "&old_track=" + old_highlight['track']
    } else {
      old_track = ""
    }

    if ('album' in old_highlight) {
      old_album = "&old_album=" + old_highlight['album']
    } else {
      old_album = ""
    }

    if ('artist' in old_highlight) {
      old_artist = "&old_artist=" + old_highlight['artist']
    } else {
      old_artist = ""
    }

    var self = this
    var request = '/update/highlight?' + old_artist + old_album + old_track
    axios.get(request).then(function(response) {
      self.state.highlights = response['data']
      for (let i = 0; i < self.state.highlights.length; ++i) {
        if (!('track' in self.state.highlights[i])) {
          self.state.highlights[i]['track'] = ""
        }
        if (!('album' in self.state.highlights[i])) {
          self.state.highlights[i]['album'] = ""
        }
        if (!('artist' in self.state.highlights[i])) {
          self.state.highlights[i]['artist'] = ""
        }
      }

      self.state.editIndex = -1
      self.setState(self.state)
    })
  }

  saveEditHighlight = (event) => {
    var artist = document.getElementById("exist-highlight-edit-artist").value
    var album = document.getElementById("exist-highlight-edit-album").value
    var track = document.getElementById("exist-highlight-edit-track").value

    var id = event.currentTarget.id
    var highlight_idx = Number(id.substring(id.length - 1))

    var old_highlight = this.state.highlights[highlight_idx]

    if (artist != "") {
          artist = "artist=" + artist
    }
    if (album != "") {
      album = "&album=" + album
    } else {
      album = ""
    }
    if (track != "") {
      track = "&track=" + track
    } else {
      track = ""
    }

    var old_track, old_album, old_artist
    if ('track' in old_highlight) {
      old_track = "&old_track=" + old_highlight['track']
    } else {
      old_track = ""
    }

    if ('album' in old_highlight) {
      old_album = "&old_album=" + old_highlight['album']
    } else {
      old_album = ""
    }

    if ('artist' in old_highlight) {
      old_artist = "&old_artist=" + old_highlight['artist']
    } else {
      old_artist = ""
    }

    var self = this
    var request = '/update/highlight?' + artist + album + track + old_artist + old_album + old_track
    axios.get(request).then(function(response) {
      self.state.highlights = response['data']
      for (let i = 0; i < self.state.highlights.length; ++i) {
        if (!('track' in self.state.highlights[i])) {
          self.state.highlights[i]['track'] = ""
        }
        if (!('album' in self.state.highlights[i])) {
          self.state.highlights[i]['album'] = ""
        }
        if (!('artist' in self.state.highlights[i])) {
          self.state.highlights[i]['artist'] = ""
        }
      }

      self.state.editIndex = -1
      self.setState(self.state)
    })
  }

  saveHighlight = (event) => {
    var artist = document.getElementById("highlight-edit-artist").value
    var album = document.getElementById("highlight-edit-album").value
    var track = document.getElementById("highlight-edit-track").value

    if (artist != "") {
      artist = "artist=" + artist
    }
    if (album != "") {
      album = "&album=" + album
    } else {
      album = ""
    }
    if (track != "") {
      track = "&track=" + track
    } else {
      track = ""
    }
    var self = this
    var request = '/update/highlight?' + artist + album + track
    axios.get(request).then(function(response) {
      self.state.highlights = response['data']
      for (let i = 0; i < self.state.highlights.length; ++i) {
        if (!('track' in self.state.highlights[i])) {
          self.state.highlights[i]['track'] = ""
        }
        if (!('album' in self.state.highlights[i])) {
          self.state.highlights[i]['album'] = ""
        }
        if (!('artist' in self.state.highlights[i])) {
          self.state.highlights[i]['artist'] = ""
        }
      }

      self.state.addNewHighlightMode = false
      self.setState(self.state)
    })
  }

  renderNoHighlights(isCurrentUser) {
    return (
      <div className="no-highlights">
        <button className="no-highlight-edit" onClick={ this.activeEditMode }>It looks like you have no highlighted tracks... Click here to add your first highlighted track</button>
      </div>
    )
  }

  nothing() {

  }

  renderHighlights(isCurrentUser) {
    var highlights = this.state.highlights
    var self = this
    
    var data = []
    for (let i = 0; i < highlights.length; ++i) {
      var k = "highlight-" + i.toString();
      var img_path = album_art_endpoint + highlights[i]['img_id'] + '-medium.jpg'
      if (i != this.state.editIndex) {
        data.push( 
          <div key={ k } id={k} className="highlight-entry-area" onClick={this.editHighlightEntry}>
            <div className="highlight-entry">
              <img className="highlight-img" src={ img_path }/>
              <div className="highlight-desc">
                <div className="highlight-txt">
                    {highlights[i]['artist'] && <h6><b>Artist:</b> { highlights[i]['artist'] }</h6>}
                    {highlights[i]['album'] && <h6><b>Album:</b> { highlights[i]['album'] }</h6>}
                    {highlights[i]['track'] && <h6><b>Track:</b> {highlights[i]['track']}</h6>}
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        var edit_idx = i
        var key = "edit-highlight-" + edit_idx
        data.push(
          <div key={ key } className="highlight-edit-entry">
            <div className="highlight-edit-row">
              <h6>Artist</h6>
              <input id="exist-highlight-edit-artist" className="highlight-edit-form" type="text" max-length="100"/>
            </div>
            <div className="highlight-edit-row">
              <h6>Album</h6>
              <input id="exist-highlight-edit-album" className="highlight-edit-form" type="text" max-length="100"/>
            </div>
            <div className="highlight-edit-row">
              <h6>Track</h6>
              <input id="exist-highlight-edit-track" className="highlight-edit-form" type="text" max-length="100"/>
            </div>
            <div className="bio-button-row">
              <button id={key} className="bio-button" onClick={ this.deleteEditHighlight }>Delete</button>
              <button className="bio-button" onClick={ this.disableEditHighlight }>Cancel</button>
              <button id={ key } className="bio-button" onClick={ this.saveEditHighlight }>Save</button>
            </div> 
          </div>
        )
      }
    }

    if (highlights.length < 6) {
    data.push(
      <div key="add-highlights" className="highlight-edit-area">
      <button className="bio-edit" onClick={ this.activeEditMode }>Add highlighted music</button>
      </div>
    )
    }

    return data
  }

  // Each highlight can be clicked normally. Edit mode is only 
  // for adding a new highlight. It displays the add a highlight after
  // the other highlights.
  renderEditMode() {
    var highlights = this.state.highlights
    var self = this
    
    var data = []
    for (let i = 0; i < highlights.length; ++i) {
      var k = "highlight-" + i.toString();
      var img_path = album_art_endpoint + highlights[i]['img_id'] + '-medium.jpg' 
      data.push( 
        <div key={ k } className="highlight-entry">
          <img className="highlight-img" src={ img_path }/>
          <div className="highlight-desc">
            <div className="highlight-txt">
                {highlights[i]['track'] && <h6><b>Track:</b> {highlights[i]['track']}</h6>}
                {highlights[i]['album'] && <h6><b>Album:</b> { highlights[i]['album'] }</h6>}
                {highlights[i]['artist'] && <h6><b>Artist:</b> { highlights[i]['artist'] }</h6>}
            </div>
          </div>
        </div>
      )
    }

    if (highlights.length < 6) {
      data.push(
        <div key="highlight-edit" className="highlight-edit-entry">
          <div className="highlight-edit-row">
            <h6>Artist</h6>
            <input id="highlight-edit-artist" className="highlight-edit-form" type="text" max-length="100"></input>
          </div>
          <div className="highlight-edit-row">
          <h6>Album</h6>
          <input id="highlight-edit-album" className="highlight-edit-form" type="text" max-length="100"></input>
          </div>
          <div className="highlight-edit-row">
          <h6>Track</h6>
          <input id="highlight-edit-track" className="highlight-edit-form" type="text" max-length="100"></input>
          </div>
          <div className="bio-button-row">
            <button className="bio-button" onClick={ this.disableEditMode }>Cancel</button>
            <button className="bio-button" onClick={ this.saveHighlight }>Save</button>
          </div> 
        </div>
      )
    }

    return data
  }

  render() {
    var isCurrentUser = (user == current_user)
    if (this.state.addNewHighlightMode) {
      return this.renderEditMode()
    } else {
      if (this.state.highlights.length == 0)
        return this.renderNoHighlights(isCurrentUser)
      else {
        return this.renderHighlights(isCurrentUser)
      }
    }
  }
}

class TimezoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    timezone: "America/Chicago",
                 };
  }

  componentDidMount(){
    this.setState({ 
      timezone: initial_timezone
    })

  }

  updateTimezone = (event) => {
    this.setState({ 
      timezone: event.target.value
    })
    var request = '/update/timezone/' + event.target.value.replace(/\//g,"-") + "/"
    axios.post(request)
  }

  render() {
    return (
      <div className="timezone-form">
            <select id="tz-form" onChange={this.updateTimezone} value={this.state.timezone}>
              <option value="Pacific/Midway">(GMT-11) Pacific/Midway</option>
              <option value="Pacific/Niue">(GMT-11) Pacific/Niue</option>
              <option value="Pacific/Pago_Pago">(GMT-11) Pacific/Pago_Pago</option>
              <option value="Pacific/Honolulu">(GMT-10) Pacific/Honolulu</option>
              <option value="Pacific/Rarotonga">(GMT-10) Pacific/Rarotonga</option>
              <option value="Pacific/Tahiti">(GMT-10) Pacific/Tahiti</option>
              <option value="Pacific/Marquesas">(GMT-09) Pacific/Marquesas</option>
              <option value="America/Adak">(GMT-09) America/Adak</option>
              <option value="Pacific/Gambier">(GMT-09) Pacific/Gambier</option>
              <option value="America/Anchorage">(GMT-08) America/Anchorage</option>
              <option value="America/Juneau">(GMT-08) America/Juneau</option>
              <option value="America/Metlakatla">(GMT-08) America/Metlakatla</option>
              <option value="America/Nome">(GMT-08) America/Nome</option>
              <option value="America/Sitka">(GMT-08) America/Sitka</option>
              <option value="America/Yakutat">(GMT-08) America/Yakutat</option>
              <option value="Pacific/Pitcairn">(GMT-08) Pacific/Pitcairn</option>
              <option value="America/Creston">(GMT-07) America/Creston</option>
              <option value="America/Dawson">(GMT-07) America/Dawson</option>
              <option value="America/Dawson_Creek">(GMT-07) America/Dawson_Creek</option>
              <option value="America/Fort_Nelson">(GMT-07) America/Fort_Nelson</option>
              <option value="America/Hermosillo">(GMT-07) America/Hermosillo</option>
              <option value="America/Los_Angeles">(GMT-07) America/Los_Angeles</option>
              <option value="America/Phoenix">(GMT-07) America/Phoenix</option>
              <option value="America/Tijuana">(GMT-07) America/Tijuana</option>
              <option value="America/Vancouver">(GMT-07) America/Vancouver</option>
              <option value="America/Whitehorse">(GMT-07) America/Whitehorse</option>
              <option value="America/Belize">(GMT-06) America/Belize</option>
              <option value="America/Boise">(GMT-06) America/Boise</option>
              <option value="America/Cambridge_Bay">(GMT-06) America/Cambridge_Bay</option>
              <option value="America/Chihuahua">(GMT-06) America/Chihuahua</option>
              <option value="America/Costa_Rica">(GMT-06) America/Costa_Rica</option>
              <option value="America/Denver">(GMT-06) America/Denver</option>
              <option value="America/Edmonton">(GMT-06) America/Edmonton</option>
              <option value="America/El_Salvador">(GMT-06) America/El_Salvador</option>
              <option value="America/Guatemala">(GMT-06) America/Guatemala</option>
              <option value="America/Inuvik">(GMT-06) America/Inuvik</option>
              <option value="America/Managua">(GMT-06) America/Managua</option>
              <option value="America/Mazatlan">(GMT-06) America/Mazatlan</option>
              <option value="America/Ojinaga">(GMT-06) America/Ojinaga</option>
              <option value="America/Regina">(GMT-06) America/Regina</option>
              <option value="America/Swift_Current">(GMT-06) America/Swift_Current</option>
              <option value="America/Tegucigalpa">(GMT-06) America/Tegucigalpa</option>
              <option value="America/Yellowknife">(GMT-06) America/Yellowknife</option>
              <option value="Pacific/Easter">(GMT-06) Pacific/Easter</option>
              <option value="Pacific/Galapagos">(GMT-06) Pacific/Galapagos</option>
              <option value="America/Atikokan">(GMT-05) America/Atikokan</option>
              <option value="America/Bahia_Banderas">(GMT-05) America/Bahia_Banderas</option>
              <option value="America/Bogota">(GMT-05) America/Bogota</option>
              <option value="America/Cancun">(GMT-05) America/Cancun</option>
              <option value="America/Cayman">(GMT-05) America/Cayman</option>
              <option value="America/Chicago">(GMT-05) America/Chicago</option>
              <option value="America/Eirunepe">(GMT-05) America/Eirunepe</option>
              <option value="America/Guayaquil">(GMT-05) America/Guayaquil</option>
              <option value="America/Indiana/Knox">(GMT-05) America/Indiana/Knox</option>
              <option value="America/Indiana/Tell_City">(GMT-05) America/Indiana/Tell_City</option>
              <option value="America/Jamaica">(GMT-05) America/Jamaica</option>
              <option value="America/Lima">(GMT-05) America/Lima</option>
              <option value="America/Matamoros">(GMT-05) America/Matamoros</option>
              <option value="America/Menominee">(GMT-05) America/Menominee</option>
              <option value="America/Merida">(GMT-05) America/Merida</option>
              <option value="America/Mexico_City">(GMT-05) America/Mexico_City</option>
              <option value="America/Monterrey">(GMT-05) America/Monterrey</option>
              <option value="America/North_Dakota/Beulah">(GMT-05) America/North_Dakota/Beulah</option>
              <option value="America/North_Dakota/Center">(GMT-05) America/North_Dakota/Center</option>
              <option value="America/North_Dakota/New_Salem">(GMT-05) America/North_Dakota/New_Salem</option>
              <option value="America/Panama">(GMT-05) America/Panama</option>
              <option value="America/Rainy_River">(GMT-05) America/Rainy_River</option>
              <option value="America/Rankin_Inlet">(GMT-05) America/Rankin_Inlet</option>
              <option value="America/Resolute">(GMT-05) America/Resolute</option>
              <option value="America/Rio_Branco">(GMT-05) America/Rio_Branco</option>
              <option value="America/Winnipeg">(GMT-05) America/Winnipeg</option>
              <option value="America/Anguilla">(GMT-04) America/Anguilla</option>
              <option value="America/Antigua">(GMT-04) America/Antigua</option>
              <option value="America/Aruba">(GMT-04) America/Aruba</option>
              <option value="America/Asuncion">(GMT-04) America/Asuncion</option>
              <option value="America/Barbados">(GMT-04) America/Barbados</option>
              <option value="America/Blanc-Sablon">(GMT-04) America/Blanc-Sablon</option>
              <option value="America/Boa_Vista">(GMT-04) America/Boa_Vista</option>
              <option value="America/Campo_Grande">(GMT-04) America/Campo_Grande</option>
              <option value="America/Caracas">(GMT-04) America/Caracas</option>
              <option value="America/Cuiaba">(GMT-04) America/Cuiaba</option>
              <option value="America/Curacao">(GMT-04) America/Curacao</option>
              <option value="America/Detroit">(GMT-04) America/Detroit</option>
              <option value="America/Dominica">(GMT-04) America/Dominica</option>
              <option value="America/Grand_Turk">(GMT-04) America/Grand_Turk</option>
              <option value="America/Grenada">(GMT-04) America/Grenada</option>
              <option value="America/Guadeloupe">(GMT-04) America/Guadeloupe</option>
              <option value="America/Guyana">(GMT-04) America/Guyana</option>
              <option value="America/Havana">(GMT-04) America/Havana</option>
              <option value="America/Indiana/Indianapolis">(GMT-04) America/Indiana/Indianapolis</option>
              <option value="America/Indiana/Marengo">(GMT-04) America/Indiana/Marengo</option>
              <option value="America/Indiana/Petersburg">(GMT-04) America/Indiana/Petersburg</option>
              <option value="America/Indiana/Vevay">(GMT-04) America/Indiana/Vevay</option>
              <option value="America/Indiana/Vincennes">(GMT-04) America/Indiana/Vincennes</option>
              <option value="America/Indiana/Winamac">(GMT-04) America/Indiana/Winamac</option>
              <option value="America/Iqaluit">(GMT-04) America/Iqaluit</option>
              <option value="America/Kentucky/Louisville">(GMT-04) America/Kentucky/Louisville</option>
              <option value="America/Kentucky/Monticello">(GMT-04) America/Kentucky/Monticello</option>
              <option value="America/Kralendijk">(GMT-04) America/Kralendijk</option>
              <option value="America/La_Paz">(GMT-04) America/La_Paz</option>
              <option value="America/Lower_Princes">(GMT-04) America/Lower_Princes</option>
              <option value="America/Manaus">(GMT-04) America/Manaus</option>
              <option value="America/Marigot">(GMT-04) America/Marigot</option>
              <option value="America/Martinique">(GMT-04) America/Martinique</option>
              <option value="America/Montserrat">(GMT-04) America/Montserrat</option>
              <option value="America/Nassau">(GMT-04) America/Nassau</option>
              <option value="America/New_York">(GMT-04) America/New_York</option>
              <option value="America/Nipigon">(GMT-04) America/Nipigon</option>
              <option value="America/Pangnirtung">(GMT-04) America/Pangnirtung</option>
              <option value="America/Port-au-Prince">(GMT-04) America/Port-au-Prince</option>
              <option value="America/Port_of_Spain">(GMT-04) America/Port_of_Spain</option>
              <option value="America/Porto_Velho">(GMT-04) America/Porto_Velho</option>
              <option value="America/Puerto_Rico">(GMT-04) America/Puerto_Rico</option>
              <option value="America/Santiago">(GMT-04) America/Santiago</option>
              <option value="America/Santo_Domingo">(GMT-04) America/Santo_Domingo</option>
              <option value="America/St_Barthelemy">(GMT-04) America/St_Barthelemy</option>
              <option value="America/St_Kitts">(GMT-04) America/St_Kitts</option>
              <option value="America/St_Lucia">(GMT-04) America/St_Lucia</option>
              <option value="America/St_Thomas">(GMT-04) America/St_Thomas</option>
              <option value="America/St_Vincent">(GMT-04) America/St_Vincent</option>
              <option value="America/Thunder_Bay">(GMT-04) America/Thunder_Bay</option>
              <option value="America/Toronto">(GMT-04) America/Toronto</option>
              <option value="America/Tortola">(GMT-04) America/Tortola</option>
              <option value="America/Araguaina">(GMT-03) America/Araguaina</option>
              <option value="America/Argentina/Buenos_Aires">(GMT-03) America/Argentina/Buenos_Aires</option>
              <option value="America/Argentina/Catamarca">(GMT-03) America/Argentina/Catamarca</option>
              <option value="America/Argentina/Cordoba">(GMT-03) America/Argentina/Cordoba</option>
              <option value="America/Argentina/Jujuy">(GMT-03) America/Argentina/Jujuy</option>
              <option value="America/Argentina/La_Rioja">(GMT-03) America/Argentina/La_Rioja</option>
              <option value="America/Argentina/Mendoza">(GMT-03) America/Argentina/Mendoza</option>
              <option value="America/Argentina/Rio_Gallegos">(GMT-03) America/Argentina/Rio_Gallegos</option>
              <option value="America/Argentina/Salta">(GMT-03) America/Argentina/Salta</option>
              <option value="America/Argentina/San_Juan">(GMT-03) America/Argentina/San_Juan</option>
              <option value="America/Argentina/San_Luis">(GMT-03) America/Argentina/San_Luis</option>
              <option value="America/Argentina/Tucuman">(GMT-03) America/Argentina/Tucuman</option>
              <option value="America/Argentina/Ushuaia">(GMT-03) America/Argentina/Ushuaia</option>
              <option value="America/Bahia">(GMT-03) America/Bahia</option>
              <option value="America/Belem">(GMT-03) America/Belem</option>
              <option value="America/Cayenne">(GMT-03) America/Cayenne</option>
              <option value="America/Fortaleza">(GMT-03) America/Fortaleza</option>
              <option value="America/Glace_Bay">(GMT-03) America/Glace_Bay</option>
              <option value="America/Goose_Bay">(GMT-03) America/Goose_Bay</option>
              <option value="America/Halifax">(GMT-03) America/Halifax</option>
              <option value="America/Maceio">(GMT-03) America/Maceio</option>
              <option value="America/Moncton">(GMT-03) America/Moncton</option>
              <option value="America/Montevideo">(GMT-03) America/Montevideo</option>
              <option value="America/Paramaribo">(GMT-03) America/Paramaribo</option>
              <option value="America/Punta_Arenas">(GMT-03) America/Punta_Arenas</option>
              <option value="America/Recife">(GMT-03) America/Recife</option>
              <option value="America/Santarem">(GMT-03) America/Santarem</option>
              <option value="America/Sao_Paulo">(GMT-03) America/Sao_Paulo</option>
              <option value="America/Thule">(GMT-03) America/Thule</option>
              <option value="Antarctica/Palmer">(GMT-03) Antarctica/Palmer</option>
              <option value="Antarctica/Rothera">(GMT-03) Antarctica/Rothera</option>
              <option value="Atlantic/Bermuda">(GMT-03) Atlantic/Bermuda</option>
              <option value="Atlantic/Stanley">(GMT-03) Atlantic/Stanley</option>
              <option value="America/St_Johns">(GMT-02) America/St_Johns</option>
              <option value="America/Godthab">(GMT-02) America/Godthab</option>
              <option value="America/Miquelon">(GMT-02) America/Miquelon</option>
              <option value="America/Noronha">(GMT-02) America/Noronha</option>
              <option value="Atlantic/South_Georgia">(GMT-02) Atlantic/South_Georgia</option>
              <option value="Atlantic/Cape_Verde">(GMT-01) Atlantic/Cape_Verde</option>
              <option value="Africa/Abidjan">(GMT+00) Africa/Abidjan</option>
              <option value="Africa/Accra">(GMT+00) Africa/Accra</option>
              <option value="Africa/Bamako">(GMT+00) Africa/Bamako</option>
              <option value="Africa/Banjul">(GMT+00) Africa/Banjul</option>
              <option value="Africa/Bissau">(GMT+00) Africa/Bissau</option>
              <option value="Africa/Conakry">(GMT+00) Africa/Conakry</option>
              <option value="Africa/Dakar">(GMT+00) Africa/Dakar</option>
              <option value="Africa/Freetown">(GMT+00) Africa/Freetown</option>
              <option value="Africa/Lome">(GMT+00) Africa/Lome</option>
              <option value="Africa/Monrovia">(GMT+00) Africa/Monrovia</option>
              <option value="Africa/Nouakchott">(GMT+00) Africa/Nouakchott</option>
              <option value="Africa/Ouagadougou">(GMT+00) Africa/Ouagadougou</option>
              <option value="Africa/Sao_Tome">(GMT+00) Africa/Sao_Tome</option>
              <option value="America/Danmarkshavn">(GMT+00) America/Danmarkshavn</option>
              <option value="America/Scoresbysund">(GMT+00) America/Scoresbysund</option>
              <option value="Atlantic/Azores">(GMT+00) Atlantic/Azores</option>
              <option value="Atlantic/Reykjavik">(GMT+00) Atlantic/Reykjavik</option>
              <option value="Atlantic/St_Helena">(GMT+00) Atlantic/St_Helena</option>
              <option value="UTC">(GMT+00) UTC</option>
              <option value="Africa/Algiers">(GMT+01) Africa/Algiers</option>
              <option value="Africa/Bangui">(GMT+01) Africa/Bangui</option>
              <option value="Africa/Brazzaville">(GMT+01) Africa/Brazzaville</option>
              <option value="Africa/Casablanca">(GMT+01) Africa/Casablanca</option>
              <option value="Africa/Douala">(GMT+01) Africa/Douala</option>
              <option value="Africa/El_Aaiun">(GMT+01) Africa/El_Aaiun</option>
              <option value="Africa/Kinshasa">(GMT+01) Africa/Kinshasa</option>
              <option value="Africa/Lagos">(GMT+01) Africa/Lagos</option>
              <option value="Africa/Libreville">(GMT+01) Africa/Libreville</option>
              <option value="Africa/Luanda">(GMT+01) Africa/Luanda</option>
              <option value="Africa/Malabo">(GMT+01) Africa/Malabo</option>
              <option value="Africa/Ndjamena">(GMT+01) Africa/Ndjamena</option>
              <option value="Africa/Niamey">(GMT+01) Africa/Niamey</option>
              <option value="Africa/Porto-Novo">(GMT+01) Africa/Porto-Novo</option>
              <option value="Africa/Tunis">(GMT+01) Africa/Tunis</option>
              <option value="Africa/Windhoek">(GMT+01) Africa/Windhoek</option>
              <option value="Atlantic/Canary">(GMT+01) Atlantic/Canary</option>
              <option value="Atlantic/Faroe">(GMT+01) Atlantic/Faroe</option>
              <option value="Atlantic/Madeira">(GMT+01) Atlantic/Madeira</option>
              <option value="Europe/Dublin">(GMT+01) Europe/Dublin</option>
              <option value="Europe/Guernsey">(GMT+01) Europe/Guernsey</option>
              <option value="Europe/Isle_of_Man">(GMT+01) Europe/Isle_of_Man</option>
              <option value="Europe/Jersey">(GMT+01) Europe/Jersey</option>
              <option value="Europe/Lisbon">(GMT+01) Europe/Lisbon</option>
              <option value="Europe/London">(GMT+01) Europe/London</option>
              <option value="Africa/Blantyre">(GMT+02) Africa/Blantyre</option>
              <option value="Africa/Bujumbura">(GMT+02) Africa/Bujumbura</option>
              <option value="Africa/Cairo">(GMT+02) Africa/Cairo</option>
              <option value="Africa/Ceuta">(GMT+02) Africa/Ceuta</option>
              <option value="Africa/Gaborone">(GMT+02) Africa/Gaborone</option>
              <option value="Africa/Harare">(GMT+02) Africa/Harare</option>
              <option value="Africa/Johannesburg">(GMT+02) Africa/Johannesburg</option>
              <option value="Africa/Kigali">(GMT+02) Africa/Kigali</option>
              <option value="Africa/Lubumbashi">(GMT+02) Africa/Lubumbashi</option>
              <option value="Africa/Lusaka">(GMT+02) Africa/Lusaka</option>
              <option value="Africa/Maputo">(GMT+02) Africa/Maputo</option>
              <option value="Africa/Maseru">(GMT+02) Africa/Maseru</option>
              <option value="Africa/Mbabane">(GMT+02) Africa/Mbabane</option>
              <option value="Africa/Tripoli">(GMT+02) Africa/Tripoli</option>
              <option value="Antarctica/Troll">(GMT+02) Antarctica/Troll</option>
              <option value="Arctic/Longyearbyen">(GMT+02) Arctic/Longyearbyen</option>
              <option value="Europe/Amsterdam">(GMT+02) Europe/Amsterdam</option>
              <option value="Europe/Andorra">(GMT+02) Europe/Andorra</option>
              <option value="Europe/Belgrade">(GMT+02) Europe/Belgrade</option>
              <option value="Europe/Berlin">(GMT+02) Europe/Berlin</option>
              <option value="Europe/Bratislava">(GMT+02) Europe/Bratislava</option>
              <option value="Europe/Brussels">(GMT+02) Europe/Brussels</option>
              <option value="Europe/Budapest">(GMT+02) Europe/Budapest</option>
              <option value="Europe/Busingen">(GMT+02) Europe/Busingen</option>
              <option value="Europe/Copenhagen">(GMT+02) Europe/Copenhagen</option>
              <option value="Europe/Gibraltar">(GMT+02) Europe/Gibraltar</option>
              <option value="Europe/Kaliningrad">(GMT+02) Europe/Kaliningrad</option>
              <option value="Europe/Ljubljana">(GMT+02) Europe/Ljubljana</option>
              <option value="Europe/Luxembourg">(GMT+02) Europe/Luxembourg</option>
              <option value="Europe/Madrid">(GMT+02) Europe/Madrid</option>
              <option value="Europe/Malta">(GMT+02) Europe/Malta</option>
              <option value="Europe/Monaco">(GMT+02) Europe/Monaco</option>
              <option value="Europe/Oslo">(GMT+02) Europe/Oslo</option>
              <option value="Europe/Paris">(GMT+02) Europe/Paris</option>
              <option value="Europe/Podgorica">(GMT+02) Europe/Podgorica</option>
              <option value="Europe/Prague">(GMT+02) Europe/Prague</option>
              <option value="Europe/Rome">(GMT+02) Europe/Rome</option>
              <option value="Europe/San_Marino">(GMT+02) Europe/San_Marino</option>
              <option value="Europe/Sarajevo">(GMT+02) Europe/Sarajevo</option>
              <option value="Europe/Skopje">(GMT+02) Europe/Skopje</option>
              <option value="Europe/Stockholm">(GMT+02) Europe/Stockholm</option>
              <option value="Europe/Tirane">(GMT+02) Europe/Tirane</option>
              <option value="Europe/Vaduz">(GMT+02) Europe/Vaduz</option>
              <option value="Europe/Vatican">(GMT+02) Europe/Vatican</option>
              <option value="Europe/Vienna">(GMT+02) Europe/Vienna</option>
              <option value="Europe/Warsaw">(GMT+02) Europe/Warsaw</option>
              <option value="Europe/Zagreb">(GMT+02) Europe/Zagreb</option>
              <option value="Europe/Zurich">(GMT+02) Europe/Zurich</option>
              <option value="Africa/Addis_Ababa">(GMT+03) Africa/Addis_Ababa</option>
              <option value="Africa/Asmara">(GMT+03) Africa/Asmara</option>
              <option value="Africa/Dar_es_Salaam">(GMT+03) Africa/Dar_es_Salaam</option>
              <option value="Africa/Djibouti">(GMT+03) Africa/Djibouti</option>
              <option value="Africa/Juba">(GMT+03) Africa/Juba</option>
              <option value="Africa/Kampala">(GMT+03) Africa/Kampala</option>
              <option value="Africa/Khartoum">(GMT+03) Africa/Khartoum</option>
              <option value="Africa/Mogadishu">(GMT+03) Africa/Mogadishu</option>
              <option value="Africa/Nairobi">(GMT+03) Africa/Nairobi</option>
              <option value="Antarctica/Syowa">(GMT+03) Antarctica/Syowa</option>
              <option value="Asia/Aden">(GMT+03) Asia/Aden</option>
              <option value="Asia/Amman">(GMT+03) Asia/Amman</option>
              <option value="Asia/Baghdad">(GMT+03) Asia/Baghdad</option>
              <option value="Asia/Bahrain">(GMT+03) Asia/Bahrain</option>
              <option value="Asia/Beirut">(GMT+03) Asia/Beirut</option>
              <option value="Asia/Damascus">(GMT+03) Asia/Damascus</option>
              <option value="Asia/Famagusta">(GMT+03) Asia/Famagusta</option>
              <option value="Asia/Gaza">(GMT+03) Asia/Gaza</option>
              <option value="Asia/Hebron">(GMT+03) Asia/Hebron</option>
              <option value="Asia/Jerusalem">(GMT+03) Asia/Jerusalem</option>
              <option value="Asia/Kuwait">(GMT+03) Asia/Kuwait</option>
              <option value="Asia/Nicosia">(GMT+03) Asia/Nicosia</option>
              <option value="Asia/Qatar">(GMT+03) Asia/Qatar</option>
              <option value="Asia/Riyadh">(GMT+03) Asia/Riyadh</option>
              <option value="Europe/Athens">(GMT+03) Europe/Athens</option>
              <option value="Europe/Bucharest">(GMT+03) Europe/Bucharest</option>
              <option value="Europe/Chisinau">(GMT+03) Europe/Chisinau</option>
              <option value="Europe/Helsinki">(GMT+03) Europe/Helsinki</option>
              <option value="Europe/Istanbul">(GMT+03) Europe/Istanbul</option>
              <option value="Europe/Kiev">(GMT+03) Europe/Kiev</option>
              <option value="Europe/Kirov">(GMT+03) Europe/Kirov</option>
              <option value="Europe/Mariehamn">(GMT+03) Europe/Mariehamn</option>
              <option value="Europe/Minsk">(GMT+03) Europe/Minsk</option>
              <option value="Europe/Moscow">(GMT+03) Europe/Moscow</option>
              <option value="Europe/Riga">(GMT+03) Europe/Riga</option>
              <option value="Europe/Simferopol">(GMT+03) Europe/Simferopol</option>
              <option value="Europe/Sofia">(GMT+03) Europe/Sofia</option>
              <option value="Europe/Tallinn">(GMT+03) Europe/Tallinn</option>
              <option value="Europe/Uzhgorod">(GMT+03) Europe/Uzhgorod</option>
              <option value="Europe/Vilnius">(GMT+03) Europe/Vilnius</option>
              <option value="Europe/Volgograd">(GMT+03) Europe/Volgograd</option>
              <option value="Europe/Zaporozhye">(GMT+03) Europe/Zaporozhye</option>
              <option value="Indian/Antananarivo">(GMT+03) Indian/Antananarivo</option>
              <option value="Indian/Comoro">(GMT+03) Indian/Comoro</option>
              <option value="Indian/Mayotte">(GMT+03) Indian/Mayotte</option>
              <option value="Asia/Baku">(GMT+04) Asia/Baku</option>
              <option value="Asia/Dubai">(GMT+04) Asia/Dubai</option>
              <option value="Asia/Muscat">(GMT+04) Asia/Muscat</option>
              <option value="Asia/Tbilisi">(GMT+04) Asia/Tbilisi</option>
              <option value="Asia/Yerevan">(GMT+04) Asia/Yerevan</option>
              <option value="Europe/Astrakhan">(GMT+04) Europe/Astrakhan</option>
              <option value="Europe/Samara">(GMT+04) Europe/Samara</option>
              <option value="Europe/Saratov">(GMT+04) Europe/Saratov</option>
              <option value="Europe/Ulyanovsk">(GMT+04) Europe/Ulyanovsk</option>
              <option value="Indian/Mahe">(GMT+04) Indian/Mahe</option>
              <option value="Indian/Mauritius">(GMT+04) Indian/Mauritius</option>
              <option value="Indian/Reunion">(GMT+04) Indian/Reunion</option>
              <option value="Asia/Kabul">(GMT+04) Asia/Kabul</option>
              <option value="Asia/Tehran">(GMT+04) Asia/Tehran</option>
              <option value="Antarctica/Mawson">(GMT+05) Antarctica/Mawson</option>
              <option value="Asia/Aqtau">(GMT+05) Asia/Aqtau</option>
              <option value="Asia/Aqtobe">(GMT+05) Asia/Aqtobe</option>
              <option value="Asia/Ashgabat">(GMT+05) Asia/Ashgabat</option>
              <option value="Asia/Atyrau">(GMT+05) Asia/Atyrau</option>
              <option value="Asia/Dushanbe">(GMT+05) Asia/Dushanbe</option>
              <option value="Asia/Karachi">(GMT+05) Asia/Karachi</option>
              <option value="Asia/Oral">(GMT+05) Asia/Oral</option>
              <option value="Asia/Samarkand">(GMT+05) Asia/Samarkand</option>
              <option value="Asia/Tashkent">(GMT+05) Asia/Tashkent</option>
              <option value="Asia/Yekaterinburg">(GMT+05) Asia/Yekaterinburg</option>
              <option value="Indian/Kerguelen">(GMT+05) Indian/Kerguelen</option>
              <option value="Indian/Maldives">(GMT+05) Indian/Maldives</option>
              <option value="Asia/Colombo">(GMT+05) Asia/Colombo</option>
              <option value="Asia/Kolkata">(GMT+05) Asia/Kolkata</option>
              <option value="Asia/Kathmandu">(GMT+05) Asia/Kathmandu</option>
              <option value="Antarctica/Vostok">(GMT+06) Antarctica/Vostok</option>
              <option value="Asia/Almaty">(GMT+06) Asia/Almaty</option>
              <option value="Asia/Bishkek">(GMT+06) Asia/Bishkek</option>
              <option value="Asia/Dhaka">(GMT+06) Asia/Dhaka</option>
              <option value="Asia/Omsk">(GMT+06) Asia/Omsk</option>
              <option value="Asia/Qyzylorda">(GMT+06) Asia/Qyzylorda</option>
              <option value="Asia/Thimphu">(GMT+06) Asia/Thimphu</option>
              <option value="Asia/Urumqi">(GMT+06) Asia/Urumqi</option>
              <option value="Indian/Chagos">(GMT+06) Indian/Chagos</option>
              <option value="Asia/Yangon">(GMT+06) Asia/Yangon</option>
              <option value="Indian/Cocos">(GMT+06) Indian/Cocos</option>
              <option value="Antarctica/Davis">(GMT+07) Antarctica/Davis</option>
              <option value="Asia/Bangkok">(GMT+07) Asia/Bangkok</option>
              <option value="Asia/Barnaul">(GMT+07) Asia/Barnaul</option>
              <option value="Asia/Ho_Chi_Minh">(GMT+07) Asia/Ho_Chi_Minh</option>
              <option value="Asia/Hovd">(GMT+07) Asia/Hovd</option>
              <option value="Asia/Jakarta">(GMT+07) Asia/Jakarta</option>
              <option value="Asia/Krasnoyarsk">(GMT+07) Asia/Krasnoyarsk</option>
              <option value="Asia/Novokuznetsk">(GMT+07) Asia/Novokuznetsk</option>
              <option value="Asia/Novosibirsk">(GMT+07) Asia/Novosibirsk</option>
              <option value="Asia/Phnom_Penh">(GMT+07) Asia/Phnom_Penh</option>
              <option value="Asia/Pontianak">(GMT+07) Asia/Pontianak</option>
              <option value="Asia/Tomsk">(GMT+07) Asia/Tomsk</option>
              <option value="Asia/Vientiane">(GMT+07) Asia/Vientiane</option>
              <option value="Indian/Christmas">(GMT+07) Indian/Christmas</option>
              <option value="Asia/Brunei">(GMT+08) Asia/Brunei</option>
              <option value="Asia/Choibalsan">(GMT+08) Asia/Choibalsan</option>
              <option value="Asia/Hong_Kong">(GMT+08) Asia/Hong_Kong</option>
              <option value="Asia/Irkutsk">(GMT+08) Asia/Irkutsk</option>
              <option value="Asia/Kuala_Lumpur">(GMT+08) Asia/Kuala_Lumpur</option>
              <option value="Asia/Kuching">(GMT+08) Asia/Kuching</option>
              <option value="Asia/Macau">(GMT+08) Asia/Macau</option>
              <option value="Asia/Makassar">(GMT+08) Asia/Makassar</option>
              <option value="Asia/Manila">(GMT+08) Asia/Manila</option>
              <option value="Asia/Shanghai">(GMT+08) Asia/Shanghai</option>
              <option value="Asia/Singapore">(GMT+08) Asia/Singapore</option>
              <option value="Asia/Taipei">(GMT+08) Asia/Taipei</option>
              <option value="Asia/Ulaanbaatar">(GMT+08) Asia/Ulaanbaatar</option>
              <option value="Australia/Perth">(GMT+08) Australia/Perth</option>
              <option value="Asia/Pyongyang">(GMT+08) Asia/Pyongyang</option>
              <option value="Australia/Eucla">(GMT+08) Australia/Eucla</option>
              <option value="Asia/Chita">(GMT+09) Asia/Chita</option>
              <option value="Asia/Dili">(GMT+09) Asia/Dili</option>
              <option value="Asia/Jayapura">(GMT+09) Asia/Jayapura</option>
              <option value="Asia/Khandyga">(GMT+09) Asia/Khandyga</option>
              <option value="Asia/Seoul">(GMT+09) Asia/Seoul</option>
              <option value="Asia/Tokyo">(GMT+09) Asia/Tokyo</option>
              <option value="Asia/Yakutsk">(GMT+09) Asia/Yakutsk</option>
              <option value="Pacific/Palau">(GMT+09) Pacific/Palau</option>
              <option value="Australia/Adelaide">(GMT+09) Australia/Adelaide</option>
              <option value="Australia/Broken_Hill">(GMT+09) Australia/Broken_Hill</option>
              <option value="Australia/Darwin">(GMT+09) Australia/Darwin</option>
              <option value="Antarctica/DumontDUrville">(GMT+10) Antarctica/DumontDUrville</option>
              <option value="Asia/Ust-Nera">(GMT+10) Asia/Ust-Nera</option>
              <option value="Asia/Vladivostok">(GMT+10) Asia/Vladivostok</option>
              <option value="Australia/Brisbane">(GMT+10) Australia/Brisbane</option>
              <option value="Australia/Currie">(GMT+10) Australia/Currie</option>
              <option value="Australia/Hobart">(GMT+10) Australia/Hobart</option>
              <option value="Australia/Lindeman">(GMT+10) Australia/Lindeman</option>
              <option value="Australia/Melbourne">(GMT+10) Australia/Melbourne</option>
              <option value="Australia/Sydney">(GMT+10) Australia/Sydney</option>
              <option value="Pacific/Chuuk">(GMT+10) Pacific/Chuuk</option>
              <option value="Pacific/Guam">(GMT+10) Pacific/Guam</option>
              <option value="Pacific/Port_Moresby">(GMT+10) Pacific/Port_Moresby</option>
              <option value="Pacific/Saipan">(GMT+10) Pacific/Saipan</option>
              <option value="Australia/Lord_Howe">(GMT+10) Australia/Lord_Howe</option>
              <option value="Antarctica/Casey">(GMT+11) Antarctica/Casey</option>
              <option value="Antarctica/Macquarie">(GMT+11) Antarctica/Macquarie</option>
              <option value="Asia/Magadan">(GMT+11) Asia/Magadan</option>
              <option value="Asia/Sakhalin">(GMT+11) Asia/Sakhalin</option>
              <option value="Asia/Srednekolymsk">(GMT+11) Asia/Srednekolymsk</option>
              <option value="Pacific/Bougainville">(GMT+11) Pacific/Bougainville</option>
              <option value="Pacific/Efate">(GMT+11) Pacific/Efate</option>
              <option value="Pacific/Guadalcanal">(GMT+11) Pacific/Guadalcanal</option>
              <option value="Pacific/Kosrae">(GMT+11) Pacific/Kosrae</option>
              <option value="Pacific/Norfolk">(GMT+11) Pacific/Norfolk</option>
              <option value="Pacific/Noumea">(GMT+11) Pacific/Noumea</option>
              <option value="Pacific/Pohnpei">(GMT+11) Pacific/Pohnpei</option>
              <option value="Antarctica/McMurdo">(GMT+12) Antarctica/McMurdo</option>
              <option value="Asia/Anadyr">(GMT+12) Asia/Anadyr</option>
              <option value="Asia/Kamchatka">(GMT+12) Asia/Kamchatka</option>
              <option value="Pacific/Auckland">(GMT+12) Pacific/Auckland</option>
              <option value="Pacific/Fiji">(GMT+12) Pacific/Fiji</option>
              <option value="Pacific/Funafuti">(GMT+12) Pacific/Funafuti</option>
              <option value="Pacific/Kwajalein">(GMT+12) Pacific/Kwajalein</option>
              <option value="Pacific/Majuro">(GMT+12) Pacific/Majuro</option>
              <option value="Pacific/Nauru">(GMT+12) Pacific/Nauru</option>
              <option value="Pacific/Tarawa">(GMT+12) Pacific/Tarawa</option>
              <option value="Pacific/Wake">(GMT+12) Pacific/Wake</option>
              <option value="Pacific/Wallis">(GMT+12) Pacific/Wallis</option>
              <option value="Pacific/Chatham">(GMT+12) Pacific/Chatham</option>
              <option value="Pacific/Apia">(GMT+13) Pacific/Apia</option>
              <option value="Pacific/Enderbury">(GMT+13) Pacific/Enderbury</option>
              <option value="Pacific/Fakaofo">(GMT+13) Pacific/Fakaofo</option>
              <option value="Pacific/Tongatapu">(GMT+13) Pacific/Tongatapu</option>
              <option value="Pacific/Kiritimati">(GMT+14) Pacific/Kiritimati</option>
            </select>
      </div>
    );
  }
}

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    isFollowing: false,
                 };
  }

  buttonClicked = (event) => {
      var self = this
      var request = '/update/is_following/' + user + '/' + (!this.state.isFollowing).toString()
      axios.get(request).then(function(response) {
        self.state.isFollowing = response['data']
        self.setState(self.state)
      })
  }

  componentDidMount(){
      var self = this
      var request = '/query/user/is_following/' + user
      axios.get(request).then(function(response) {
        self.state.isFollowing = response['data'][0]
        self.setState(self.state)
      })
  }

  renderFollowed() {
    return (
      <div className="follow-button" onClick={this.buttonClicked}>
          <i className="fa fa-check" aria-hidden="true"></i>
          <h1>Followed</h1>
      </div>
    );
  }

  renderUnfollowed() {
      return (
      <div className="follow-button" onClick={this.buttonClicked}>
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          <h1>Follow</h1>
      </div>
    );
  }

  render() {
    if (this.state.isFollowing) {
      return this.renderFollowed();
    } else {
      return this.renderUnfollowed();
    }
  }
}

// Render all the things
var domContainer = document.getElementById("top-tracks")
if (domContainer != null) {
  ReactDOM.render(e(TopTracks), domContainer);
}

domContainer = document.getElementById("top-albums")
if (domContainer != null) {
  ReactDOM.render(e(TopAlbums), domContainer);
}

domContainer = document.getElementById("top-artists")
if (domContainer != null) {
  ReactDOM.render(e(TopArtists), domContainer);
}

domContainer = document.getElementById("timezone-form")
if (domContainer != null) {
  ReactDOM.render(e(TimezoneForm), domContainer);
}

domContainer = document.getElementById("bio")
if (domContainer != null) {
  ReactDOM.render(e(Bio), domContainer);
}

domContainer = document.getElementById("highlighted-music")
if (domContainer != null) {
  ReactDOM.render(e(Highlight), domContainer);
}

domContainer = document.getElementById("follow-button")
if (domContainer != null) {
  ReactDOM.render(e(FollowButton), domContainer);
}
