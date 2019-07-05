/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/profile.js":
/*!***********************!*\
  !*** ./js/profile.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

__webpack_require__(/*! @babel/register */ "./node_modules/@babel/register/lib/index.js");

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

'use strict';

var e = React.createElement;

var TopTracks =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopTracks, _React$Component);

  function TopTracks(props) {
    var _this;

    _classCallCheck(this, TopTracks);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopTracks).call(this, props));

    _this.updateTimespan = function (event) {
      _this.state.timespan = event.target.value;

      _this.getNewTimespanData(event.target.value);
    };

    _this.state = {
      timespan: "month",
      top: []
    };
    return _this;
  }

  _createClass(TopTracks, [{
    key: "getSecondsSinceEpoch",
    value: function getSecondsSinceEpoch() {
      var d = new Date();
      console.log(d);
      return Math.floor(d.getTime() / 1000);
    }
  }, {
    key: "getTimeOffsetByT",
    value: function getTimeOffsetByT(t, offset) {
      return t - offset;
    }
  }, {
    key: "getNewTimespanData",
    value: function getNewTimespanData(value) {
      // Get the timeoffsets to be used in the track requests
      var t_start;
      var t_end = this.getSecondsSinceEpoch();

      if (this.state.timespan == "day") {
        t_start = this.getTimeOffsetByT(t_end, 24 * 60 * 60);
      } else if (this.state.timespan == "week") {
        t_start = this.getTimeOffsetByT(t_end, 7 * 24 * 60 * 60);
      } else if (this.state.timespan == "month") {
        t_start = this.getTimeOffsetByT(t_end, 30 * 24 * 60 * 60);
      } else if (this.state.timespan == "year") {
        t_start = this.getTimeOffsetByT(t_end, 365 * 24 * 60 * 60);
      } else if (this.state.timespan == "all") {
        t_start = this.getTimeOffsetByT(t_end, 10 * 365 * 24 * 60 * 60);
      }

      newTop = [];
      var self = this;
      var request = '/user/' + user + '/tracks?t_start=' + t_start.toString() + '&t_end=' + t_end.toString();
      axios.get(request).then(function (response) {
        l = response['data'];

        for (var i = 0; i < l.length; ++i) {
          var k = "track-" + i.toString();
          var width_percent = 100;
          var className;

          if (i % 2 == 0) {
            className = "listen-entry";
          } else {
            className = "listen-entry-shaded";
          }

          var img_path = img_endpoint + l[i]['img_id'] + '-small.jpg';
          newTop.push(React.createElement("div", {
            key: k
          }, React.createElement("div", {
            className: className
          }, React.createElement("img", {
            className: "listen-entry-art",
            src: img_path
          }), React.createElement("div", {
            className: "listen-entry-track"
          }, React.createElement("h6", null, l[i]['artist'], " - ", l[i]['track'])), React.createElement("div", {
            className: "listen-entry-time"
          }, React.createElement("h6", null, l[i]['count'])))));
        }

        self.setState({
          timespan: value,
          top: newTop
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNewTimespanData();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "top-track"
      }, React.createElement("div", {
        className: "profile-section-header-timespan"
      }, React.createElement("h6", null, "Top Tracks"), React.createElement("select", {
        id: "ts-form",
        onChange: this.updateTimespan,
        value: this.state.timespan
      }, React.createElement("option", {
        value: "day"
      }, "Last day"), React.createElement("option", {
        value: "week"
      }, "Last week"), React.createElement("option", {
        value: "month"
      }, "Last month"), React.createElement("option", {
        value: "year"
      }, "Last year"), React.createElement("option", {
        value: "all"
      }, "All time"))), this.state.top);
    }
  }]);

  return TopTracks;
}(React.Component);

var Bio =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Bio, _React$Component2);

  function Bio(props) {
    var _this2;

    _classCallCheck(this, Bio);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Bio).call(this, props));

    _this2.activeEditMode = function (event) {
      _this2.state.inEditMode = true;

      _this2.setState(_this2.state);
    };

    _this2.disableEditModeClearBio = function (event) {
      _this2.state.inEditMode = false;
      document.getElementById("bio-edit-form").value = "";

      _this2.setState(_this2.state);
    };

    _this2.disableEditModeSaveBio = function (event) {
      var new_bio = document.getElementById("bio-edit-form").value;
      _this2.state.inEditMode = false;
      _this2.state.bio = new_bio;

      _this2.setState(_this2.state);

      var self = _assertThisInitialized(_this2);

      var request = '/update/bio/?bio=' + new_bio;
      axios.get(request);
    };

    _this2.state = {
      inEditMode: false,
      bio: "..."
    };
    return _this2;
  }

  _createClass(Bio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      var request = '/user/' + user + '/bio/';
      axios.get(request).then(function (response) {
        self.state.bio = response['data'];
        self.setState(self.state);
      });
    }
  }, {
    key: "renderNoBio",
    value: function renderNoBio(isCurrentUser) {
      if (isCurrentUser) {
        return React.createElement("div", {
          className: "bio"
        }, React.createElement("h6", null, "Add a bio to tell people about you and the music you love."), React.createElement("button", {
          className: "bio-edit",
          onClick: this.activeEditMode
        }, "Add Bio"));
      } else {
        return "";
      }
    }
  }, {
    key: "renderBio",
    value: function renderBio(isCurrentUser) {
      if (isCurrentUser) {
        return React.createElement("div", {
          className: "bio"
        }, React.createElement("h6", null, this.state.bio), React.createElement("button", {
          className: "bio-edit",
          onClick: this.activeEditMode
        }, "Edit Bio"));
      } else {
        return React.createElement("div", {
          className: "bio"
        }, React.createElement("h6", null, this.state.bio));
      }
    }
  }, {
    key: "renderEditMode",
    value: function renderEditMode() {
      return React.createElement("div", {
        "class": "bio-edit-area"
      }, React.createElement("textarea", {
        id: "bio-edit-form",
        className: "bio-edit-form",
        type: "text",
        "max-length": "500"
      }, this.state.bio), React.createElement("div", {
        "class": "bio-button-row"
      }, React.createElement("button", {
        className: "bio-button",
        onClick: this.disableEditModeClearBio
      }, "Cancel"), React.createElement("button", {
        className: "bio-button",
        onClick: this.disableEditModeSaveBio
      }, "Save")));
    }
  }, {
    key: "render",
    value: function render() {
      var isCurrentUser = user == current_user;

      if (this.state.inEditMode) {
        return this.renderEditMode();
      } else {
        if (this.state.bio == "") return this.renderNoBio(isCurrentUser);else {
          return this.renderBio(isCurrentUser);
        }
      }
    }
  }]);

  return Bio;
}(React.Component);

var Highlight =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Highlight, _React$Component3);

  function Highlight(props) {
    var _this3;

    _classCallCheck(this, Highlight);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Highlight).call(this, props));

    _this3.activeEditMode = function (event) {
      _this3.state.addNewHighlightMode = true;

      _this3.setState(_this3.state);
    };

    _this3.disableEditMode = function (event) {
      _this3.state.addNewHighlightMode = false;

      _this3.setState(_this3.state);
    };

    _this3.editHighlightEntry = function (event) {
      var id = event.currentTarget.id;
      var highlight_idx = Number(id.substring(id.length - 1));
      _this3.state.editIndex = highlight_idx;

      _this3.setState(_this3.state);
    };

    _this3.disableEditHighlight = function (event) {
      _this3.state.editIndex = -1;

      _this3.setState(_this3.state);
    };

    _this3.deleteEditHighlight = function (event) {
      var artist = document.getElementById("exist-highlight-edit-artist").value;
      var album = document.getElementById("exist-highlight-edit-album").value;
      var track = document.getElementById("exist-highlight-edit-track").value;
      var id = event.currentTarget.id;
      var highlight_idx = Number(id.substring(id.length - 1));
      var old_highlight = _this3.state.highlights[highlight_idx];
      var old_track, old_album, old_artist;

      if ('track' in old_highlight) {
        old_track = "&old_track=" + old_highlight['track'];
      } else {
        old_track = "";
      }

      if ('album' in old_highlight) {
        old_album = "&old_album=" + old_highlight['album'];
      } else {
        old_album = "";
      }

      if ('artist' in old_highlight) {
        old_artist = "&old_artist=" + old_highlight['artist'];
      } else {
        old_artist = "";
      }

      var self = _assertThisInitialized(_this3);

      var request = '/update/highlight?' + old_artist + old_album + old_track;
      axios.get(request).then(function (response) {
        self.state.highlights = response['data'];

        for (var i = 0; i < self.state.highlights.length; ++i) {
          if (!('track' in self.state.highlights[i])) {
            self.state.highlights[i]['track'] = "";
          }

          if (!('album' in self.state.highlights[i])) {
            self.state.highlights[i]['album'] = "";
          }

          if (!('artist' in self.state.highlights[i])) {
            self.state.highlights[i]['artist'] = "";
          }
        }

        self.state.editIndex = -1;
        self.setState(self.state);
      });
    };

    _this3.saveEditHighlight = function (event) {
      var artist = document.getElementById("exist-highlight-edit-artist").value;
      var album = document.getElementById("exist-highlight-edit-album").value;
      var track = document.getElementById("exist-highlight-edit-track").value;
      var id = event.currentTarget.id;
      var highlight_idx = Number(id.substring(id.length - 1));
      var old_highlight = _this3.state.highlights[highlight_idx];

      if (artist != "") {
        artist = "artist=" + artist;
      }

      if (album != "") {
        album = "&album=" + album;
      } else {
        album = "";
      }

      if (track != "") {
        track = "&track=" + track;
      } else {
        track = "";
      }

      var old_track, old_album, old_artist;

      if ('track' in old_highlight) {
        old_track = "&old_track=" + old_highlight['track'];
      } else {
        old_track = "";
      }

      if ('album' in old_highlight) {
        old_album = "&old_album=" + old_highlight['album'];
      } else {
        old_album = "";
      }

      if ('artist' in old_highlight) {
        old_artist = "&old_artist=" + old_highlight['artist'];
      } else {
        old_artist = "";
      }

      var self = _assertThisInitialized(_this3);

      var request = '/update/highlight?' + artist + album + track + old_artist + old_album + old_track;
      axios.get(request).then(function (response) {
        self.state.highlights = response['data'];

        for (var i = 0; i < self.state.highlights.length; ++i) {
          if (!('track' in self.state.highlights[i])) {
            self.state.highlights[i]['track'] = "";
          }

          if (!('album' in self.state.highlights[i])) {
            self.state.highlights[i]['album'] = "";
          }

          if (!('artist' in self.state.highlights[i])) {
            self.state.highlights[i]['artist'] = "";
          }
        }

        self.state.editIndex = -1;
        self.setState(self.state);
      });
    };

    _this3.saveHighlight = function (event) {
      var artist = document.getElementById("highlight-edit-artist").value;
      var album = document.getElementById("highlight-edit-album").value;
      var track = document.getElementById("highlight-edit-track").value;

      if (artist != "") {
        artist = "artist=" + artist;
      }

      if (album != "") {
        album = "&album=" + album;
      } else {
        album = "";
      }

      if (track != "") {
        track = "&track=" + track;
      } else {
        track = "";
      }

      var self = _assertThisInitialized(_this3);

      var request = '/update/highlight?' + artist + album + track;
      axios.get(request).then(function (response) {
        self.state.highlights = response['data'];

        for (var i = 0; i < self.state.highlights.length; ++i) {
          if (!('track' in self.state.highlights[i])) {
            self.state.highlights[i]['track'] = "";
          }

          if (!('album' in self.state.highlights[i])) {
            self.state.highlights[i]['album'] = "";
          }

          if (!('artist' in self.state.highlights[i])) {
            self.state.highlights[i]['artist'] = "";
          }
        }

        self.state.addNewHighlightMode = false;
        self.setState(self.state);
      });
    };

    _this3.state = {
      addNewHighlightMode: false,
      highlights: [],
      editIndex: -1
    };
    return _this3;
  }

  _createClass(Highlight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      var request = '/user/' + user + '/highlight/';
      axios.get(request).then(function (response) {
        self.state.highlights = response['data'];
        self.setState(self.state);
      });
    }
  }, {
    key: "renderNoHighlights",
    value: function renderNoHighlights(isCurrentUser) {
      return React.createElement("div", {
        className: "no-highlights"
      }, React.createElement("button", {
        className: "no-highlight-edit",
        onClick: this.activeEditMode
      }, "It looks like you have no highlighted tracks... Click here to add your first highlighted track"));
    }
  }, {
    key: "nothing",
    value: function nothing() {}
  }, {
    key: "renderHighlights",
    value: function renderHighlights(isCurrentUser) {
      var highlights = this.state.highlights;
      var self = this;
      var data = [];

      for (var i = 0; i < highlights.length; ++i) {
        var k = "highlight-" + i.toString();
        var img_path = img_endpoint + highlights[i]['img_id'] + '-medium.jpg';

        if (i != this.state.editIndex) {
          data.push(React.createElement("div", {
            key: k,
            id: k,
            className: "highlight-entry-area",
            onClick: this.editHighlightEntry
          }, React.createElement("div", {
            className: "highlight-entry"
          }, React.createElement("img", {
            className: "highlight-img",
            src: img_path
          }), React.createElement("div", {
            className: "highlight-desc"
          }, React.createElement("div", {
            className: "highlight-txt"
          }, highlights[i]['artist'] && React.createElement("h6", null, React.createElement("b", null, "Artist:"), " ", highlights[i]['artist']), highlights[i]['album'] && React.createElement("h6", null, React.createElement("b", null, "Album:"), " ", highlights[i]['album']), highlights[i]['track'] && React.createElement("h6", null, React.createElement("b", null, "Track:"), " ", highlights[i]['track']))))));
        } else {
          var edit_idx = i;
          var key = "edit-highlight-" + edit_idx;
          data.push(React.createElement("div", {
            key: key,
            className: "highlight-edit-entry"
          }, React.createElement("div", {
            className: "highlight-edit-row"
          }, React.createElement("h6", null, "Artist"), React.createElement("input", {
            id: "exist-highlight-edit-artist",
            className: "highlight-edit-form",
            type: "text",
            "max-length": "100"
          })), React.createElement("div", {
            className: "highlight-edit-row"
          }, React.createElement("h6", null, "Album"), React.createElement("input", {
            id: "exist-highlight-edit-album",
            className: "highlight-edit-form",
            type: "text",
            "max-length": "100"
          })), React.createElement("div", {
            className: "highlight-edit-row"
          }, React.createElement("h6", null, "Track"), React.createElement("input", {
            id: "exist-highlight-edit-track",
            className: "highlight-edit-form",
            type: "text",
            "max-length": "100"
          })), React.createElement("div", {
            className: "bio-button-row"
          }, React.createElement("button", {
            id: key,
            className: "bio-button",
            onClick: this.deleteEditHighlight
          }, "Delete"), React.createElement("button", {
            className: "bio-button",
            onClick: this.disableEditHighlight
          }, "Cancel"), React.createElement("button", {
            id: key,
            className: "bio-button",
            onClick: this.saveEditHighlight
          }, "Save"))));
        }
      }

      if (highlights.length < 6) {
        data.push(React.createElement("div", {
          key: "add-highlights",
          className: "highlight-edit-area"
        }, React.createElement("button", {
          className: "bio-edit",
          onClick: this.activeEditMode
        }, "Add highlighted music")));
      }

      return data;
    } // Each highlight can be clicked normally. Edit mode is only 
    // for adding a new highlight. It displays the add a highlight after
    // the other highlights.

  }, {
    key: "renderEditMode",
    value: function renderEditMode() {
      var highlights = this.state.highlights;
      var self = this;
      var data = [];

      for (var i = 0; i < highlights.length; ++i) {
        var k = "highlight-" + i.toString();
        var img_path = img_endpoint + highlights[i]['img_id'] + '-medium.jpg';
        data.push(React.createElement("div", {
          key: k,
          className: "highlight-entry"
        }, React.createElement("img", {
          className: "highlight-img",
          src: img_path
        }), React.createElement("div", {
          className: "highlight-desc"
        }, React.createElement("div", {
          className: "highlight-txt"
        }, highlights[i]['track'] && React.createElement("h6", null, React.createElement("b", null, "Track:"), " ", highlights[i]['track']), highlights[i]['album'] && React.createElement("h6", null, React.createElement("b", null, "Album:"), " ", highlights[i]['album']), highlights[i]['artist'] && React.createElement("h6", null, React.createElement("b", null, "Artist:"), " ", highlights[i]['artist'])))));
      }

      if (highlights.length < 6) {
        data.push(React.createElement("div", {
          key: "highlight-edit",
          className: "highlight-edit-entry"
        }, React.createElement("div", {
          className: "highlight-edit-row"
        }, React.createElement("h6", null, "Artist"), React.createElement("input", {
          id: "highlight-edit-artist",
          className: "highlight-edit-form",
          type: "text",
          "max-length": "100"
        })), React.createElement("div", {
          className: "highlight-edit-row"
        }, React.createElement("h6", null, "Album"), React.createElement("input", {
          id: "highlight-edit-album",
          className: "highlight-edit-form",
          type: "text",
          "max-length": "100"
        })), React.createElement("div", {
          className: "highlight-edit-row"
        }, React.createElement("h6", null, "Track"), React.createElement("input", {
          id: "highlight-edit-track",
          className: "highlight-edit-form",
          type: "text",
          "max-length": "100"
        })), React.createElement("div", {
          className: "bio-button-row"
        }, React.createElement("button", {
          className: "bio-button",
          onClick: this.disableEditMode
        }, "Cancel"), React.createElement("button", {
          className: "bio-button",
          onClick: this.saveHighlight
        }, "Save"))));
      }

      return data;
    }
  }, {
    key: "render",
    value: function render() {
      var isCurrentUser = user == current_user;

      if (this.state.addNewHighlightMode) {
        return this.renderEditMode();
      } else {
        if (this.state.highlights.length == 0) return this.renderNoHighlights(isCurrentUser);else {
          return this.renderHighlights(isCurrentUser);
        }
      }
    }
  }]);

  return Highlight;
}(React.Component);

var TimezoneForm =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(TimezoneForm, _React$Component4);

  function TimezoneForm(props) {
    var _this4;

    _classCallCheck(this, TimezoneForm);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(TimezoneForm).call(this, props));

    _this4.updateTimezone = function (event) {
      _this4.setState({
        timezone: event.target.value
      });

      var request = '/updatetimezone/' + event.target.value.replace(/\//g, "-") + "/";
      axios.post(request);
    };

    _this4.state = {
      timezone: "America/Chicago"
    };
    return _this4;
  }

  _createClass(TimezoneForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        timezone: initial_timezone
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "timezone-form"
      }, React.createElement("select", {
        id: "tz-form",
        onChange: this.updateTimezone,
        value: this.state.timezone
      }, React.createElement("option", {
        value: "Pacific/Midway"
      }, "(GMT-11) Pacific/Midway"), React.createElement("option", {
        value: "Pacific/Niue"
      }, "(GMT-11) Pacific/Niue"), React.createElement("option", {
        value: "Pacific/Pago_Pago"
      }, "(GMT-11) Pacific/Pago_Pago"), React.createElement("option", {
        value: "Pacific/Honolulu"
      }, "(GMT-10) Pacific/Honolulu"), React.createElement("option", {
        value: "Pacific/Rarotonga"
      }, "(GMT-10) Pacific/Rarotonga"), React.createElement("option", {
        value: "Pacific/Tahiti"
      }, "(GMT-10) Pacific/Tahiti"), React.createElement("option", {
        value: "Pacific/Marquesas"
      }, "(GMT-09) Pacific/Marquesas"), React.createElement("option", {
        value: "America/Adak"
      }, "(GMT-09) America/Adak"), React.createElement("option", {
        value: "Pacific/Gambier"
      }, "(GMT-09) Pacific/Gambier"), React.createElement("option", {
        value: "America/Anchorage"
      }, "(GMT-08) America/Anchorage"), React.createElement("option", {
        value: "America/Juneau"
      }, "(GMT-08) America/Juneau"), React.createElement("option", {
        value: "America/Metlakatla"
      }, "(GMT-08) America/Metlakatla"), React.createElement("option", {
        value: "America/Nome"
      }, "(GMT-08) America/Nome"), React.createElement("option", {
        value: "America/Sitka"
      }, "(GMT-08) America/Sitka"), React.createElement("option", {
        value: "America/Yakutat"
      }, "(GMT-08) America/Yakutat"), React.createElement("option", {
        value: "Pacific/Pitcairn"
      }, "(GMT-08) Pacific/Pitcairn"), React.createElement("option", {
        value: "America/Creston"
      }, "(GMT-07) America/Creston"), React.createElement("option", {
        value: "America/Dawson"
      }, "(GMT-07) America/Dawson"), React.createElement("option", {
        value: "America/Dawson_Creek"
      }, "(GMT-07) America/Dawson_Creek"), React.createElement("option", {
        value: "America/Fort_Nelson"
      }, "(GMT-07) America/Fort_Nelson"), React.createElement("option", {
        value: "America/Hermosillo"
      }, "(GMT-07) America/Hermosillo"), React.createElement("option", {
        value: "America/Los_Angeles"
      }, "(GMT-07) America/Los_Angeles"), React.createElement("option", {
        value: "America/Phoenix"
      }, "(GMT-07) America/Phoenix"), React.createElement("option", {
        value: "America/Tijuana"
      }, "(GMT-07) America/Tijuana"), React.createElement("option", {
        value: "America/Vancouver"
      }, "(GMT-07) America/Vancouver"), React.createElement("option", {
        value: "America/Whitehorse"
      }, "(GMT-07) America/Whitehorse"), React.createElement("option", {
        value: "America/Belize"
      }, "(GMT-06) America/Belize"), React.createElement("option", {
        value: "America/Boise"
      }, "(GMT-06) America/Boise"), React.createElement("option", {
        value: "America/Cambridge_Bay"
      }, "(GMT-06) America/Cambridge_Bay"), React.createElement("option", {
        value: "America/Chihuahua"
      }, "(GMT-06) America/Chihuahua"), React.createElement("option", {
        value: "America/Costa_Rica"
      }, "(GMT-06) America/Costa_Rica"), React.createElement("option", {
        value: "America/Denver"
      }, "(GMT-06) America/Denver"), React.createElement("option", {
        value: "America/Edmonton"
      }, "(GMT-06) America/Edmonton"), React.createElement("option", {
        value: "America/El_Salvador"
      }, "(GMT-06) America/El_Salvador"), React.createElement("option", {
        value: "America/Guatemala"
      }, "(GMT-06) America/Guatemala"), React.createElement("option", {
        value: "America/Inuvik"
      }, "(GMT-06) America/Inuvik"), React.createElement("option", {
        value: "America/Managua"
      }, "(GMT-06) America/Managua"), React.createElement("option", {
        value: "America/Mazatlan"
      }, "(GMT-06) America/Mazatlan"), React.createElement("option", {
        value: "America/Ojinaga"
      }, "(GMT-06) America/Ojinaga"), React.createElement("option", {
        value: "America/Regina"
      }, "(GMT-06) America/Regina"), React.createElement("option", {
        value: "America/Swift_Current"
      }, "(GMT-06) America/Swift_Current"), React.createElement("option", {
        value: "America/Tegucigalpa"
      }, "(GMT-06) America/Tegucigalpa"), React.createElement("option", {
        value: "America/Yellowknife"
      }, "(GMT-06) America/Yellowknife"), React.createElement("option", {
        value: "Pacific/Easter"
      }, "(GMT-06) Pacific/Easter"), React.createElement("option", {
        value: "Pacific/Galapagos"
      }, "(GMT-06) Pacific/Galapagos"), React.createElement("option", {
        value: "America/Atikokan"
      }, "(GMT-05) America/Atikokan"), React.createElement("option", {
        value: "America/Bahia_Banderas"
      }, "(GMT-05) America/Bahia_Banderas"), React.createElement("option", {
        value: "America/Bogota"
      }, "(GMT-05) America/Bogota"), React.createElement("option", {
        value: "America/Cancun"
      }, "(GMT-05) America/Cancun"), React.createElement("option", {
        value: "America/Cayman"
      }, "(GMT-05) America/Cayman"), React.createElement("option", {
        value: "America/Chicago"
      }, "(GMT-05) America/Chicago"), React.createElement("option", {
        value: "America/Eirunepe"
      }, "(GMT-05) America/Eirunepe"), React.createElement("option", {
        value: "America/Guayaquil"
      }, "(GMT-05) America/Guayaquil"), React.createElement("option", {
        value: "America/Indiana/Knox"
      }, "(GMT-05) America/Indiana/Knox"), React.createElement("option", {
        value: "America/Indiana/Tell_City"
      }, "(GMT-05) America/Indiana/Tell_City"), React.createElement("option", {
        value: "America/Jamaica"
      }, "(GMT-05) America/Jamaica"), React.createElement("option", {
        value: "America/Lima"
      }, "(GMT-05) America/Lima"), React.createElement("option", {
        value: "America/Matamoros"
      }, "(GMT-05) America/Matamoros"), React.createElement("option", {
        value: "America/Menominee"
      }, "(GMT-05) America/Menominee"), React.createElement("option", {
        value: "America/Merida"
      }, "(GMT-05) America/Merida"), React.createElement("option", {
        value: "America/Mexico_City"
      }, "(GMT-05) America/Mexico_City"), React.createElement("option", {
        value: "America/Monterrey"
      }, "(GMT-05) America/Monterrey"), React.createElement("option", {
        value: "America/North_Dakota/Beulah"
      }, "(GMT-05) America/North_Dakota/Beulah"), React.createElement("option", {
        value: "America/North_Dakota/Center"
      }, "(GMT-05) America/North_Dakota/Center"), React.createElement("option", {
        value: "America/North_Dakota/New_Salem"
      }, "(GMT-05) America/North_Dakota/New_Salem"), React.createElement("option", {
        value: "America/Panama"
      }, "(GMT-05) America/Panama"), React.createElement("option", {
        value: "America/Rainy_River"
      }, "(GMT-05) America/Rainy_River"), React.createElement("option", {
        value: "America/Rankin_Inlet"
      }, "(GMT-05) America/Rankin_Inlet"), React.createElement("option", {
        value: "America/Resolute"
      }, "(GMT-05) America/Resolute"), React.createElement("option", {
        value: "America/Rio_Branco"
      }, "(GMT-05) America/Rio_Branco"), React.createElement("option", {
        value: "America/Winnipeg"
      }, "(GMT-05) America/Winnipeg"), React.createElement("option", {
        value: "America/Anguilla"
      }, "(GMT-04) America/Anguilla"), React.createElement("option", {
        value: "America/Antigua"
      }, "(GMT-04) America/Antigua"), React.createElement("option", {
        value: "America/Aruba"
      }, "(GMT-04) America/Aruba"), React.createElement("option", {
        value: "America/Asuncion"
      }, "(GMT-04) America/Asuncion"), React.createElement("option", {
        value: "America/Barbados"
      }, "(GMT-04) America/Barbados"), React.createElement("option", {
        value: "America/Blanc-Sablon"
      }, "(GMT-04) America/Blanc-Sablon"), React.createElement("option", {
        value: "America/Boa_Vista"
      }, "(GMT-04) America/Boa_Vista"), React.createElement("option", {
        value: "America/Campo_Grande"
      }, "(GMT-04) America/Campo_Grande"), React.createElement("option", {
        value: "America/Caracas"
      }, "(GMT-04) America/Caracas"), React.createElement("option", {
        value: "America/Cuiaba"
      }, "(GMT-04) America/Cuiaba"), React.createElement("option", {
        value: "America/Curacao"
      }, "(GMT-04) America/Curacao"), React.createElement("option", {
        value: "America/Detroit"
      }, "(GMT-04) America/Detroit"), React.createElement("option", {
        value: "America/Dominica"
      }, "(GMT-04) America/Dominica"), React.createElement("option", {
        value: "America/Grand_Turk"
      }, "(GMT-04) America/Grand_Turk"), React.createElement("option", {
        value: "America/Grenada"
      }, "(GMT-04) America/Grenada"), React.createElement("option", {
        value: "America/Guadeloupe"
      }, "(GMT-04) America/Guadeloupe"), React.createElement("option", {
        value: "America/Guyana"
      }, "(GMT-04) America/Guyana"), React.createElement("option", {
        value: "America/Havana"
      }, "(GMT-04) America/Havana"), React.createElement("option", {
        value: "America/Indiana/Indianapolis"
      }, "(GMT-04) America/Indiana/Indianapolis"), React.createElement("option", {
        value: "America/Indiana/Marengo"
      }, "(GMT-04) America/Indiana/Marengo"), React.createElement("option", {
        value: "America/Indiana/Petersburg"
      }, "(GMT-04) America/Indiana/Petersburg"), React.createElement("option", {
        value: "America/Indiana/Vevay"
      }, "(GMT-04) America/Indiana/Vevay"), React.createElement("option", {
        value: "America/Indiana/Vincennes"
      }, "(GMT-04) America/Indiana/Vincennes"), React.createElement("option", {
        value: "America/Indiana/Winamac"
      }, "(GMT-04) America/Indiana/Winamac"), React.createElement("option", {
        value: "America/Iqaluit"
      }, "(GMT-04) America/Iqaluit"), React.createElement("option", {
        value: "America/Kentucky/Louisville"
      }, "(GMT-04) America/Kentucky/Louisville"), React.createElement("option", {
        value: "America/Kentucky/Monticello"
      }, "(GMT-04) America/Kentucky/Monticello"), React.createElement("option", {
        value: "America/Kralendijk"
      }, "(GMT-04) America/Kralendijk"), React.createElement("option", {
        value: "America/La_Paz"
      }, "(GMT-04) America/La_Paz"), React.createElement("option", {
        value: "America/Lower_Princes"
      }, "(GMT-04) America/Lower_Princes"), React.createElement("option", {
        value: "America/Manaus"
      }, "(GMT-04) America/Manaus"), React.createElement("option", {
        value: "America/Marigot"
      }, "(GMT-04) America/Marigot"), React.createElement("option", {
        value: "America/Martinique"
      }, "(GMT-04) America/Martinique"), React.createElement("option", {
        value: "America/Montserrat"
      }, "(GMT-04) America/Montserrat"), React.createElement("option", {
        value: "America/Nassau"
      }, "(GMT-04) America/Nassau"), React.createElement("option", {
        value: "America/New_York"
      }, "(GMT-04) America/New_York"), React.createElement("option", {
        value: "America/Nipigon"
      }, "(GMT-04) America/Nipigon"), React.createElement("option", {
        value: "America/Pangnirtung"
      }, "(GMT-04) America/Pangnirtung"), React.createElement("option", {
        value: "America/Port-au-Prince"
      }, "(GMT-04) America/Port-au-Prince"), React.createElement("option", {
        value: "America/Port_of_Spain"
      }, "(GMT-04) America/Port_of_Spain"), React.createElement("option", {
        value: "America/Porto_Velho"
      }, "(GMT-04) America/Porto_Velho"), React.createElement("option", {
        value: "America/Puerto_Rico"
      }, "(GMT-04) America/Puerto_Rico"), React.createElement("option", {
        value: "America/Santiago"
      }, "(GMT-04) America/Santiago"), React.createElement("option", {
        value: "America/Santo_Domingo"
      }, "(GMT-04) America/Santo_Domingo"), React.createElement("option", {
        value: "America/St_Barthelemy"
      }, "(GMT-04) America/St_Barthelemy"), React.createElement("option", {
        value: "America/St_Kitts"
      }, "(GMT-04) America/St_Kitts"), React.createElement("option", {
        value: "America/St_Lucia"
      }, "(GMT-04) America/St_Lucia"), React.createElement("option", {
        value: "America/St_Thomas"
      }, "(GMT-04) America/St_Thomas"), React.createElement("option", {
        value: "America/St_Vincent"
      }, "(GMT-04) America/St_Vincent"), React.createElement("option", {
        value: "America/Thunder_Bay"
      }, "(GMT-04) America/Thunder_Bay"), React.createElement("option", {
        value: "America/Toronto"
      }, "(GMT-04) America/Toronto"), React.createElement("option", {
        value: "America/Tortola"
      }, "(GMT-04) America/Tortola"), React.createElement("option", {
        value: "America/Araguaina"
      }, "(GMT-03) America/Araguaina"), React.createElement("option", {
        value: "America/Argentina/Buenos_Aires"
      }, "(GMT-03) America/Argentina/Buenos_Aires"), React.createElement("option", {
        value: "America/Argentina/Catamarca"
      }, "(GMT-03) America/Argentina/Catamarca"), React.createElement("option", {
        value: "America/Argentina/Cordoba"
      }, "(GMT-03) America/Argentina/Cordoba"), React.createElement("option", {
        value: "America/Argentina/Jujuy"
      }, "(GMT-03) America/Argentina/Jujuy"), React.createElement("option", {
        value: "America/Argentina/La_Rioja"
      }, "(GMT-03) America/Argentina/La_Rioja"), React.createElement("option", {
        value: "America/Argentina/Mendoza"
      }, "(GMT-03) America/Argentina/Mendoza"), React.createElement("option", {
        value: "America/Argentina/Rio_Gallegos"
      }, "(GMT-03) America/Argentina/Rio_Gallegos"), React.createElement("option", {
        value: "America/Argentina/Salta"
      }, "(GMT-03) America/Argentina/Salta"), React.createElement("option", {
        value: "America/Argentina/San_Juan"
      }, "(GMT-03) America/Argentina/San_Juan"), React.createElement("option", {
        value: "America/Argentina/San_Luis"
      }, "(GMT-03) America/Argentina/San_Luis"), React.createElement("option", {
        value: "America/Argentina/Tucuman"
      }, "(GMT-03) America/Argentina/Tucuman"), React.createElement("option", {
        value: "America/Argentina/Ushuaia"
      }, "(GMT-03) America/Argentina/Ushuaia"), React.createElement("option", {
        value: "America/Bahia"
      }, "(GMT-03) America/Bahia"), React.createElement("option", {
        value: "America/Belem"
      }, "(GMT-03) America/Belem"), React.createElement("option", {
        value: "America/Cayenne"
      }, "(GMT-03) America/Cayenne"), React.createElement("option", {
        value: "America/Fortaleza"
      }, "(GMT-03) America/Fortaleza"), React.createElement("option", {
        value: "America/Glace_Bay"
      }, "(GMT-03) America/Glace_Bay"), React.createElement("option", {
        value: "America/Goose_Bay"
      }, "(GMT-03) America/Goose_Bay"), React.createElement("option", {
        value: "America/Halifax"
      }, "(GMT-03) America/Halifax"), React.createElement("option", {
        value: "America/Maceio"
      }, "(GMT-03) America/Maceio"), React.createElement("option", {
        value: "America/Moncton"
      }, "(GMT-03) America/Moncton"), React.createElement("option", {
        value: "America/Montevideo"
      }, "(GMT-03) America/Montevideo"), React.createElement("option", {
        value: "America/Paramaribo"
      }, "(GMT-03) America/Paramaribo"), React.createElement("option", {
        value: "America/Punta_Arenas"
      }, "(GMT-03) America/Punta_Arenas"), React.createElement("option", {
        value: "America/Recife"
      }, "(GMT-03) America/Recife"), React.createElement("option", {
        value: "America/Santarem"
      }, "(GMT-03) America/Santarem"), React.createElement("option", {
        value: "America/Sao_Paulo"
      }, "(GMT-03) America/Sao_Paulo"), React.createElement("option", {
        value: "America/Thule"
      }, "(GMT-03) America/Thule"), React.createElement("option", {
        value: "Antarctica/Palmer"
      }, "(GMT-03) Antarctica/Palmer"), React.createElement("option", {
        value: "Antarctica/Rothera"
      }, "(GMT-03) Antarctica/Rothera"), React.createElement("option", {
        value: "Atlantic/Bermuda"
      }, "(GMT-03) Atlantic/Bermuda"), React.createElement("option", {
        value: "Atlantic/Stanley"
      }, "(GMT-03) Atlantic/Stanley"), React.createElement("option", {
        value: "America/St_Johns"
      }, "(GMT-02) America/St_Johns"), React.createElement("option", {
        value: "America/Godthab"
      }, "(GMT-02) America/Godthab"), React.createElement("option", {
        value: "America/Miquelon"
      }, "(GMT-02) America/Miquelon"), React.createElement("option", {
        value: "America/Noronha"
      }, "(GMT-02) America/Noronha"), React.createElement("option", {
        value: "Atlantic/South_Georgia"
      }, "(GMT-02) Atlantic/South_Georgia"), React.createElement("option", {
        value: "Atlantic/Cape_Verde"
      }, "(GMT-01) Atlantic/Cape_Verde"), React.createElement("option", {
        value: "Africa/Abidjan"
      }, "(GMT+00) Africa/Abidjan"), React.createElement("option", {
        value: "Africa/Accra"
      }, "(GMT+00) Africa/Accra"), React.createElement("option", {
        value: "Africa/Bamako"
      }, "(GMT+00) Africa/Bamako"), React.createElement("option", {
        value: "Africa/Banjul"
      }, "(GMT+00) Africa/Banjul"), React.createElement("option", {
        value: "Africa/Bissau"
      }, "(GMT+00) Africa/Bissau"), React.createElement("option", {
        value: "Africa/Conakry"
      }, "(GMT+00) Africa/Conakry"), React.createElement("option", {
        value: "Africa/Dakar"
      }, "(GMT+00) Africa/Dakar"), React.createElement("option", {
        value: "Africa/Freetown"
      }, "(GMT+00) Africa/Freetown"), React.createElement("option", {
        value: "Africa/Lome"
      }, "(GMT+00) Africa/Lome"), React.createElement("option", {
        value: "Africa/Monrovia"
      }, "(GMT+00) Africa/Monrovia"), React.createElement("option", {
        value: "Africa/Nouakchott"
      }, "(GMT+00) Africa/Nouakchott"), React.createElement("option", {
        value: "Africa/Ouagadougou"
      }, "(GMT+00) Africa/Ouagadougou"), React.createElement("option", {
        value: "Africa/Sao_Tome"
      }, "(GMT+00) Africa/Sao_Tome"), React.createElement("option", {
        value: "America/Danmarkshavn"
      }, "(GMT+00) America/Danmarkshavn"), React.createElement("option", {
        value: "America/Scoresbysund"
      }, "(GMT+00) America/Scoresbysund"), React.createElement("option", {
        value: "Atlantic/Azores"
      }, "(GMT+00) Atlantic/Azores"), React.createElement("option", {
        value: "Atlantic/Reykjavik"
      }, "(GMT+00) Atlantic/Reykjavik"), React.createElement("option", {
        value: "Atlantic/St_Helena"
      }, "(GMT+00) Atlantic/St_Helena"), React.createElement("option", {
        value: "UTC"
      }, "(GMT+00) UTC"), React.createElement("option", {
        value: "Africa/Algiers"
      }, "(GMT+01) Africa/Algiers"), React.createElement("option", {
        value: "Africa/Bangui"
      }, "(GMT+01) Africa/Bangui"), React.createElement("option", {
        value: "Africa/Brazzaville"
      }, "(GMT+01) Africa/Brazzaville"), React.createElement("option", {
        value: "Africa/Casablanca"
      }, "(GMT+01) Africa/Casablanca"), React.createElement("option", {
        value: "Africa/Douala"
      }, "(GMT+01) Africa/Douala"), React.createElement("option", {
        value: "Africa/El_Aaiun"
      }, "(GMT+01) Africa/El_Aaiun"), React.createElement("option", {
        value: "Africa/Kinshasa"
      }, "(GMT+01) Africa/Kinshasa"), React.createElement("option", {
        value: "Africa/Lagos"
      }, "(GMT+01) Africa/Lagos"), React.createElement("option", {
        value: "Africa/Libreville"
      }, "(GMT+01) Africa/Libreville"), React.createElement("option", {
        value: "Africa/Luanda"
      }, "(GMT+01) Africa/Luanda"), React.createElement("option", {
        value: "Africa/Malabo"
      }, "(GMT+01) Africa/Malabo"), React.createElement("option", {
        value: "Africa/Ndjamena"
      }, "(GMT+01) Africa/Ndjamena"), React.createElement("option", {
        value: "Africa/Niamey"
      }, "(GMT+01) Africa/Niamey"), React.createElement("option", {
        value: "Africa/Porto-Novo"
      }, "(GMT+01) Africa/Porto-Novo"), React.createElement("option", {
        value: "Africa/Tunis"
      }, "(GMT+01) Africa/Tunis"), React.createElement("option", {
        value: "Africa/Windhoek"
      }, "(GMT+01) Africa/Windhoek"), React.createElement("option", {
        value: "Atlantic/Canary"
      }, "(GMT+01) Atlantic/Canary"), React.createElement("option", {
        value: "Atlantic/Faroe"
      }, "(GMT+01) Atlantic/Faroe"), React.createElement("option", {
        value: "Atlantic/Madeira"
      }, "(GMT+01) Atlantic/Madeira"), React.createElement("option", {
        value: "Europe/Dublin"
      }, "(GMT+01) Europe/Dublin"), React.createElement("option", {
        value: "Europe/Guernsey"
      }, "(GMT+01) Europe/Guernsey"), React.createElement("option", {
        value: "Europe/Isle_of_Man"
      }, "(GMT+01) Europe/Isle_of_Man"), React.createElement("option", {
        value: "Europe/Jersey"
      }, "(GMT+01) Europe/Jersey"), React.createElement("option", {
        value: "Europe/Lisbon"
      }, "(GMT+01) Europe/Lisbon"), React.createElement("option", {
        value: "Europe/London"
      }, "(GMT+01) Europe/London"), React.createElement("option", {
        value: "Africa/Blantyre"
      }, "(GMT+02) Africa/Blantyre"), React.createElement("option", {
        value: "Africa/Bujumbura"
      }, "(GMT+02) Africa/Bujumbura"), React.createElement("option", {
        value: "Africa/Cairo"
      }, "(GMT+02) Africa/Cairo"), React.createElement("option", {
        value: "Africa/Ceuta"
      }, "(GMT+02) Africa/Ceuta"), React.createElement("option", {
        value: "Africa/Gaborone"
      }, "(GMT+02) Africa/Gaborone"), React.createElement("option", {
        value: "Africa/Harare"
      }, "(GMT+02) Africa/Harare"), React.createElement("option", {
        value: "Africa/Johannesburg"
      }, "(GMT+02) Africa/Johannesburg"), React.createElement("option", {
        value: "Africa/Kigali"
      }, "(GMT+02) Africa/Kigali"), React.createElement("option", {
        value: "Africa/Lubumbashi"
      }, "(GMT+02) Africa/Lubumbashi"), React.createElement("option", {
        value: "Africa/Lusaka"
      }, "(GMT+02) Africa/Lusaka"), React.createElement("option", {
        value: "Africa/Maputo"
      }, "(GMT+02) Africa/Maputo"), React.createElement("option", {
        value: "Africa/Maseru"
      }, "(GMT+02) Africa/Maseru"), React.createElement("option", {
        value: "Africa/Mbabane"
      }, "(GMT+02) Africa/Mbabane"), React.createElement("option", {
        value: "Africa/Tripoli"
      }, "(GMT+02) Africa/Tripoli"), React.createElement("option", {
        value: "Antarctica/Troll"
      }, "(GMT+02) Antarctica/Troll"), React.createElement("option", {
        value: "Arctic/Longyearbyen"
      }, "(GMT+02) Arctic/Longyearbyen"), React.createElement("option", {
        value: "Europe/Amsterdam"
      }, "(GMT+02) Europe/Amsterdam"), React.createElement("option", {
        value: "Europe/Andorra"
      }, "(GMT+02) Europe/Andorra"), React.createElement("option", {
        value: "Europe/Belgrade"
      }, "(GMT+02) Europe/Belgrade"), React.createElement("option", {
        value: "Europe/Berlin"
      }, "(GMT+02) Europe/Berlin"), React.createElement("option", {
        value: "Europe/Bratislava"
      }, "(GMT+02) Europe/Bratislava"), React.createElement("option", {
        value: "Europe/Brussels"
      }, "(GMT+02) Europe/Brussels"), React.createElement("option", {
        value: "Europe/Budapest"
      }, "(GMT+02) Europe/Budapest"), React.createElement("option", {
        value: "Europe/Busingen"
      }, "(GMT+02) Europe/Busingen"), React.createElement("option", {
        value: "Europe/Copenhagen"
      }, "(GMT+02) Europe/Copenhagen"), React.createElement("option", {
        value: "Europe/Gibraltar"
      }, "(GMT+02) Europe/Gibraltar"), React.createElement("option", {
        value: "Europe/Kaliningrad"
      }, "(GMT+02) Europe/Kaliningrad"), React.createElement("option", {
        value: "Europe/Ljubljana"
      }, "(GMT+02) Europe/Ljubljana"), React.createElement("option", {
        value: "Europe/Luxembourg"
      }, "(GMT+02) Europe/Luxembourg"), React.createElement("option", {
        value: "Europe/Madrid"
      }, "(GMT+02) Europe/Madrid"), React.createElement("option", {
        value: "Europe/Malta"
      }, "(GMT+02) Europe/Malta"), React.createElement("option", {
        value: "Europe/Monaco"
      }, "(GMT+02) Europe/Monaco"), React.createElement("option", {
        value: "Europe/Oslo"
      }, "(GMT+02) Europe/Oslo"), React.createElement("option", {
        value: "Europe/Paris"
      }, "(GMT+02) Europe/Paris"), React.createElement("option", {
        value: "Europe/Podgorica"
      }, "(GMT+02) Europe/Podgorica"), React.createElement("option", {
        value: "Europe/Prague"
      }, "(GMT+02) Europe/Prague"), React.createElement("option", {
        value: "Europe/Rome"
      }, "(GMT+02) Europe/Rome"), React.createElement("option", {
        value: "Europe/San_Marino"
      }, "(GMT+02) Europe/San_Marino"), React.createElement("option", {
        value: "Europe/Sarajevo"
      }, "(GMT+02) Europe/Sarajevo"), React.createElement("option", {
        value: "Europe/Skopje"
      }, "(GMT+02) Europe/Skopje"), React.createElement("option", {
        value: "Europe/Stockholm"
      }, "(GMT+02) Europe/Stockholm"), React.createElement("option", {
        value: "Europe/Tirane"
      }, "(GMT+02) Europe/Tirane"), React.createElement("option", {
        value: "Europe/Vaduz"
      }, "(GMT+02) Europe/Vaduz"), React.createElement("option", {
        value: "Europe/Vatican"
      }, "(GMT+02) Europe/Vatican"), React.createElement("option", {
        value: "Europe/Vienna"
      }, "(GMT+02) Europe/Vienna"), React.createElement("option", {
        value: "Europe/Warsaw"
      }, "(GMT+02) Europe/Warsaw"), React.createElement("option", {
        value: "Europe/Zagreb"
      }, "(GMT+02) Europe/Zagreb"), React.createElement("option", {
        value: "Europe/Zurich"
      }, "(GMT+02) Europe/Zurich"), React.createElement("option", {
        value: "Africa/Addis_Ababa"
      }, "(GMT+03) Africa/Addis_Ababa"), React.createElement("option", {
        value: "Africa/Asmara"
      }, "(GMT+03) Africa/Asmara"), React.createElement("option", {
        value: "Africa/Dar_es_Salaam"
      }, "(GMT+03) Africa/Dar_es_Salaam"), React.createElement("option", {
        value: "Africa/Djibouti"
      }, "(GMT+03) Africa/Djibouti"), React.createElement("option", {
        value: "Africa/Juba"
      }, "(GMT+03) Africa/Juba"), React.createElement("option", {
        value: "Africa/Kampala"
      }, "(GMT+03) Africa/Kampala"), React.createElement("option", {
        value: "Africa/Khartoum"
      }, "(GMT+03) Africa/Khartoum"), React.createElement("option", {
        value: "Africa/Mogadishu"
      }, "(GMT+03) Africa/Mogadishu"), React.createElement("option", {
        value: "Africa/Nairobi"
      }, "(GMT+03) Africa/Nairobi"), React.createElement("option", {
        value: "Antarctica/Syowa"
      }, "(GMT+03) Antarctica/Syowa"), React.createElement("option", {
        value: "Asia/Aden"
      }, "(GMT+03) Asia/Aden"), React.createElement("option", {
        value: "Asia/Amman"
      }, "(GMT+03) Asia/Amman"), React.createElement("option", {
        value: "Asia/Baghdad"
      }, "(GMT+03) Asia/Baghdad"), React.createElement("option", {
        value: "Asia/Bahrain"
      }, "(GMT+03) Asia/Bahrain"), React.createElement("option", {
        value: "Asia/Beirut"
      }, "(GMT+03) Asia/Beirut"), React.createElement("option", {
        value: "Asia/Damascus"
      }, "(GMT+03) Asia/Damascus"), React.createElement("option", {
        value: "Asia/Famagusta"
      }, "(GMT+03) Asia/Famagusta"), React.createElement("option", {
        value: "Asia/Gaza"
      }, "(GMT+03) Asia/Gaza"), React.createElement("option", {
        value: "Asia/Hebron"
      }, "(GMT+03) Asia/Hebron"), React.createElement("option", {
        value: "Asia/Jerusalem"
      }, "(GMT+03) Asia/Jerusalem"), React.createElement("option", {
        value: "Asia/Kuwait"
      }, "(GMT+03) Asia/Kuwait"), React.createElement("option", {
        value: "Asia/Nicosia"
      }, "(GMT+03) Asia/Nicosia"), React.createElement("option", {
        value: "Asia/Qatar"
      }, "(GMT+03) Asia/Qatar"), React.createElement("option", {
        value: "Asia/Riyadh"
      }, "(GMT+03) Asia/Riyadh"), React.createElement("option", {
        value: "Europe/Athens"
      }, "(GMT+03) Europe/Athens"), React.createElement("option", {
        value: "Europe/Bucharest"
      }, "(GMT+03) Europe/Bucharest"), React.createElement("option", {
        value: "Europe/Chisinau"
      }, "(GMT+03) Europe/Chisinau"), React.createElement("option", {
        value: "Europe/Helsinki"
      }, "(GMT+03) Europe/Helsinki"), React.createElement("option", {
        value: "Europe/Istanbul"
      }, "(GMT+03) Europe/Istanbul"), React.createElement("option", {
        value: "Europe/Kiev"
      }, "(GMT+03) Europe/Kiev"), React.createElement("option", {
        value: "Europe/Kirov"
      }, "(GMT+03) Europe/Kirov"), React.createElement("option", {
        value: "Europe/Mariehamn"
      }, "(GMT+03) Europe/Mariehamn"), React.createElement("option", {
        value: "Europe/Minsk"
      }, "(GMT+03) Europe/Minsk"), React.createElement("option", {
        value: "Europe/Moscow"
      }, "(GMT+03) Europe/Moscow"), React.createElement("option", {
        value: "Europe/Riga"
      }, "(GMT+03) Europe/Riga"), React.createElement("option", {
        value: "Europe/Simferopol"
      }, "(GMT+03) Europe/Simferopol"), React.createElement("option", {
        value: "Europe/Sofia"
      }, "(GMT+03) Europe/Sofia"), React.createElement("option", {
        value: "Europe/Tallinn"
      }, "(GMT+03) Europe/Tallinn"), React.createElement("option", {
        value: "Europe/Uzhgorod"
      }, "(GMT+03) Europe/Uzhgorod"), React.createElement("option", {
        value: "Europe/Vilnius"
      }, "(GMT+03) Europe/Vilnius"), React.createElement("option", {
        value: "Europe/Volgograd"
      }, "(GMT+03) Europe/Volgograd"), React.createElement("option", {
        value: "Europe/Zaporozhye"
      }, "(GMT+03) Europe/Zaporozhye"), React.createElement("option", {
        value: "Indian/Antananarivo"
      }, "(GMT+03) Indian/Antananarivo"), React.createElement("option", {
        value: "Indian/Comoro"
      }, "(GMT+03) Indian/Comoro"), React.createElement("option", {
        value: "Indian/Mayotte"
      }, "(GMT+03) Indian/Mayotte"), React.createElement("option", {
        value: "Asia/Baku"
      }, "(GMT+04) Asia/Baku"), React.createElement("option", {
        value: "Asia/Dubai"
      }, "(GMT+04) Asia/Dubai"), React.createElement("option", {
        value: "Asia/Muscat"
      }, "(GMT+04) Asia/Muscat"), React.createElement("option", {
        value: "Asia/Tbilisi"
      }, "(GMT+04) Asia/Tbilisi"), React.createElement("option", {
        value: "Asia/Yerevan"
      }, "(GMT+04) Asia/Yerevan"), React.createElement("option", {
        value: "Europe/Astrakhan"
      }, "(GMT+04) Europe/Astrakhan"), React.createElement("option", {
        value: "Europe/Samara"
      }, "(GMT+04) Europe/Samara"), React.createElement("option", {
        value: "Europe/Saratov"
      }, "(GMT+04) Europe/Saratov"), React.createElement("option", {
        value: "Europe/Ulyanovsk"
      }, "(GMT+04) Europe/Ulyanovsk"), React.createElement("option", {
        value: "Indian/Mahe"
      }, "(GMT+04) Indian/Mahe"), React.createElement("option", {
        value: "Indian/Mauritius"
      }, "(GMT+04) Indian/Mauritius"), React.createElement("option", {
        value: "Indian/Reunion"
      }, "(GMT+04) Indian/Reunion"), React.createElement("option", {
        value: "Asia/Kabul"
      }, "(GMT+04) Asia/Kabul"), React.createElement("option", {
        value: "Asia/Tehran"
      }, "(GMT+04) Asia/Tehran"), React.createElement("option", {
        value: "Antarctica/Mawson"
      }, "(GMT+05) Antarctica/Mawson"), React.createElement("option", {
        value: "Asia/Aqtau"
      }, "(GMT+05) Asia/Aqtau"), React.createElement("option", {
        value: "Asia/Aqtobe"
      }, "(GMT+05) Asia/Aqtobe"), React.createElement("option", {
        value: "Asia/Ashgabat"
      }, "(GMT+05) Asia/Ashgabat"), React.createElement("option", {
        value: "Asia/Atyrau"
      }, "(GMT+05) Asia/Atyrau"), React.createElement("option", {
        value: "Asia/Dushanbe"
      }, "(GMT+05) Asia/Dushanbe"), React.createElement("option", {
        value: "Asia/Karachi"
      }, "(GMT+05) Asia/Karachi"), React.createElement("option", {
        value: "Asia/Oral"
      }, "(GMT+05) Asia/Oral"), React.createElement("option", {
        value: "Asia/Samarkand"
      }, "(GMT+05) Asia/Samarkand"), React.createElement("option", {
        value: "Asia/Tashkent"
      }, "(GMT+05) Asia/Tashkent"), React.createElement("option", {
        value: "Asia/Yekaterinburg"
      }, "(GMT+05) Asia/Yekaterinburg"), React.createElement("option", {
        value: "Indian/Kerguelen"
      }, "(GMT+05) Indian/Kerguelen"), React.createElement("option", {
        value: "Indian/Maldives"
      }, "(GMT+05) Indian/Maldives"), React.createElement("option", {
        value: "Asia/Colombo"
      }, "(GMT+05) Asia/Colombo"), React.createElement("option", {
        value: "Asia/Kolkata"
      }, "(GMT+05) Asia/Kolkata"), React.createElement("option", {
        value: "Asia/Kathmandu"
      }, "(GMT+05) Asia/Kathmandu"), React.createElement("option", {
        value: "Antarctica/Vostok"
      }, "(GMT+06) Antarctica/Vostok"), React.createElement("option", {
        value: "Asia/Almaty"
      }, "(GMT+06) Asia/Almaty"), React.createElement("option", {
        value: "Asia/Bishkek"
      }, "(GMT+06) Asia/Bishkek"), React.createElement("option", {
        value: "Asia/Dhaka"
      }, "(GMT+06) Asia/Dhaka"), React.createElement("option", {
        value: "Asia/Omsk"
      }, "(GMT+06) Asia/Omsk"), React.createElement("option", {
        value: "Asia/Qyzylorda"
      }, "(GMT+06) Asia/Qyzylorda"), React.createElement("option", {
        value: "Asia/Thimphu"
      }, "(GMT+06) Asia/Thimphu"), React.createElement("option", {
        value: "Asia/Urumqi"
      }, "(GMT+06) Asia/Urumqi"), React.createElement("option", {
        value: "Indian/Chagos"
      }, "(GMT+06) Indian/Chagos"), React.createElement("option", {
        value: "Asia/Yangon"
      }, "(GMT+06) Asia/Yangon"), React.createElement("option", {
        value: "Indian/Cocos"
      }, "(GMT+06) Indian/Cocos"), React.createElement("option", {
        value: "Antarctica/Davis"
      }, "(GMT+07) Antarctica/Davis"), React.createElement("option", {
        value: "Asia/Bangkok"
      }, "(GMT+07) Asia/Bangkok"), React.createElement("option", {
        value: "Asia/Barnaul"
      }, "(GMT+07) Asia/Barnaul"), React.createElement("option", {
        value: "Asia/Ho_Chi_Minh"
      }, "(GMT+07) Asia/Ho_Chi_Minh"), React.createElement("option", {
        value: "Asia/Hovd"
      }, "(GMT+07) Asia/Hovd"), React.createElement("option", {
        value: "Asia/Jakarta"
      }, "(GMT+07) Asia/Jakarta"), React.createElement("option", {
        value: "Asia/Krasnoyarsk"
      }, "(GMT+07) Asia/Krasnoyarsk"), React.createElement("option", {
        value: "Asia/Novokuznetsk"
      }, "(GMT+07) Asia/Novokuznetsk"), React.createElement("option", {
        value: "Asia/Novosibirsk"
      }, "(GMT+07) Asia/Novosibirsk"), React.createElement("option", {
        value: "Asia/Phnom_Penh"
      }, "(GMT+07) Asia/Phnom_Penh"), React.createElement("option", {
        value: "Asia/Pontianak"
      }, "(GMT+07) Asia/Pontianak"), React.createElement("option", {
        value: "Asia/Tomsk"
      }, "(GMT+07) Asia/Tomsk"), React.createElement("option", {
        value: "Asia/Vientiane"
      }, "(GMT+07) Asia/Vientiane"), React.createElement("option", {
        value: "Indian/Christmas"
      }, "(GMT+07) Indian/Christmas"), React.createElement("option", {
        value: "Asia/Brunei"
      }, "(GMT+08) Asia/Brunei"), React.createElement("option", {
        value: "Asia/Choibalsan"
      }, "(GMT+08) Asia/Choibalsan"), React.createElement("option", {
        value: "Asia/Hong_Kong"
      }, "(GMT+08) Asia/Hong_Kong"), React.createElement("option", {
        value: "Asia/Irkutsk"
      }, "(GMT+08) Asia/Irkutsk"), React.createElement("option", {
        value: "Asia/Kuala_Lumpur"
      }, "(GMT+08) Asia/Kuala_Lumpur"), React.createElement("option", {
        value: "Asia/Kuching"
      }, "(GMT+08) Asia/Kuching"), React.createElement("option", {
        value: "Asia/Macau"
      }, "(GMT+08) Asia/Macau"), React.createElement("option", {
        value: "Asia/Makassar"
      }, "(GMT+08) Asia/Makassar"), React.createElement("option", {
        value: "Asia/Manila"
      }, "(GMT+08) Asia/Manila"), React.createElement("option", {
        value: "Asia/Shanghai"
      }, "(GMT+08) Asia/Shanghai"), React.createElement("option", {
        value: "Asia/Singapore"
      }, "(GMT+08) Asia/Singapore"), React.createElement("option", {
        value: "Asia/Taipei"
      }, "(GMT+08) Asia/Taipei"), React.createElement("option", {
        value: "Asia/Ulaanbaatar"
      }, "(GMT+08) Asia/Ulaanbaatar"), React.createElement("option", {
        value: "Australia/Perth"
      }, "(GMT+08) Australia/Perth"), React.createElement("option", {
        value: "Asia/Pyongyang"
      }, "(GMT+08) Asia/Pyongyang"), React.createElement("option", {
        value: "Australia/Eucla"
      }, "(GMT+08) Australia/Eucla"), React.createElement("option", {
        value: "Asia/Chita"
      }, "(GMT+09) Asia/Chita"), React.createElement("option", {
        value: "Asia/Dili"
      }, "(GMT+09) Asia/Dili"), React.createElement("option", {
        value: "Asia/Jayapura"
      }, "(GMT+09) Asia/Jayapura"), React.createElement("option", {
        value: "Asia/Khandyga"
      }, "(GMT+09) Asia/Khandyga"), React.createElement("option", {
        value: "Asia/Seoul"
      }, "(GMT+09) Asia/Seoul"), React.createElement("option", {
        value: "Asia/Tokyo"
      }, "(GMT+09) Asia/Tokyo"), React.createElement("option", {
        value: "Asia/Yakutsk"
      }, "(GMT+09) Asia/Yakutsk"), React.createElement("option", {
        value: "Pacific/Palau"
      }, "(GMT+09) Pacific/Palau"), React.createElement("option", {
        value: "Australia/Adelaide"
      }, "(GMT+09) Australia/Adelaide"), React.createElement("option", {
        value: "Australia/Broken_Hill"
      }, "(GMT+09) Australia/Broken_Hill"), React.createElement("option", {
        value: "Australia/Darwin"
      }, "(GMT+09) Australia/Darwin"), React.createElement("option", {
        value: "Antarctica/DumontDUrville"
      }, "(GMT+10) Antarctica/DumontDUrville"), React.createElement("option", {
        value: "Asia/Ust-Nera"
      }, "(GMT+10) Asia/Ust-Nera"), React.createElement("option", {
        value: "Asia/Vladivostok"
      }, "(GMT+10) Asia/Vladivostok"), React.createElement("option", {
        value: "Australia/Brisbane"
      }, "(GMT+10) Australia/Brisbane"), React.createElement("option", {
        value: "Australia/Currie"
      }, "(GMT+10) Australia/Currie"), React.createElement("option", {
        value: "Australia/Hobart"
      }, "(GMT+10) Australia/Hobart"), React.createElement("option", {
        value: "Australia/Lindeman"
      }, "(GMT+10) Australia/Lindeman"), React.createElement("option", {
        value: "Australia/Melbourne"
      }, "(GMT+10) Australia/Melbourne"), React.createElement("option", {
        value: "Australia/Sydney"
      }, "(GMT+10) Australia/Sydney"), React.createElement("option", {
        value: "Pacific/Chuuk"
      }, "(GMT+10) Pacific/Chuuk"), React.createElement("option", {
        value: "Pacific/Guam"
      }, "(GMT+10) Pacific/Guam"), React.createElement("option", {
        value: "Pacific/Port_Moresby"
      }, "(GMT+10) Pacific/Port_Moresby"), React.createElement("option", {
        value: "Pacific/Saipan"
      }, "(GMT+10) Pacific/Saipan"), React.createElement("option", {
        value: "Australia/Lord_Howe"
      }, "(GMT+10) Australia/Lord_Howe"), React.createElement("option", {
        value: "Antarctica/Casey"
      }, "(GMT+11) Antarctica/Casey"), React.createElement("option", {
        value: "Antarctica/Macquarie"
      }, "(GMT+11) Antarctica/Macquarie"), React.createElement("option", {
        value: "Asia/Magadan"
      }, "(GMT+11) Asia/Magadan"), React.createElement("option", {
        value: "Asia/Sakhalin"
      }, "(GMT+11) Asia/Sakhalin"), React.createElement("option", {
        value: "Asia/Srednekolymsk"
      }, "(GMT+11) Asia/Srednekolymsk"), React.createElement("option", {
        value: "Pacific/Bougainville"
      }, "(GMT+11) Pacific/Bougainville"), React.createElement("option", {
        value: "Pacific/Efate"
      }, "(GMT+11) Pacific/Efate"), React.createElement("option", {
        value: "Pacific/Guadalcanal"
      }, "(GMT+11) Pacific/Guadalcanal"), React.createElement("option", {
        value: "Pacific/Kosrae"
      }, "(GMT+11) Pacific/Kosrae"), React.createElement("option", {
        value: "Pacific/Norfolk"
      }, "(GMT+11) Pacific/Norfolk"), React.createElement("option", {
        value: "Pacific/Noumea"
      }, "(GMT+11) Pacific/Noumea"), React.createElement("option", {
        value: "Pacific/Pohnpei"
      }, "(GMT+11) Pacific/Pohnpei"), React.createElement("option", {
        value: "Antarctica/McMurdo"
      }, "(GMT+12) Antarctica/McMurdo"), React.createElement("option", {
        value: "Asia/Anadyr"
      }, "(GMT+12) Asia/Anadyr"), React.createElement("option", {
        value: "Asia/Kamchatka"
      }, "(GMT+12) Asia/Kamchatka"), React.createElement("option", {
        value: "Pacific/Auckland"
      }, "(GMT+12) Pacific/Auckland"), React.createElement("option", {
        value: "Pacific/Fiji"
      }, "(GMT+12) Pacific/Fiji"), React.createElement("option", {
        value: "Pacific/Funafuti"
      }, "(GMT+12) Pacific/Funafuti"), React.createElement("option", {
        value: "Pacific/Kwajalein"
      }, "(GMT+12) Pacific/Kwajalein"), React.createElement("option", {
        value: "Pacific/Majuro"
      }, "(GMT+12) Pacific/Majuro"), React.createElement("option", {
        value: "Pacific/Nauru"
      }, "(GMT+12) Pacific/Nauru"), React.createElement("option", {
        value: "Pacific/Tarawa"
      }, "(GMT+12) Pacific/Tarawa"), React.createElement("option", {
        value: "Pacific/Wake"
      }, "(GMT+12) Pacific/Wake"), React.createElement("option", {
        value: "Pacific/Wallis"
      }, "(GMT+12) Pacific/Wallis"), React.createElement("option", {
        value: "Pacific/Chatham"
      }, "(GMT+12) Pacific/Chatham"), React.createElement("option", {
        value: "Pacific/Apia"
      }, "(GMT+13) Pacific/Apia"), React.createElement("option", {
        value: "Pacific/Enderbury"
      }, "(GMT+13) Pacific/Enderbury"), React.createElement("option", {
        value: "Pacific/Fakaofo"
      }, "(GMT+13) Pacific/Fakaofo"), React.createElement("option", {
        value: "Pacific/Tongatapu"
      }, "(GMT+13) Pacific/Tongatapu"), React.createElement("option", {
        value: "Pacific/Kiritimati"
      }, "(GMT+14) Pacific/Kiritimati")));
    }
  }]);

  return TimezoneForm;
}(React.Component); // Render all the things


var domContainer = document.getElementById("top-tracks");

if (domContainer != null) {
  ReactDOM.render(e(TopTracks), domContainer);
}

domContainer = document.getElementById("timezone-form");

if (domContainer != null) {
  ReactDOM.render(e(TimezoneForm), domContainer);
}

domContainer = document.getElementById("bio");

if (domContainer != null) {
  ReactDOM.render(e(Bio), domContainer);
}

domContainer = document.getElementById("highlighted-music");

if (domContainer != null) {
  ReactDOM.render(e(Highlight), domContainer);
}

/***/ }),

/***/ "./node_modules/@babel/register/lib/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/@babel/register/lib/browser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
exports.revert = revert;

function register() {}

function revert() {}

/***/ }),

/***/ "./node_modules/@babel/register/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/register/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = function (...args) {
  return register(...args);
};

exports.__esModule = true;

const node = __webpack_require__(/*! ./node */ "./node_modules/@babel/register/lib/browser.js");

const register = node.default;
Object.assign(exports, node);

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map