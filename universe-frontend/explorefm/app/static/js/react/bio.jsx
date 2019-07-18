import React from 'react'

export default class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                    bio: this.props.bio_text
                 };
  }

  renderBio() {
    return (
      <div className="bio">
        <h6>{ this.state.bio }</h6>
      </div>
    )
  }

  render() {
    return this.renderBio()
  }
}