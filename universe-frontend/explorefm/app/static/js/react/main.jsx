// main.jsx
// Used as an entry point to render all the current top-level react components.
// React was integrated into an already existing flask project, as a result there are multiple top-level 
// components, hopefully we reach a point where this becomes a few.
require("@babel/register");
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import TimezoneForm from './timezone_form.jsx'
import Profile from './profile.jsx'
import FollowButton from './follow_button.jsx'
import ProfileSnapshot from './profile_snapshot.jsx'

// Render all the things
var domContainer = document.getElementById("profile")
if (domContainer != null) {
  ReactDOM.render(<Profile />, domContainer);
}

domContainer = document.getElementById("timezone-form")
if (domContainer != null) {
  ReactDOM.render(<TimezoneForm />, domContainer);
}

domContainer = document.getElementById("follow-button")
if (domContainer != null) {
  ReactDOM.render(<FollowButton />, domContainer);
}

domContainer = document.getElementById("profile-snapshot")
if (domContainer != null) {
  ReactDOM.render(<ProfileSnapshot />, domContainer);
}
