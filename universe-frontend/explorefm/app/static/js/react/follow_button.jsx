import React from 'react'
import axios from 'axios';

export default class FollowButton extends React.Component {
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