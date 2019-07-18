require("@babel/register");
'use strict';

import LoveButton from './love_button.jsx';
import TopTracks from './top_tracks.jsx';
import TopAlbums from './top_albums.jsx';
import TopArtists from './top_artists.jsx';
import RecentListens from './recent_listens.jsx'
import FollowButton from './follow_button.jsx'
import MusicHighlight from './music_highlight.jsx'

import axios from 'axios';

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
                  profile_layout: {
                    "Left": [],
                    "Right": []
                  },
                  profile_pieces: {}, // Profile pieces we already have stored.
                  profile_pieces_edits: {},
                  editProfileModalValue: "SelectComponent",
                  editProfileModalOptions: {},
                  pendingUpdateMode: false,
                  isCurrentUser: true
                 };
  }

  componentDidMount() {
    var self = this
    var request = '/user/' + user + '/profile/'
    axios.get(request).then(function(response) {
      self.state.profile_layout = response.data["ProfileLayout"]
      for (var piece_id in response.data["ProfilePieces"]) {
        self.state.profile_pieces[piece_id] = response.data["ProfilePieces"][piece_id]
      } 
      self.setState(self.state)
    })

  }

  // Serialization format:
  // { 
  //  "ProfileFormat": [ <Profile Piece Id>, ... ]
  // }
  //
  serializeProfileFromState() {
    var json_layout = this.state.profile_layout

    var request_endpoint = '/update/profile_layout'
    axios.post(request_endpoint, json_layout).then(function(response) {
      // console.log(response)
    })
  }

  deserializeProfileToState(profile_data) {

  }

  // On submit, assumes that editProfileModalValue and editProfileModalOptions are appropriately set.
  submitProfileEdit(piece_id) {
    console.log(piece_id)
    if ((piece_id < 0 && this.state.editProfileModalValue == "Bio") || (piece_id > 0 && this.state.profile_pieces_edits[piece_id]["PieceType"] == "Bio"))  {
      if (piece_id < 0) {
        this.state.editProfileModalOptions["Text"] = document.getElementById("profileBioEditForm-" + piece_id.toString()).value
      } else {
        this.state.profile_pieces_edits[piece_id]["PieceData"]["Text"] = document.getElementById("profileBioEditForm-" + piece_id.toString()).value
      }
    } else if ((piece_id < 0 && this.state.editProfileModalValue == "MusicHighlight") || (piece_id > 0 && this.state.profile_pieces_edits[piece_id]["PieceType"] == "MusicHighlight")) {
      if (piece_id < 0) {
        if (this.state.editProfileModalOptions["Type"] == "Track") {
          this.state.editProfileModalOptions["Track"] = document.getElementById("exist-highlight-edit-track-track-" + piece_id.toString() ).value
          this.state.editProfileModalOptions["Album"] = document.getElementById("exist-highlight-edit-album-track-" + piece_id.toString() ).value
          this.state.editProfileModalOptions["Artist"] = document.getElementById("exist-highlight-edit-artist-track-" + piece_id.toString() ).value
        } else if (this.state.editProfileModalOptions["Type"] == "Album") {
          this.state.editProfileModalOptions["Album"] = document.getElementById("exist-highlight-edit-album-album-" + piece_id.toString() ).value
          this.state.editProfileModalOptions["Artist"] = document.getElementById("exist-highlight-edit-artist-album-" + piece_id.toString() ).value
        } else if (this.state.editProfileModalOptions["Type"] == "Artist") {
          this.state.editProfileModalOptions["Artist"] = document.getElementById("exist-highlight-edit-artist-artist-" + piece_id.toString() ).value
        }
      } else {
        if (this.state.profile_pieces_edits[piece_id]["PieceData"]["Type"] == "Track") {
          this.state.profile_pieces_edits[piece_id]["PieceData"]["Track"] = document.getElementById("exist-highlight-edit-track-track-" + piece_id.toString() ).value
          this.state.profile_pieces_edits[piece_id]["PieceData"]["Album"] = document.getElementById("exist-highlight-edit-album-track-" + piece_id.toString() ).value
          this.state.profile_pieces_edits[piece_id]["PieceData"]["Artist"] = document.getElementById("exist-highlight-edit-artist-track-" + piece_id.toString() ).value
        } else if (this.state.profile_pieces_edits[piece_id]["PieceData"]["Type"] == "Album") {
          this.state.profile_pieces_edits[piece_id]["PieceData"]["Album"] = document.getElementById("exist-highlight-edit-album-album-" + piece_id.toString() ).value
          this.state.profile_pieces_edits[piece_id]["PieceData"]["Artist"] = document.getElementById("exist-highlight-edit-artist-album-" + piece_id.toString() ).value
        } else if (this.state.profile_pieces_edits[piece_id]["PieceData"]["Type"] == "Artist") {
          this.state.profile_pieces_edits[piece_id]["PieceData"]["Artist"] = document.getElementById("exist-highlight-edit-artist-artist-" + piece_id.toString() ).value
        }
      }
    }

    // Submit the new profile piece, it returns an identifier.
    var json_piece = {}
    json_piece["PieceId"] = piece_id
    if (piece_id < 0) {
      json_piece["PieceType"] = this.state.editProfileModalValue
      json_piece["PieceData"] = this.state.editProfileModalOptions
    } else {
      json_piece["PieceType"] = this.state.profile_pieces_edits[piece_id]["PieceType"]
      json_piece["PieceData"] = this.state.profile_pieces_edits[piece_id]["PieceData"]
    }

    // Pop all Id's from the piece data if the type is musichighlight
    if (json_piece["PieceType"] == "MusicHighlight") {
      delete json_piece["PieceData"].Artist_id
      delete json_piece["PieceData"].Album_id
      delete json_piece["PieceData"].Track_id
      if (!("Note" in json_piece["PieceData"])) {
        json_piece["PieceData"]["Note"] = ""
      }
    }

    if (piece_id >= 0) {
      json_piece["PieceId"] = piece_id
    }
    var self = this
    var request_endpoint = '/update/profile_piece'
    axios.post(request_endpoint, json_piece).then(function(response) {
      console.log(response)
      // Submit the new serialized profile.

      if (piece_id == -1) {
        self.state.profile_layout["Left"].push(response.data['piece_id'])
      } else if (piece_id == -2) {
        self.state.profile_layout["Right"].push(response.data['piece_id'])
      }

      // Some objects have extra returned information
      if (json_piece["PieceType"] == "MusicHighlight") {
        if (json_piece["PieceData"]["Type"] == "Track")
          json_piece["PieceData"]["Track_id"] = response.data['music_id']
        else if (json_piece["PieceData"]["Type"] == "Album") {
          json_piece["PieceData"]["Album_id"] = response.data['music_id']
        } else if (json_piece["PieceData"]["Type"] == "Artist") {
          json_piece["PieceData"]["Artist_id"] = response.data['music_id']
        }
      }

      // Update state internally once we have the piece_id
      self.state.profile_pieces[response.data['piece_id']] = json_piece

      self.setState(self.state)

      // A new piece has been added.
      if (piece_id < 0) {
        self.serializeProfileFromState()
      }
    })

    // Reset the add component modal.
    this.state.editProfileModalValue = "SelectComponent"
    this.setState(this.state)

    // Close the modal using jquery.
    var self = this
    $(function () {
       $('#' + self.getModalTag(piece_id)).modal('hide');
    });
  }

  deleteProfilePiece(piece_id) {
    var json_piece = {}
    json_piece["PieceId"] = piece_id
    json_piece["PieceType"] = "Delete"
    json_piece["PieceData"] = ""

    var self = this
    var request_endpoint = '/update/profile_piece'
    axios.post(request_endpoint, json_piece)
    
    // Garbage delete from layout.
    self.state.profile_pieces[piece_id] = undefined
    var new_profile_left = []
    var new_profile_right = []
    for (let i = 0; i < this.state.profile_layout["Left"].length; ++i) {
      if (this.state.profile_layout["Left"][i] != piece_id) {
        new_profile_left.push(this.state.profile_layout["Left"][i])
      }
    }
    for(let i = 0; i < this.state.profile_layout["Right"].length; ++i) {
      if (this.state.profile_layout["Right"][i] != piece_id) {
        new_profile_right.push(this.state.profile_layout["Right"][i])
      }
    }

    this.state.profile_layout["Left"] = new_profile_left
    this.state.profile_layout["Right"] = new_profile_right
    this.setState(this.state)
      
    self.serializeProfileFromState()

    // Close the modal using jquery.
    var self = this
    $(function () {
       $('#' + self.getModalTag(piece_id)).modal('hide');
    });
  }

  updateEditProfileModal = (event) => {
    var id = event.target.id
    var split = id.split('-')
    var piece_id = split[1]
    var field = split[0]

    if (piece_id == "") {
      this.state.editProfileModalValue = event.target.value
      this.state.editProfileModalOptions = {} // Reset the modal options
    } else {
      this.state.profile_pieces_edits[Number(piece_id)]["PieceType"] = event.target.value
      this.state.profile_pieces_edits[Number(piece_id)]["PieceData"] = {}
    }

    this.setState(this.state)
  }

  updateModalOption = (event) => {
    var id = event.target.id
    var split = id.split('-')
    var piece_id = split[1]
    var field = split[0]
    if (piece_id == "") {
      if (field == "recentListenCount") {
        this.state.editProfileModalOptions["Number"] = event.target.value
      } else if (field == "profileBioEditForm") {
        this.state.editProfileModalOptions["Text"] = event.target.value
      } else if (field == "selectHighlightType") {
        this.state.editProfileModalOptions["Type"] = event.target.value
      } else if (field == "musicHighlightNote") {
        this.state.editProfileModalOptions["Note"] = event.target.value
      }
    } else {
      if (field == "recentListenCount") {
        this.state.profile_pieces_edits[Number(piece_id)]["PieceData"]["Number"] = event.target.value
      } else if (field == "profileBioEditForm") {
        this.state.profile_pieces_edits[Number(piece_id)]["PieceData"]["Text"] = event.target.value
      } else if (field == "selectHighlightType") {
        this.state.profile_pieces_edits[Number(piece_id)]["PieceData"]["Type"] = event.target.value
      } else if (field == "musicHighlightNote") {
        this.state.profile_pieces_edits[Number(piece_id)]["PieceData"]["Note"] = event.target.value
      }
    }

    this.setState(this.state)
  }

  displayModalHelp() {
    return (
      <div className="profile-edit-help">
        <h1 className="profile-edit-help-text">Want to cancel your changes? Just click outside the edit box!</h1>
      </div>
    )
  }

  getModalTag(piece_id) {
    return "profileEditModal" + piece_id.toString()
  }

  getNewComponent(piece_id) {
    return (
      <div key={ "new-profile-piece-group" + piece_id.toString()} className="profile-component">
        <button className="profile-edit-button" data-toggle="modal" data-target={ "#" + this.getModalTag(piece_id) }>Add Profile Piece</button>
        { this.getComponentModal(piece_id) }
      </div>
    )
  }

  // The modal is set based on the profile piece's current options. We modify those directly unless this piece_id 
  // refers to a piece that doesn't exist (piece_id < 0)
  getComponentModal(piece_id) {
    var additionalOptions;

    var value;
    var options;
    var delete_button_div;
    if (piece_id >= 0) {

      // Create a copy in  default values for the piece.
      if (!(piece_id in this.state.profile_pieces_edits)) {
        this.state.profile_pieces_edits[piece_id] = {}
        this.state.profile_pieces_edits[piece_id]["PieceType"] = this.state.profile_pieces[piece_id]["PieceType"]
        this.state.profile_pieces_edits[piece_id]["PieceData"] = this.state.profile_pieces[piece_id]["PieceData"]
      }

      value = this.state.profile_pieces_edits[piece_id]["PieceType"]
      options = this.state.profile_pieces_edits[piece_id]["PieceData"]
      delete_button_div = (
        <button className="profile-edit-save" onClick={ () => this.deleteProfilePiece(piece_id)}>Delete</button>
      )
    } else {
      value = this.state.editProfileModalValue
      options = this.state.editProfileModalOptions
      delete_button_div = "";
    }

    if (options == "SelectComponent") {
      additionalOptions = undefined
    } else if (value == "TopTracks") {
      additionalOptions = (
        <div className="profile-edit-options">
          <div className="profile-edit-button-row">
            { delete_button_div }
            <button className="profile-edit-save" onClick={ () => this.submitProfileEdit(piece_id) }>Save</button>
          </div>
        </div>
      )
    } else if (value == "TopAlbums") {
      additionalOptions = (
        <div className="profile-edit-options">
          <div className="profile-edit-button-row">
            { delete_button_div }
            <button className="profile-edit-save" onClick={ () => this.submitProfileEdit(piece_id) }>Save</button>
          </div>
        </div>
      )
    } else if (value == "TopArtists") {
      additionalOptions = (
        <div className="profile-edit-options">
          <div className="profile-edit-button-row">
            { delete_button_div }
            <button className="profile-edit-save" onClick={ () => this.submitProfileEdit(piece_id) }>Save</button>
          </div>
        </div>
      )
    } else if (value == "Bio") {
      if (!("Text" in options)) {
        options["Text"] = ""
      }
      additionalOptions = (
        <div className="profile-edit-options">
          <div className="profile-edit-button-row">
            <textarea id={ "profileBioEditForm-" + piece_id.toString() } className="bio-edit-form" type="text" max-length="500" value={options["Text"]} onChange={this.updateModalOption} />
          </div>
          <div className="profile-edit-button-row">
            { delete_button_div }
            <button className="profile-edit-save" onClick={ () => this.submitProfileEdit(piece_id) }>Save</button>
          </div>
        </div>
      )
    } else if (value == "ListenSummary") {
      additionalOptions = (
        <div className="profile-edit-options">
          <div className="profile-edit-button-row">
            { delete_button_div }
            <button className="profile-edit-save" onClick={ () => this.submitProfileEdit(piece_id) }>Save</button>
          </div>
        </div>
      )
    } else if (value == "RecentListens") {
      // Initialize the default values for the modal options
      if (!("Number" in options)) {
        options["Number"] = "5"
      }

      additionalOptions = (
        <div className="profile-edit-options">
          <div className="profile-edit-row">
            <h1 className="profile-edit-options-name">Number of listens</h1>
            <select id= { "recentListenCount-" + piece_id.toString() } onChange={this.updateModalOption} value={options["Number"]}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="profile-edit-button-row">
            { delete_button_div }
            <button className="profile-edit-save" onClick={ () => this.submitProfileEdit(piece_id) }>Save</button>
          </div>
        </div>
      )
    } else if (value == "MusicHighlight") {
      if (!("Type" in options)) {
        options["Type"] = "SelectType"
      }

      var highlightFields;
      if (options["Type"] == "SelectType") {
        highlightFields = "";
      } else if (options["Type"] == "Track") {
        highlightFields = (
          <div className="music-highlight-group">
            <div className="profile-edit-row">
              <h1 className="profile-edit-options-name">Artist</h1>
              <input id={"exist-highlight-edit-artist-track-" + piece_id.toString()} className="highlight-edit-form" type="text" max-length="100"/>
            </div>
            <div className="profile-edit-row">
              <h1 className="profile-edit-options-name">Album</h1>
              <input id={"exist-highlight-edit-album-track-" + piece_id.toString()} className="highlight-edit-form" type="text" max-length="100"/>
            </div>
            <div className="profile-edit-row">
              <h1 className="profile-edit-options-name">Track</h1>
              <input id={"exist-highlight-edit-track-track-" + piece_id.toString()} className="highlight-edit-form" type="text" max-length="100"/>
            </div>
            <div className="profile-edit-row"></div>
            <h1 className="profile-edit-options-name">Note</h1>
            <textarea id={ "musicHighlightNote-" + piece_id.toString() } className="bio-edit-form" type="text" max-length="500" value={options["Note"]} onChange={this.updateModalOption} />
            <div className="profile-edit-button-row">
              { delete_button_div }
              <button className="profile-edit-save" onClick={ () => this.submitProfileEdit(piece_id) }>Save</button>
            </div>
          </div>
        )
      } else if (options["Type"] == "Album") {
        highlightFields = (
          <div className="music-highlight-group">
            <div className="profile-edit-row">
              <h1 className="profile-edit-options-name">Artist</h1>
              <input id={"exist-highlight-edit-artist-album-" + piece_id.toString()} className="highlight-edit-form" type="text" max-length="100"/>
            </div>
            <div className="profile-edit-row">
              <h1 className="profile-edit-options-name">Album</h1>
              <input id={"exist-highlight-edit-album-album-" + piece_id.toString()} className="highlight-edit-form" type="text" max-length="100"/>
            </div>
            <div className="profile-edit-row"></div>
            <h1 className="profile-edit-options-name">Note</h1>
            <textarea id={ "musicHighlightNote-" + piece_id.toString() } className="bio-edit-form" type="text" max-length="500" value={options["Note"]} onChange={this.updateModalOption} />
            <div className="profile-edit-button-row">
              { delete_button_div }
              <button className="profile-edit-save" onClick={ () => this.submitProfileEdit(piece_id) }>Save</button>
            </div>
          </div>
        )
      } else if (options["Type"] == "Artist") {
        highlightFields = (
          <div className="music-highlight-group">
            <div className="profile-edit-row">
              <h1 className="profile-edit-options-name">Artist</h1>
              <input id={"exist-highlight-edit-artist-artist-" + piece_id.toString()} className="highlight-edit-form" type="text" max-length="100"/>
            </div>
            <div className="profile-edit-row"></div>
            <h1 className="profile-edit-options-name">Note</h1>
            <textarea id={ "musicHighlightNote-" + piece_id.toString() } className="bio-edit-form" type="text" max-length="500" value={options["Note"]} onChange={this.updateModalOption} />
            <div className="profile-edit-button-row">
              { delete_button_div }
              <button className="profile-edit-save" onClick={ () => this.submitProfileEdit(piece_id) }>Save</button>
            </div>
          </div>
        )
      }

      additionalOptions = (
        <div className="profile-edit-options">
          <div className="profile-edit-row">
            <h1 className="profile-edit-options-name">Highlight Type</h1>
            <select id={"selectHighlightType-" + piece_id.toString()} onChange={this.updateModalOption} value={options["Type"]}>
                    <option value="SelectType">Select a highlight type...</option>
                    <option value="Track">Track</option>
                    <option value="Album">Album</option>
                    <option value="Artist">Artist</option>
            </select>
          </div>
          { highlightFields }
        </div>
      )
    }

    return (
      <div id={ this.getModalTag(piece_id) } className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body profile-edit-modal">
              <div className="profile-edit-row">
                <h1 className="profile-edit-options-name">Profile Piece</h1>
                <select id={ "profileModalType-" + piece_id.toString() } onChange={this.updateEditProfileModal} value={value}>
                  <option value="SelectComponent">Select a component...</option>
                  <option value="TopTracks">Top Tracks</option>
                  <option value="TopAlbums">Top Albums</option>
                  <option value="TopArtists">Top Artists</option>
                  <option value="Bio">Bio</option>
                  <option value="ListenSummary">Listen Summary</option>
                  <option value="RecentListens">Recent Listens</option>
                  <option value="MusicHighlight">Music Highlight</option>
                </select>
              </div>
              { additionalOptions }
              { this.displayModalHelp() }
            </div>
          </div>
        </div>
      </div>
    )
  }

  onSettingsButtonClick(piece_id) {
    if (piece_id > 0) {
      var type = this.state.profile_pieces_edits[piece_id]["PieceData"]["Type"]
      if (type == "Track") {
        document.getElementById("exist-highlight-edit-track-track-" + piece_id.toString() ).value = this.state.profile_pieces[piece_id]["PieceData"]["Track"]
        document.getElementById("exist-highlight-edit-album-track-" + piece_id.toString() ).value = this.state.profile_pieces[piece_id]["PieceData"]["Album"]
        document.getElementById("exist-highlight-edit-artist-track-" + piece_id.toString() ).value = this.state.profile_pieces[piece_id]["PieceData"]["Artist"]
      } else if (type == "Album") {
        document.getElementById("exist-highlight-edit-album-album-" + piece_id.toString() ).value = this.state.profile_pieces[piece_id]["PieceData"]["Album"]
        document.getElementById("exist-highlight-edit-artist-album-" + piece_id.toString() ).value = this.state.profile_pieces[piece_id]["PieceData"]["Artist"]
      } else if (type == "Artist") {
        document.getElementById("exist-highlight-edit-artist-artist-" + piece_id.toString() ).value = this.state.profile_pieces[piece_id]["PieceData"]["Artist"]
      }
    }
  }

  getSettingsButtonForPiece(piece_id, x_off, y_off) {
    var settingsStyle = {
      right: x_off,
      top: y_off
    };
    if (this.state.isCurrentUser) {
      return (
        <div className="profile-settings-button-group" style={settingsStyle}>
          <i className="fa fa-lg fa-cog profile-piece-settings-button" onClick={() => this.onSettingsButtonClick(piece_id)} aria-hidden="true" data-toggle="modal" data-target={ "#" + this.getModalTag(piece_id)}></i>
        </div>

      )
    } else {
      return "";
    }
  }

  getProfilePieceComponent(piece_id, piece_data) {
    var key = "profile-piece-" + piece_id.toString()
    var props = {
      piece_id: piece_id
    }
    if (piece_data["PieceType"] == "TopTracks") {
      return (
        <div key={key}>
          <div className="profile-component">
            <TopTracks {...props} />
            { this.getSettingsButtonForPiece(piece_id, "118px", "14px") }
          </div>
        { this.getComponentModal(piece_id) }
        </div>
      )
    } else if (piece_data["PieceType"] == "TopAlbums") {
      return (
        <div key={key}>
          <div className="profile-component">
            <TopAlbums {...props}/>
            { this.getSettingsButtonForPiece(piece_id, "118px", "14px") }
          </div>
          { this.getComponentModal(piece_id) }
        </div>
      )
    } else if (piece_data["PieceType"] == "TopArtists") {
      return (
        <div key={key}>
          <div className="profile-component">
            <TopArtists {...props}/>
            { this.getSettingsButtonForPiece(piece_id, "118px", "14px") }
          </div>
          { this.getComponentModal(piece_id) }
        </div>
      )
    } else if (piece_data["PieceType"] == "Bio") {
      props["bio_text"] = piece_data["PieceData"]["Text"]

      return (
        <div key={key}>
          <div className="profile-component">
            <Bio {...props} />
            { this.getSettingsButtonForPiece(piece_id, 0, 0) }
          </div>
          { this.getComponentModal(piece_id) }
        </div>
      )
    } else if (piece_data["PieceType"] == "ListenSummary") {
      return (
        <div key={key}>
          <div className="profile-component">
            <h1>To Implement</h1>
          </div>
          { this.getComponentModal(piece_id) }
        </div>
      )
    } else if (piece_data["PieceType"] == "RecentListens") {
      props["count"] = piece_data["PieceData"]["Number"]
      return (
        <div key={key}>
          <div className="profile-component">
            <RecentListens {...props}/>
            { this.getSettingsButtonForPiece(piece_id, 0, "14px") }
          </div>
          { this.getComponentModal(piece_id) }
        </div>
      )
    } else if (piece_data["PieceType"] == "MusicHighlight") {
      props["type"] = piece_data["PieceData"]["Type"]
      props["note"] = piece_data["PieceData"]["Note"]
      if (piece_data["PieceData"]["Type"] == "Artist") {
        props["music_id"] = piece_data["PieceData"]["Artist_id"]
      } else if (piece_data["PieceData"]["Type"] == "Album") {
        props["music_id"] = piece_data["PieceData"]["Album_id"]
      } else if (piece_data["PieceData"]["Type"] == "Track") {
        props["music_id"] = piece_data["PieceData"]["Track_id"]
      }

      return (
        <div key={key}>
          <div className="profile-component">
            <MusicHighlight {...props}/>
            { this.getSettingsButtonForPiece(piece_id, "10px", "10px") }
          </div>
          { this.getComponentModal(piece_id) }
        </div>
      )
    }
  }

  render() {
    // Two column format. Left and right.
    var components_left = []
    for(let i = 0; i < this.state.profile_layout["Left"].length; ++i) {
      var piece_id = this.state.profile_layout["Left"][i]
      if (piece_id in this.state.profile_pieces) {
        var piece_data = this.state.profile_pieces[piece_id]
        components_left.push(this.getProfilePieceComponent(piece_id, piece_data))
      }    
    }

    var components_right = []
    for(let i = 0; i < this.state.profile_layout["Right"].length; ++i) {
      var piece_id = this.state.profile_layout["Right"][i]
      if (piece_id in this.state.profile_pieces) {
        var piece_data = this.state.profile_pieces[piece_id]
        components_right.push(this.getProfilePieceComponent(piece_id, piece_data))
      }    
    }

    return (
      <div key="profile" className="profile-data">
          <div className="row profile-data-row">
            <div id="col-left" className="col-md-6 col-sm-6 col-xs-12">
            { components_left }
            { this.getNewComponent(-1) }
            </div>
            <div id="col-right" className="col-md-6 col-sm-6 col-xs-12">
            { components_right }
            { this.getNewComponent(-2) }
            </div>
          </div>
        </div>
    )
  }
}