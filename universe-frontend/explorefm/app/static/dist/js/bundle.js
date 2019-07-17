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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var e = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var LoveButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoveButton, _React$Component);

  function LoveButton(props) {
    var _this;

    _classCallCheck(this, LoveButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoveButton).call(this, props));

    _this.iconClicked = function (event) {
      if (!_this.state.is_current_user) {
        return; // Do nothing, icon is static.
      }

      _this.state.is_loved = !_this.state.is_loved;
      _this.state.is_hover = false;

      _this.setState(_this.state);

      var music_type = "";
      var music_id = -1;

      if (_this.state.track_id != -1) {
        music_type = 'track';
        music_id = _this.state.track_id;
      } else if (_this.state.album_id != -1) {
        music_type = 'album';
        music_id = _this.state.album_id;
      } else if (_this.artist_id != -1) {
        music_type = 'artist';
        music_id = _this.state.artist_id;
      } // Update with ep


      if (_this.state.is_loved) {
        var request = '/update/love_music/' + music_type + '/' + music_id.toString();
        axios.get(request);
      } else {
        var request = '/update/unlove_music/' + music_type + '/' + music_id.toString();
        axios.get(request);
      }
    };

    _this.onMouse = function (event) {
      _this.state.is_hover = true;

      _this.setState(_this.state);
    };

    _this.offMouse = function (event) {
      _this.state.is_hover = false;

      _this.setState(_this.state);
    };

    _this.state = {
      track_id: -1,
      album_id: -1,
      artist_id: -1,
      is_loved: false,
      is_current_user: true,
      is_hover: false
    };

    if ('track_id' in _this.props) {
      _this.state.track_id = _this.props.track_id;
    } else if ('album_id' in _this.props) {
      _this.state.album_id = _this.props.album_id;
    } else if ('artist_id' in _this.props) {
      _this.state.artist_id = _this.props.artist_id;
    }

    _this.state.is_loved = _this.props.is_loved;
    _this.state.is_current_user = _this.props.is_current_user;
    return _this;
  }

  _createClass(LoveButton, [{
    key: "render",
    value: function render() {
      if (this.state.is_current_user) {
        if (this.state.is_loved) {
          if (!this.state.is_hover) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
              onMouseOver: this.onMouse,
              onMouseOut: this.offMouse,
              onClick: this.iconClicked,
              className: "fa fa-heart fa-lg love-music-icon",
              style: {
                color: 'red'
              }
            });
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
              onMouseOver: this.onMouse,
              onMouseOut: this.offMouse,
              onClick: this.iconClicked,
              className: "fa fa-heart-o fa-lg love-music-icon",
              style: {
                color: 'black'
              }
            });
          }
        } else {
          if (!this.state.is_hover) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
              onMouseOver: this.onMouse,
              onMouseOut: this.offMouse,
              onClick: this.iconClicked,
              className: "fa fa-heart-o fa-lg love-music-icon",
              style: {
                color: 'black'
              }
            });
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
              onMouseOver: this.onMouse,
              onMouseOut: this.offMouse,
              onClick: this.iconClicked,
              className: "fa fa-heart fa-lg love-music-icon",
              style: {
                color: 'red'
              }
            });
          }
        }
      } else {
        if (this.state.is_loved) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
            onMouseOver: this.onMouse,
            onMouseOut: this.offMouse,
            onClick: this.iconClicked,
            className: "fa fa-heart fa-lg love-music-icon",
            style: {
              color: 'red'
            }
          });
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null);
        }
      }
    }
  }]);

  return LoveButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var TopTracks =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(TopTracks, _React$Component2);

  function TopTracks(props) {
    var _this2;

    _classCallCheck(this, TopTracks);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TopTracks).call(this, props));

    _this2.updateTimespan = function (event) {
      _this2.state.timespan = event.target.value;

      _this2.getNewTimespanData(event.target.value);
    };

    _this2.state = {
      timespan: "month",
      top: []
    };
    return _this2;
  }

  _createClass(TopTracks, [{
    key: "getSecondsSinceEpoch",
    value: function getSecondsSinceEpoch() {
      var d = new Date();
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

      var newTop = [];
      var self = this;
      var request = '/user/' + user + '/tracks?t_start=' + t_start.toString() + '&t_end=' + t_end.toString();
      axios.get(request).then(function (response) {
        var l = response['data'];

        for (var i = 0; i < l.length; ++i) {
          var k = "track-" + i.toString();
          var width_percent = 100;
          var className;

          if (i % 2 == 0) {
            className = "listen-entry";
          } else {
            className = "listen-entry-shaded";
          }

          var love_button_data = {
            track_id: l[i]['track_id'],
            is_current_user: current_user == user,
            is_loved: l[i]['is_loved']
          };
          var img_path = album_art_endpoint + l[i]['img_id'] + '-small.jpg';
          newTop.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            key: k
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: className
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
            className: "listen-entry-art",
            src: img_path
          }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "listen-entry-track"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, l[i]['artist'], " - ", l[i]['track'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoveButton, love_button_data), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "listen-entry-time"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, l[i]['count'])))));
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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "top-track"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-section-header-timespan"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Top Tracks"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
        className: "profile-section-header-select",
        id: "ts-form",
        onChange: this.updateTimespan,
        value: this.state.timespan
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "day"
      }, "Last day"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "week"
      }, "Last week"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "month"
      }, "Last month"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "year"
      }, "Last year"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "all"
      }, "All time"))), this.state.top);
    }
  }]);

  return TopTracks;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var TopAlbums =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(TopAlbums, _React$Component3);

  function TopAlbums(props) {
    var _this3;

    _classCallCheck(this, TopAlbums);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TopAlbums).call(this, props));

    _this3.updateTimespan = function (event) {
      _this3.state.timespan = event.target.value;

      _this3.getNewTimespanData(event.target.value);
    };

    _this3.state = {
      timespan: "month",
      top_albums: []
    };
    return _this3;
  }

  _createClass(TopAlbums, [{
    key: "getSecondsSinceEpoch",
    value: function getSecondsSinceEpoch() {
      var d = new Date();
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

      var newTop = [];
      var self = this;
      var request = '/user/' + user + '/top_albums?t_start=' + t_start.toString() + '&t_end=' + t_end.toString();
      axios.get(request).then(function (response) {
        var l = response['data'];

        for (var i = 0; i < l.length; ++i) {
          var k = "album-" + i.toString();
          var img_path = album_art_endpoint + l[i]['img_id'] + '-medium.jpg';
          var love_button_data = {
            album_id: l[i]['album_id'],
            is_current_user: current_user == user,
            is_loved: l[i]['is_loved']
          };
          newTop.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            key: k
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
            className: "album-entry-art",
            src: img_path
          }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-art-gradient"
          }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-layer-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoveButton, love_button_data), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-text-group"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-text"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, l[i]['album'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-text"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, l[i]['artist'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-text"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, l[i]['count'], " listens")))))));
        }

        self.setState({
          timespan: value,
          top_albums: newTop
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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "top-album"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-section-header-timespan"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Top Albums"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
        className: "profile-section-header-select",
        id: "ts-form",
        onChange: this.updateTimespan,
        value: this.state.timespan
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "day"
      }, "Last day"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "week"
      }, "Last week"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "month"
      }, "Last month"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "year"
      }, "Last year"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "all"
      }, "All time"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "top-album-wrapper"
      }, this.state.top_albums));
    }
  }]);

  return TopAlbums;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var TopArtists =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(TopArtists, _React$Component4);

  function TopArtists(props) {
    var _this4;

    _classCallCheck(this, TopArtists);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(TopArtists).call(this, props));

    _this4.updateTimespan = function (event) {
      _this4.state.timespan = event.target.value;

      _this4.getNewTimespanData(event.target.value);
    };

    _this4.state = {
      timespan: "month",
      top_artists: []
    };
    return _this4;
  }

  _createClass(TopArtists, [{
    key: "getSecondsSinceEpoch",
    value: function getSecondsSinceEpoch() {
      var d = new Date();
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

      var newTop = [];
      var self = this;
      var request = '/user/' + user + '/top_artists?t_start=' + t_start.toString() + '&t_end=' + t_end.toString();
      axios.get(request).then(function (response) {
        var l = response['data'];

        for (var i = 0; i < l.length; ++i) {
          var k = "artist-" + i.toString();
          var img_path = artist_art_endpoint + l[i]['img_id'] + '-medium.jpg';
          var love_button_data = {
            artist_id: l[i]['artist_id'],
            is_current_user: current_user == user,
            is_loved: l[i]['is_loved']
          };
          newTop.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            key: k
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
            className: "album-entry-art",
            src: img_path
          }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-art-gradient"
          }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-layer-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoveButton, love_button_data), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-text-group"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-text"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, l[i]['artist'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "album-entry-text"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, l[i]['count'], " listens")))))));
        }

        self.setState({
          timespan: value,
          top_artists: newTop
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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "top-artist"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-section-header-timespan"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Top Artists"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
        className: "profile-section-header-select",
        id: "ts-form",
        onChange: this.updateTimespan,
        value: this.state.timespan
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "day"
      }, "Last day"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "week"
      }, "Last week"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "month"
      }, "Last month"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "year"
      }, "Last year"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "all"
      }, "All time"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "top-album-wrapper"
      }, this.state.top_artists));
    }
  }]);

  return TopArtists;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var RecentListens =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(RecentListens, _React$Component5);

  function RecentListens(props) {
    var _this5;

    _classCallCheck(this, RecentListens);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(RecentListens).call(this, props));
    _this5.state = {
      top: [],
      count: _this5.props.count
    };
    return _this5;
  }

  _createClass(RecentListens, [{
    key: "updateRecentListenData",
    value: function updateRecentListenData() {
      var newTop = [];
      var self = this;
      var request = '/user/' + user + '/recent_listens?count=' + this.state.count.toString();
      axios.get(request).then(function (response) {
        var l = response['data'];

        for (var i = 0; i < l.length; ++i) {
          var k = "listen-" + i.toString();
          var className;

          if (i % 2 == 0) {
            className = "listen-entry";
          } else {
            className = "listen-entry-shaded";
          }

          var love_button_data = {
            track_id: l[i]['track_id'],
            is_current_user: current_user == user,
            is_loved: l[i]['is_loved']
          };
          var img_path = album_art_endpoint + l[i]['img_id'] + '-small.jpg';
          newTop.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            key: k
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: className
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
            className: "listen-entry-art",
            src: img_path
          }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "listen-entry-track"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, l[i]['artist'], " - ", l[i]['track'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoveButton, love_button_data), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "listen-entry-time"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, l[i]['time'])))));
        }

        self.setState({
          top: newTop
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateRecentListenData();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "top-track-area"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-section-header"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Recent Listens")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "top-track"
      }, this.state.top));
    }
  }]);

  return RecentListens;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Bio =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(Bio, _React$Component6);

  function Bio(props) {
    var _this6;

    _classCallCheck(this, Bio);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Bio).call(this, props));
    _this6.state = {
      bio: _this6.props.bio_text
    };
    return _this6;
  }

  _createClass(Bio, [{
    key: "renderBio",
    value: function renderBio() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "bio"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, this.state.bio));
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderBio();
    }
  }]);

  return Bio;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var TimezoneForm =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(TimezoneForm, _React$Component7);

  function TimezoneForm(props) {
    var _this7;

    _classCallCheck(this, TimezoneForm);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(TimezoneForm).call(this, props));

    _this7.updateTimezone = function (event) {
      _this7.setState({
        timezone: event.target.value
      });

      var request = '/update/timezone/' + event.target.value.replace(/\//g, "-") + "/";
      axios.post(request);
    };

    _this7.state = {
      timezone: "America/Chicago"
    };
    return _this7;
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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "timezone-form"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
        id: "tz-form",
        onChange: this.updateTimezone,
        value: this.state.timezone
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Midway"
      }, "(GMT-11) Pacific/Midway"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Niue"
      }, "(GMT-11) Pacific/Niue"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Pago_Pago"
      }, "(GMT-11) Pacific/Pago_Pago"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Honolulu"
      }, "(GMT-10) Pacific/Honolulu"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Rarotonga"
      }, "(GMT-10) Pacific/Rarotonga"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Tahiti"
      }, "(GMT-10) Pacific/Tahiti"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Marquesas"
      }, "(GMT-09) Pacific/Marquesas"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Adak"
      }, "(GMT-09) America/Adak"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Gambier"
      }, "(GMT-09) Pacific/Gambier"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Anchorage"
      }, "(GMT-08) America/Anchorage"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Juneau"
      }, "(GMT-08) America/Juneau"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Metlakatla"
      }, "(GMT-08) America/Metlakatla"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Nome"
      }, "(GMT-08) America/Nome"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Sitka"
      }, "(GMT-08) America/Sitka"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Yakutat"
      }, "(GMT-08) America/Yakutat"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Pitcairn"
      }, "(GMT-08) Pacific/Pitcairn"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Creston"
      }, "(GMT-07) America/Creston"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Dawson"
      }, "(GMT-07) America/Dawson"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Dawson_Creek"
      }, "(GMT-07) America/Dawson_Creek"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Fort_Nelson"
      }, "(GMT-07) America/Fort_Nelson"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Hermosillo"
      }, "(GMT-07) America/Hermosillo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Los_Angeles"
      }, "(GMT-07) America/Los_Angeles"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Phoenix"
      }, "(GMT-07) America/Phoenix"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Tijuana"
      }, "(GMT-07) America/Tijuana"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Vancouver"
      }, "(GMT-07) America/Vancouver"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Whitehorse"
      }, "(GMT-07) America/Whitehorse"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Belize"
      }, "(GMT-06) America/Belize"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Boise"
      }, "(GMT-06) America/Boise"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Cambridge_Bay"
      }, "(GMT-06) America/Cambridge_Bay"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Chihuahua"
      }, "(GMT-06) America/Chihuahua"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Costa_Rica"
      }, "(GMT-06) America/Costa_Rica"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Denver"
      }, "(GMT-06) America/Denver"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Edmonton"
      }, "(GMT-06) America/Edmonton"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/El_Salvador"
      }, "(GMT-06) America/El_Salvador"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Guatemala"
      }, "(GMT-06) America/Guatemala"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Inuvik"
      }, "(GMT-06) America/Inuvik"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Managua"
      }, "(GMT-06) America/Managua"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Mazatlan"
      }, "(GMT-06) America/Mazatlan"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Ojinaga"
      }, "(GMT-06) America/Ojinaga"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Regina"
      }, "(GMT-06) America/Regina"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Swift_Current"
      }, "(GMT-06) America/Swift_Current"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Tegucigalpa"
      }, "(GMT-06) America/Tegucigalpa"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Yellowknife"
      }, "(GMT-06) America/Yellowknife"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Easter"
      }, "(GMT-06) Pacific/Easter"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Galapagos"
      }, "(GMT-06) Pacific/Galapagos"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Atikokan"
      }, "(GMT-05) America/Atikokan"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Bahia_Banderas"
      }, "(GMT-05) America/Bahia_Banderas"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Bogota"
      }, "(GMT-05) America/Bogota"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Cancun"
      }, "(GMT-05) America/Cancun"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Cayman"
      }, "(GMT-05) America/Cayman"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Chicago"
      }, "(GMT-05) America/Chicago"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Eirunepe"
      }, "(GMT-05) America/Eirunepe"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Guayaquil"
      }, "(GMT-05) America/Guayaquil"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Indiana/Knox"
      }, "(GMT-05) America/Indiana/Knox"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Indiana/Tell_City"
      }, "(GMT-05) America/Indiana/Tell_City"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Jamaica"
      }, "(GMT-05) America/Jamaica"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Lima"
      }, "(GMT-05) America/Lima"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Matamoros"
      }, "(GMT-05) America/Matamoros"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Menominee"
      }, "(GMT-05) America/Menominee"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Merida"
      }, "(GMT-05) America/Merida"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Mexico_City"
      }, "(GMT-05) America/Mexico_City"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Monterrey"
      }, "(GMT-05) America/Monterrey"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/North_Dakota/Beulah"
      }, "(GMT-05) America/North_Dakota/Beulah"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/North_Dakota/Center"
      }, "(GMT-05) America/North_Dakota/Center"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/North_Dakota/New_Salem"
      }, "(GMT-05) America/North_Dakota/New_Salem"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Panama"
      }, "(GMT-05) America/Panama"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Rainy_River"
      }, "(GMT-05) America/Rainy_River"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Rankin_Inlet"
      }, "(GMT-05) America/Rankin_Inlet"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Resolute"
      }, "(GMT-05) America/Resolute"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Rio_Branco"
      }, "(GMT-05) America/Rio_Branco"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Winnipeg"
      }, "(GMT-05) America/Winnipeg"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Anguilla"
      }, "(GMT-04) America/Anguilla"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Antigua"
      }, "(GMT-04) America/Antigua"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Aruba"
      }, "(GMT-04) America/Aruba"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Asuncion"
      }, "(GMT-04) America/Asuncion"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Barbados"
      }, "(GMT-04) America/Barbados"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Blanc-Sablon"
      }, "(GMT-04) America/Blanc-Sablon"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Boa_Vista"
      }, "(GMT-04) America/Boa_Vista"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Campo_Grande"
      }, "(GMT-04) America/Campo_Grande"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Caracas"
      }, "(GMT-04) America/Caracas"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Cuiaba"
      }, "(GMT-04) America/Cuiaba"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Curacao"
      }, "(GMT-04) America/Curacao"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Detroit"
      }, "(GMT-04) America/Detroit"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Dominica"
      }, "(GMT-04) America/Dominica"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Grand_Turk"
      }, "(GMT-04) America/Grand_Turk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Grenada"
      }, "(GMT-04) America/Grenada"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Guadeloupe"
      }, "(GMT-04) America/Guadeloupe"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Guyana"
      }, "(GMT-04) America/Guyana"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Havana"
      }, "(GMT-04) America/Havana"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Indiana/Indianapolis"
      }, "(GMT-04) America/Indiana/Indianapolis"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Indiana/Marengo"
      }, "(GMT-04) America/Indiana/Marengo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Indiana/Petersburg"
      }, "(GMT-04) America/Indiana/Petersburg"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Indiana/Vevay"
      }, "(GMT-04) America/Indiana/Vevay"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Indiana/Vincennes"
      }, "(GMT-04) America/Indiana/Vincennes"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Indiana/Winamac"
      }, "(GMT-04) America/Indiana/Winamac"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Iqaluit"
      }, "(GMT-04) America/Iqaluit"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Kentucky/Louisville"
      }, "(GMT-04) America/Kentucky/Louisville"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Kentucky/Monticello"
      }, "(GMT-04) America/Kentucky/Monticello"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Kralendijk"
      }, "(GMT-04) America/Kralendijk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/La_Paz"
      }, "(GMT-04) America/La_Paz"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Lower_Princes"
      }, "(GMT-04) America/Lower_Princes"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Manaus"
      }, "(GMT-04) America/Manaus"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Marigot"
      }, "(GMT-04) America/Marigot"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Martinique"
      }, "(GMT-04) America/Martinique"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Montserrat"
      }, "(GMT-04) America/Montserrat"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Nassau"
      }, "(GMT-04) America/Nassau"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/New_York"
      }, "(GMT-04) America/New_York"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Nipigon"
      }, "(GMT-04) America/Nipigon"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Pangnirtung"
      }, "(GMT-04) America/Pangnirtung"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Port-au-Prince"
      }, "(GMT-04) America/Port-au-Prince"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Port_of_Spain"
      }, "(GMT-04) America/Port_of_Spain"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Porto_Velho"
      }, "(GMT-04) America/Porto_Velho"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Puerto_Rico"
      }, "(GMT-04) America/Puerto_Rico"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Santiago"
      }, "(GMT-04) America/Santiago"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Santo_Domingo"
      }, "(GMT-04) America/Santo_Domingo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/St_Barthelemy"
      }, "(GMT-04) America/St_Barthelemy"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/St_Kitts"
      }, "(GMT-04) America/St_Kitts"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/St_Lucia"
      }, "(GMT-04) America/St_Lucia"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/St_Thomas"
      }, "(GMT-04) America/St_Thomas"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/St_Vincent"
      }, "(GMT-04) America/St_Vincent"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Thunder_Bay"
      }, "(GMT-04) America/Thunder_Bay"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Toronto"
      }, "(GMT-04) America/Toronto"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Tortola"
      }, "(GMT-04) America/Tortola"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Araguaina"
      }, "(GMT-03) America/Araguaina"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/Buenos_Aires"
      }, "(GMT-03) America/Argentina/Buenos_Aires"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/Catamarca"
      }, "(GMT-03) America/Argentina/Catamarca"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/Cordoba"
      }, "(GMT-03) America/Argentina/Cordoba"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/Jujuy"
      }, "(GMT-03) America/Argentina/Jujuy"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/La_Rioja"
      }, "(GMT-03) America/Argentina/La_Rioja"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/Mendoza"
      }, "(GMT-03) America/Argentina/Mendoza"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/Rio_Gallegos"
      }, "(GMT-03) America/Argentina/Rio_Gallegos"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/Salta"
      }, "(GMT-03) America/Argentina/Salta"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/San_Juan"
      }, "(GMT-03) America/Argentina/San_Juan"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/San_Luis"
      }, "(GMT-03) America/Argentina/San_Luis"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/Tucuman"
      }, "(GMT-03) America/Argentina/Tucuman"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Argentina/Ushuaia"
      }, "(GMT-03) America/Argentina/Ushuaia"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Bahia"
      }, "(GMT-03) America/Bahia"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Belem"
      }, "(GMT-03) America/Belem"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Cayenne"
      }, "(GMT-03) America/Cayenne"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Fortaleza"
      }, "(GMT-03) America/Fortaleza"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Glace_Bay"
      }, "(GMT-03) America/Glace_Bay"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Goose_Bay"
      }, "(GMT-03) America/Goose_Bay"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Halifax"
      }, "(GMT-03) America/Halifax"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Maceio"
      }, "(GMT-03) America/Maceio"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Moncton"
      }, "(GMT-03) America/Moncton"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Montevideo"
      }, "(GMT-03) America/Montevideo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Paramaribo"
      }, "(GMT-03) America/Paramaribo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Punta_Arenas"
      }, "(GMT-03) America/Punta_Arenas"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Recife"
      }, "(GMT-03) America/Recife"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Santarem"
      }, "(GMT-03) America/Santarem"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Sao_Paulo"
      }, "(GMT-03) America/Sao_Paulo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Thule"
      }, "(GMT-03) America/Thule"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/Palmer"
      }, "(GMT-03) Antarctica/Palmer"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/Rothera"
      }, "(GMT-03) Antarctica/Rothera"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/Bermuda"
      }, "(GMT-03) Atlantic/Bermuda"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/Stanley"
      }, "(GMT-03) Atlantic/Stanley"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/St_Johns"
      }, "(GMT-02) America/St_Johns"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Godthab"
      }, "(GMT-02) America/Godthab"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Miquelon"
      }, "(GMT-02) America/Miquelon"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Noronha"
      }, "(GMT-02) America/Noronha"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/South_Georgia"
      }, "(GMT-02) Atlantic/South_Georgia"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/Cape_Verde"
      }, "(GMT-01) Atlantic/Cape_Verde"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Abidjan"
      }, "(GMT+00) Africa/Abidjan"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Accra"
      }, "(GMT+00) Africa/Accra"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Bamako"
      }, "(GMT+00) Africa/Bamako"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Banjul"
      }, "(GMT+00) Africa/Banjul"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Bissau"
      }, "(GMT+00) Africa/Bissau"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Conakry"
      }, "(GMT+00) Africa/Conakry"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Dakar"
      }, "(GMT+00) Africa/Dakar"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Freetown"
      }, "(GMT+00) Africa/Freetown"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Lome"
      }, "(GMT+00) Africa/Lome"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Monrovia"
      }, "(GMT+00) Africa/Monrovia"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Nouakchott"
      }, "(GMT+00) Africa/Nouakchott"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Ouagadougou"
      }, "(GMT+00) Africa/Ouagadougou"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Sao_Tome"
      }, "(GMT+00) Africa/Sao_Tome"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Danmarkshavn"
      }, "(GMT+00) America/Danmarkshavn"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "America/Scoresbysund"
      }, "(GMT+00) America/Scoresbysund"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/Azores"
      }, "(GMT+00) Atlantic/Azores"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/Reykjavik"
      }, "(GMT+00) Atlantic/Reykjavik"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/St_Helena"
      }, "(GMT+00) Atlantic/St_Helena"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "UTC"
      }, "(GMT+00) UTC"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Algiers"
      }, "(GMT+01) Africa/Algiers"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Bangui"
      }, "(GMT+01) Africa/Bangui"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Brazzaville"
      }, "(GMT+01) Africa/Brazzaville"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Casablanca"
      }, "(GMT+01) Africa/Casablanca"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Douala"
      }, "(GMT+01) Africa/Douala"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/El_Aaiun"
      }, "(GMT+01) Africa/El_Aaiun"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Kinshasa"
      }, "(GMT+01) Africa/Kinshasa"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Lagos"
      }, "(GMT+01) Africa/Lagos"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Libreville"
      }, "(GMT+01) Africa/Libreville"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Luanda"
      }, "(GMT+01) Africa/Luanda"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Malabo"
      }, "(GMT+01) Africa/Malabo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Ndjamena"
      }, "(GMT+01) Africa/Ndjamena"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Niamey"
      }, "(GMT+01) Africa/Niamey"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Porto-Novo"
      }, "(GMT+01) Africa/Porto-Novo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Tunis"
      }, "(GMT+01) Africa/Tunis"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Windhoek"
      }, "(GMT+01) Africa/Windhoek"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/Canary"
      }, "(GMT+01) Atlantic/Canary"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/Faroe"
      }, "(GMT+01) Atlantic/Faroe"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Atlantic/Madeira"
      }, "(GMT+01) Atlantic/Madeira"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Dublin"
      }, "(GMT+01) Europe/Dublin"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Guernsey"
      }, "(GMT+01) Europe/Guernsey"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Isle_of_Man"
      }, "(GMT+01) Europe/Isle_of_Man"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Jersey"
      }, "(GMT+01) Europe/Jersey"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Lisbon"
      }, "(GMT+01) Europe/Lisbon"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/London"
      }, "(GMT+01) Europe/London"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Blantyre"
      }, "(GMT+02) Africa/Blantyre"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Bujumbura"
      }, "(GMT+02) Africa/Bujumbura"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Cairo"
      }, "(GMT+02) Africa/Cairo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Ceuta"
      }, "(GMT+02) Africa/Ceuta"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Gaborone"
      }, "(GMT+02) Africa/Gaborone"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Harare"
      }, "(GMT+02) Africa/Harare"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Johannesburg"
      }, "(GMT+02) Africa/Johannesburg"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Kigali"
      }, "(GMT+02) Africa/Kigali"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Lubumbashi"
      }, "(GMT+02) Africa/Lubumbashi"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Lusaka"
      }, "(GMT+02) Africa/Lusaka"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Maputo"
      }, "(GMT+02) Africa/Maputo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Maseru"
      }, "(GMT+02) Africa/Maseru"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Mbabane"
      }, "(GMT+02) Africa/Mbabane"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Tripoli"
      }, "(GMT+02) Africa/Tripoli"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/Troll"
      }, "(GMT+02) Antarctica/Troll"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Arctic/Longyearbyen"
      }, "(GMT+02) Arctic/Longyearbyen"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Amsterdam"
      }, "(GMT+02) Europe/Amsterdam"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Andorra"
      }, "(GMT+02) Europe/Andorra"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Belgrade"
      }, "(GMT+02) Europe/Belgrade"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Berlin"
      }, "(GMT+02) Europe/Berlin"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Bratislava"
      }, "(GMT+02) Europe/Bratislava"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Brussels"
      }, "(GMT+02) Europe/Brussels"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Budapest"
      }, "(GMT+02) Europe/Budapest"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Busingen"
      }, "(GMT+02) Europe/Busingen"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Copenhagen"
      }, "(GMT+02) Europe/Copenhagen"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Gibraltar"
      }, "(GMT+02) Europe/Gibraltar"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Kaliningrad"
      }, "(GMT+02) Europe/Kaliningrad"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Ljubljana"
      }, "(GMT+02) Europe/Ljubljana"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Luxembourg"
      }, "(GMT+02) Europe/Luxembourg"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Madrid"
      }, "(GMT+02) Europe/Madrid"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Malta"
      }, "(GMT+02) Europe/Malta"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Monaco"
      }, "(GMT+02) Europe/Monaco"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Oslo"
      }, "(GMT+02) Europe/Oslo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Paris"
      }, "(GMT+02) Europe/Paris"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Podgorica"
      }, "(GMT+02) Europe/Podgorica"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Prague"
      }, "(GMT+02) Europe/Prague"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Rome"
      }, "(GMT+02) Europe/Rome"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/San_Marino"
      }, "(GMT+02) Europe/San_Marino"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Sarajevo"
      }, "(GMT+02) Europe/Sarajevo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Skopje"
      }, "(GMT+02) Europe/Skopje"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Stockholm"
      }, "(GMT+02) Europe/Stockholm"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Tirane"
      }, "(GMT+02) Europe/Tirane"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Vaduz"
      }, "(GMT+02) Europe/Vaduz"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Vatican"
      }, "(GMT+02) Europe/Vatican"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Vienna"
      }, "(GMT+02) Europe/Vienna"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Warsaw"
      }, "(GMT+02) Europe/Warsaw"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Zagreb"
      }, "(GMT+02) Europe/Zagreb"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Zurich"
      }, "(GMT+02) Europe/Zurich"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Addis_Ababa"
      }, "(GMT+03) Africa/Addis_Ababa"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Asmara"
      }, "(GMT+03) Africa/Asmara"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Dar_es_Salaam"
      }, "(GMT+03) Africa/Dar_es_Salaam"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Djibouti"
      }, "(GMT+03) Africa/Djibouti"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Juba"
      }, "(GMT+03) Africa/Juba"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Kampala"
      }, "(GMT+03) Africa/Kampala"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Khartoum"
      }, "(GMT+03) Africa/Khartoum"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Mogadishu"
      }, "(GMT+03) Africa/Mogadishu"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Africa/Nairobi"
      }, "(GMT+03) Africa/Nairobi"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/Syowa"
      }, "(GMT+03) Antarctica/Syowa"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Aden"
      }, "(GMT+03) Asia/Aden"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Amman"
      }, "(GMT+03) Asia/Amman"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Baghdad"
      }, "(GMT+03) Asia/Baghdad"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Bahrain"
      }, "(GMT+03) Asia/Bahrain"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Beirut"
      }, "(GMT+03) Asia/Beirut"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Damascus"
      }, "(GMT+03) Asia/Damascus"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Famagusta"
      }, "(GMT+03) Asia/Famagusta"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Gaza"
      }, "(GMT+03) Asia/Gaza"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Hebron"
      }, "(GMT+03) Asia/Hebron"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Jerusalem"
      }, "(GMT+03) Asia/Jerusalem"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Kuwait"
      }, "(GMT+03) Asia/Kuwait"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Nicosia"
      }, "(GMT+03) Asia/Nicosia"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Qatar"
      }, "(GMT+03) Asia/Qatar"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Riyadh"
      }, "(GMT+03) Asia/Riyadh"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Athens"
      }, "(GMT+03) Europe/Athens"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Bucharest"
      }, "(GMT+03) Europe/Bucharest"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Chisinau"
      }, "(GMT+03) Europe/Chisinau"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Helsinki"
      }, "(GMT+03) Europe/Helsinki"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Istanbul"
      }, "(GMT+03) Europe/Istanbul"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Kiev"
      }, "(GMT+03) Europe/Kiev"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Kirov"
      }, "(GMT+03) Europe/Kirov"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Mariehamn"
      }, "(GMT+03) Europe/Mariehamn"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Minsk"
      }, "(GMT+03) Europe/Minsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Moscow"
      }, "(GMT+03) Europe/Moscow"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Riga"
      }, "(GMT+03) Europe/Riga"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Simferopol"
      }, "(GMT+03) Europe/Simferopol"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Sofia"
      }, "(GMT+03) Europe/Sofia"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Tallinn"
      }, "(GMT+03) Europe/Tallinn"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Uzhgorod"
      }, "(GMT+03) Europe/Uzhgorod"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Vilnius"
      }, "(GMT+03) Europe/Vilnius"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Volgograd"
      }, "(GMT+03) Europe/Volgograd"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Zaporozhye"
      }, "(GMT+03) Europe/Zaporozhye"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Antananarivo"
      }, "(GMT+03) Indian/Antananarivo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Comoro"
      }, "(GMT+03) Indian/Comoro"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Mayotte"
      }, "(GMT+03) Indian/Mayotte"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Baku"
      }, "(GMT+04) Asia/Baku"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Dubai"
      }, "(GMT+04) Asia/Dubai"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Muscat"
      }, "(GMT+04) Asia/Muscat"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Tbilisi"
      }, "(GMT+04) Asia/Tbilisi"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Yerevan"
      }, "(GMT+04) Asia/Yerevan"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Astrakhan"
      }, "(GMT+04) Europe/Astrakhan"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Samara"
      }, "(GMT+04) Europe/Samara"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Saratov"
      }, "(GMT+04) Europe/Saratov"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Europe/Ulyanovsk"
      }, "(GMT+04) Europe/Ulyanovsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Mahe"
      }, "(GMT+04) Indian/Mahe"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Mauritius"
      }, "(GMT+04) Indian/Mauritius"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Reunion"
      }, "(GMT+04) Indian/Reunion"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Kabul"
      }, "(GMT+04) Asia/Kabul"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Tehran"
      }, "(GMT+04) Asia/Tehran"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/Mawson"
      }, "(GMT+05) Antarctica/Mawson"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Aqtau"
      }, "(GMT+05) Asia/Aqtau"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Aqtobe"
      }, "(GMT+05) Asia/Aqtobe"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Ashgabat"
      }, "(GMT+05) Asia/Ashgabat"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Atyrau"
      }, "(GMT+05) Asia/Atyrau"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Dushanbe"
      }, "(GMT+05) Asia/Dushanbe"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Karachi"
      }, "(GMT+05) Asia/Karachi"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Oral"
      }, "(GMT+05) Asia/Oral"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Samarkand"
      }, "(GMT+05) Asia/Samarkand"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Tashkent"
      }, "(GMT+05) Asia/Tashkent"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Yekaterinburg"
      }, "(GMT+05) Asia/Yekaterinburg"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Kerguelen"
      }, "(GMT+05) Indian/Kerguelen"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Maldives"
      }, "(GMT+05) Indian/Maldives"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Colombo"
      }, "(GMT+05) Asia/Colombo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Kolkata"
      }, "(GMT+05) Asia/Kolkata"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Kathmandu"
      }, "(GMT+05) Asia/Kathmandu"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/Vostok"
      }, "(GMT+06) Antarctica/Vostok"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Almaty"
      }, "(GMT+06) Asia/Almaty"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Bishkek"
      }, "(GMT+06) Asia/Bishkek"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Dhaka"
      }, "(GMT+06) Asia/Dhaka"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Omsk"
      }, "(GMT+06) Asia/Omsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Qyzylorda"
      }, "(GMT+06) Asia/Qyzylorda"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Thimphu"
      }, "(GMT+06) Asia/Thimphu"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Urumqi"
      }, "(GMT+06) Asia/Urumqi"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Chagos"
      }, "(GMT+06) Indian/Chagos"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Yangon"
      }, "(GMT+06) Asia/Yangon"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Cocos"
      }, "(GMT+06) Indian/Cocos"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/Davis"
      }, "(GMT+07) Antarctica/Davis"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Bangkok"
      }, "(GMT+07) Asia/Bangkok"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Barnaul"
      }, "(GMT+07) Asia/Barnaul"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Ho_Chi_Minh"
      }, "(GMT+07) Asia/Ho_Chi_Minh"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Hovd"
      }, "(GMT+07) Asia/Hovd"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Jakarta"
      }, "(GMT+07) Asia/Jakarta"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Krasnoyarsk"
      }, "(GMT+07) Asia/Krasnoyarsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Novokuznetsk"
      }, "(GMT+07) Asia/Novokuznetsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Novosibirsk"
      }, "(GMT+07) Asia/Novosibirsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Phnom_Penh"
      }, "(GMT+07) Asia/Phnom_Penh"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Pontianak"
      }, "(GMT+07) Asia/Pontianak"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Tomsk"
      }, "(GMT+07) Asia/Tomsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Vientiane"
      }, "(GMT+07) Asia/Vientiane"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Indian/Christmas"
      }, "(GMT+07) Indian/Christmas"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Brunei"
      }, "(GMT+08) Asia/Brunei"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Choibalsan"
      }, "(GMT+08) Asia/Choibalsan"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Hong_Kong"
      }, "(GMT+08) Asia/Hong_Kong"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Irkutsk"
      }, "(GMT+08) Asia/Irkutsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Kuala_Lumpur"
      }, "(GMT+08) Asia/Kuala_Lumpur"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Kuching"
      }, "(GMT+08) Asia/Kuching"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Macau"
      }, "(GMT+08) Asia/Macau"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Makassar"
      }, "(GMT+08) Asia/Makassar"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Manila"
      }, "(GMT+08) Asia/Manila"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Shanghai"
      }, "(GMT+08) Asia/Shanghai"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Singapore"
      }, "(GMT+08) Asia/Singapore"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Taipei"
      }, "(GMT+08) Asia/Taipei"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Ulaanbaatar"
      }, "(GMT+08) Asia/Ulaanbaatar"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Perth"
      }, "(GMT+08) Australia/Perth"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Pyongyang"
      }, "(GMT+08) Asia/Pyongyang"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Eucla"
      }, "(GMT+08) Australia/Eucla"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Chita"
      }, "(GMT+09) Asia/Chita"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Dili"
      }, "(GMT+09) Asia/Dili"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Jayapura"
      }, "(GMT+09) Asia/Jayapura"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Khandyga"
      }, "(GMT+09) Asia/Khandyga"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Seoul"
      }, "(GMT+09) Asia/Seoul"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Tokyo"
      }, "(GMT+09) Asia/Tokyo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Yakutsk"
      }, "(GMT+09) Asia/Yakutsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Palau"
      }, "(GMT+09) Pacific/Palau"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Adelaide"
      }, "(GMT+09) Australia/Adelaide"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Broken_Hill"
      }, "(GMT+09) Australia/Broken_Hill"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Darwin"
      }, "(GMT+09) Australia/Darwin"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/DumontDUrville"
      }, "(GMT+10) Antarctica/DumontDUrville"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Ust-Nera"
      }, "(GMT+10) Asia/Ust-Nera"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Vladivostok"
      }, "(GMT+10) Asia/Vladivostok"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Brisbane"
      }, "(GMT+10) Australia/Brisbane"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Currie"
      }, "(GMT+10) Australia/Currie"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Hobart"
      }, "(GMT+10) Australia/Hobart"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Lindeman"
      }, "(GMT+10) Australia/Lindeman"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Melbourne"
      }, "(GMT+10) Australia/Melbourne"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Sydney"
      }, "(GMT+10) Australia/Sydney"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Chuuk"
      }, "(GMT+10) Pacific/Chuuk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Guam"
      }, "(GMT+10) Pacific/Guam"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Port_Moresby"
      }, "(GMT+10) Pacific/Port_Moresby"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Saipan"
      }, "(GMT+10) Pacific/Saipan"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Australia/Lord_Howe"
      }, "(GMT+10) Australia/Lord_Howe"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/Casey"
      }, "(GMT+11) Antarctica/Casey"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/Macquarie"
      }, "(GMT+11) Antarctica/Macquarie"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Magadan"
      }, "(GMT+11) Asia/Magadan"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Sakhalin"
      }, "(GMT+11) Asia/Sakhalin"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Srednekolymsk"
      }, "(GMT+11) Asia/Srednekolymsk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Bougainville"
      }, "(GMT+11) Pacific/Bougainville"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Efate"
      }, "(GMT+11) Pacific/Efate"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Guadalcanal"
      }, "(GMT+11) Pacific/Guadalcanal"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Kosrae"
      }, "(GMT+11) Pacific/Kosrae"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Norfolk"
      }, "(GMT+11) Pacific/Norfolk"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Noumea"
      }, "(GMT+11) Pacific/Noumea"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Pohnpei"
      }, "(GMT+11) Pacific/Pohnpei"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Antarctica/McMurdo"
      }, "(GMT+12) Antarctica/McMurdo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Anadyr"
      }, "(GMT+12) Asia/Anadyr"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Asia/Kamchatka"
      }, "(GMT+12) Asia/Kamchatka"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Auckland"
      }, "(GMT+12) Pacific/Auckland"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Fiji"
      }, "(GMT+12) Pacific/Fiji"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Funafuti"
      }, "(GMT+12) Pacific/Funafuti"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Kwajalein"
      }, "(GMT+12) Pacific/Kwajalein"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Majuro"
      }, "(GMT+12) Pacific/Majuro"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Nauru"
      }, "(GMT+12) Pacific/Nauru"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Tarawa"
      }, "(GMT+12) Pacific/Tarawa"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Wake"
      }, "(GMT+12) Pacific/Wake"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Wallis"
      }, "(GMT+12) Pacific/Wallis"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Chatham"
      }, "(GMT+12) Pacific/Chatham"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Apia"
      }, "(GMT+13) Pacific/Apia"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Enderbury"
      }, "(GMT+13) Pacific/Enderbury"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Fakaofo"
      }, "(GMT+13) Pacific/Fakaofo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Tongatapu"
      }, "(GMT+13) Pacific/Tongatapu"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Pacific/Kiritimati"
      }, "(GMT+14) Pacific/Kiritimati")));
    }
  }]);

  return TimezoneForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var FollowButton =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(FollowButton, _React$Component8);

  function FollowButton(props) {
    var _this8;

    _classCallCheck(this, FollowButton);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(FollowButton).call(this, props));

    _this8.buttonClicked = function (event) {
      var self = _assertThisInitialized(_this8);

      var request = '/update/is_following/' + user + '/' + (!_this8.state.isFollowing).toString();
      axios.get(request).then(function (response) {
        self.state.isFollowing = response['data'];
        self.setState(self.state);
      });
    };

    _this8.state = {
      isFollowing: false
    };
    return _this8;
  }

  _createClass(FollowButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      var request = '/query/user/is_following/' + user;
      axios.get(request).then(function (response) {
        self.state.isFollowing = response['data'][0];
        self.setState(self.state);
      });
    }
  }, {
    key: "renderFollowed",
    value: function renderFollowed() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "follow-button",
        onClick: this.buttonClicked
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        className: "fa fa-check",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Followed"));
    }
  }, {
    key: "renderUnfollowed",
    value: function renderUnfollowed() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "follow-button",
        onClick: this.buttonClicked
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        className: "fa fa-user-plus",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Follow"));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isFollowing) {
        return this.renderFollowed();
      } else {
        return this.renderUnfollowed();
      }
    }
  }]);

  return FollowButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // MusicHighlight {
//   "Type": <One of "Track", "Album", "Artist">
//   "Track": <TrackName or omitted>
//   "Album": <AlbumName or omitted> 
//   "Artist": <ArtistName or omitted>
//  }


var MusicHighlight =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(MusicHighlight, _React$Component9);

  function MusicHighlight(props) {
    var _this9;

    _classCallCheck(this, MusicHighlight);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(MusicHighlight).call(this, props));
    _this9.state = {
      type: _this9.props.type,
      music_id: _this9.props.music_id,
      music_data: {}
    };
    return _this9;
  }

  _createClass(MusicHighlight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var request = "/query/music?type=" + this.state.type;
      request += "&id=" + this.state.music_id;
      var self = this;
      axios.get(request).then(function (response) {
        self.state.music_data = response.data;
        self.setState(self.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.type == "Artist") {
        var artist_img = artist_art_endpoint + this.state.music_data['img_id'] + '-medium.jpg';
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
          className: "music-highlight-img",
          src: artist_img
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight-gradient"
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight-text-layer-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight-text-group"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", {
          className: "music-highlight-text"
        }, this.state.music_data['artist']))));
      } else if (this.state.type == "Album") {
        var album_img = album_art_endpoint + this.state.music_data['img_id'] + '-medium.jpg';
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
          className: "music-highlight-img",
          src: album_img
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight-gradient"
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight-text-layer-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight-text-group"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", {
          className: "music-highlight-text"
        }, this.state.music_data['album']), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", {
          className: "music-highlight-text-small"
        }, this.state.music_data['artist']))));
      } else if (this.state.type == "Track") {
        var album_img = album_art_endpoint + this.state.music_data['img_id'] + '-medium.jpg';
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
          className: "music-highlight-img",
          src: album_img
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight-gradient"
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight-text-layer-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "music-highlight-text-group"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", {
          className: "music-highlight-text"
        }, this.state.music_data['track']), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", {
          className: "music-highlight-text-small"
        }, this.state.music_data['album']), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", {
          className: "music-highlight-text-small"
        }, this.state.music_data['artist']))));
      } else {
        return "";
      }
    }
  }]);

  return MusicHighlight;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ProfileSnapshot =
/*#__PURE__*/
function (_React$Component10) {
  _inherits(ProfileSnapshot, _React$Component10);

  function ProfileSnapshot(props) {
    var _this10;

    _classCallCheck(this, ProfileSnapshot);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(ProfileSnapshot).call(this, props));
    _this10.state = {
      profile_snapshot: {}
    };
    return _this10;
  }

  _createClass(ProfileSnapshot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      var request = '/user/' + profile_modal_user + '/profile_snapshot/';
      axios.get(request).then(function (response) {
        self.state.profile_snapshot = response.data;
        self.setState(self.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var profile_path = profile_art_endpoint + this.state.profile_snapshot['img_id'] + '.jpg';

      if (!('top_artist' in this.state.profile_snapshot)) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-snapshot-modal-space"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, " Loading... "));
      }

      var artist_img = artist_art_endpoint + this.state.profile_snapshot['top_artist'][0]['img_id'] + '-medium.jpg';
      var album_img = album_art_endpoint + this.state.profile_snapshot['top_album'][0]['img_id'] + '-medium.jpg';
      var track_img = album_art_endpoint + this.state.profile_snapshot['top_track'][0]['img_id'] + '-medium.jpg';
      var top_artist = this.state.profile_snapshot['top_artist'][0];
      var top_album = this.state.profile_snapshot['top_album'][0];
      var top_track = this.state.profile_snapshot['top_track'][0];
      var recent_listens_state = this.state.profile_snapshot['recent_tracks'];
      var album_love_button_data = {
        album_id: top_album['album_id'],
        is_current_user: false,
        is_loved: top_album['is_loved']
      };
      var artist_love_button_data = {
        artist_id: top_artist['artist_id'],
        is_current_user: false,
        is_loved: top_artist['is_loved']
      };
      var track_love_button_data = {
        track_id: top_track['track_id'],
        is_current_user: false,
        is_loved: top_track['is_loved']
      };
      var recent_listens = [];

      for (var i = 0; i < recent_listens_state.length; ++i) {
        var k = "listen-snapshot-" + i.toString();
        var className;

        if (i % 2 == 0) {
          className = "listen-entry";
        } else {
          className = "listen-entry-shaded";
        }

        var love_button_data = {
          track_id: recent_listens_state[i]['track_id'],
          is_current_user: false,
          is_loved: recent_listens_state[i]['is_loved']
        };
        var img_path = album_art_endpoint + recent_listens_state[i]['img_id'] + '-small.jpg';
        recent_listens.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          key: k
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: className
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
          className: "listen-entry-art",
          src: img_path
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "listen-entry-track"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, recent_listens_state[i]['artist'], " - ", recent_listens_state[i]['track'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoveButton, love_button_data), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "listen-entry-time"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, recent_listens_state[i]['time'])))));
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-modal-space"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-column"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-row-underlined"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        className: "profile-snapshot-img",
        src: profile_path
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-username"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, profile_modal_user))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-top-music"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Top Track (1m)"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-profile-snapshot"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        className: "album-entry-art-profile-snapshot",
        src: track_img
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-art-gradient"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-layer-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoveButton, track_love_button_data), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text-group"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, top_track['track'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, top_track['album'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, top_track['artist'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, top_track['count'], " listens")))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-top-music"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Top Album (1m)"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-profile-snapshot"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        className: "album-entry-art-profile-snapshot",
        src: album_img
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-art-gradient"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-layer-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoveButton, album_love_button_data), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text-group"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, top_album['album'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, top_album['artist'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, top_album['count'], " listens")))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-top-music"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Top Artist (1m)"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-profile-snapshot"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        className: "album-entry-art-profile-snapshot",
        src: artist_img
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-art-gradient"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-layer-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoveButton, artist_love_button_data), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text-group"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, top_artist['artist'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "album-entry-text"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, top_artist['count'], " listens")))))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-column"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "recent-tracks-profile-snapshot"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, " Recent Listens "), recent_listens))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-snapshot-row"
      }));
    }
  }]);

  return ProfileSnapshot;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Profile =
/*#__PURE__*/
function (_React$Component11) {
  _inherits(Profile, _React$Component11);

  function Profile(props) {
    var _this11;

    _classCallCheck(this, Profile);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Profile).call(this, props));

    _this11.updateEditProfileModal = function (event) {
      var id = event.target.id;
      var split = id.split('-');
      var piece_id = split[1];
      var field = split[0];

      if (piece_id == "") {
        _this11.state.editProfileModalValue = event.target.value;
        _this11.state.editProfileModalOptions = {}; // Reset the modal options
      } else {
        _this11.state.profile_pieces_edits[Number(piece_id)]["PieceType"] = event.target.value;
        _this11.state.profile_pieces_edits[Number(piece_id)]["PieceData"] = {};
      }

      _this11.setState(_this11.state);
    };

    _this11.updateModalOption = function (event) {
      var id = event.target.id;
      var split = id.split('-');
      var piece_id = split[1];
      var field = split[0];

      if (piece_id == "") {
        if (field == "recentListenCount") {
          _this11.state.editProfileModalOptions["Number"] = event.target.value;
        } else if (field == "profileBioEditForm") {
          _this11.state.editProfileModalOptions["Text"] = event.target.value;
        } else if (field == "selectHighlightType") {
          _this11.state.editProfileModalOptions["Type"] = event.target.value;
        }
      } else {
        if (field == "recentListenCount") {
          _this11.state.profile_pieces_edits[Number(piece_id)]["PieceData"]["Number"] = event.target.value;
        } else if (field == "profileBioEditForm") {
          _this11.state.profile_pieces_edits[Number(piece_id)]["PieceData"]["Text"] = event.target.value;
        } else if (field == "selectHighlightType") {
          _this11.state.profile_pieces_edits[Number(piece_id)]["PieceData"]["Type"] = event.target.value;
        }
      }

      _this11.setState(_this11.state);
    };

    _this11.state = {
      profile_layout: {
        "Left": [],
        "Right": []
      },
      profile_pieces: {},
      // Profile pieces we already have stored.
      profile_pieces_edits: {},
      editProfileModalValue: "SelectComponent",
      editProfileModalOptions: {},
      pendingUpdateMode: false,
      isCurrentUser: true
    };
    return _this11;
  }

  _createClass(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      var request = '/user/' + user + '/profile/';
      axios.get(request).then(function (response) {
        self.state.profile_layout = response.data["ProfileLayout"];

        for (var piece_id in response.data["ProfilePieces"]) {
          self.state.profile_pieces[piece_id] = response.data["ProfilePieces"][piece_id];
        }

        self.setState(self.state);
      });
    } // Serialization format:
    // { 
    //  "ProfileFormat": [ <Profile Piece Id>, ... ]
    // }
    //

  }, {
    key: "serializeProfileFromState",
    value: function serializeProfileFromState() {
      var json_layout = this.state.profile_layout;
      var request_endpoint = '/update/profile_layout';
      axios.post(request_endpoint, json_layout).then(function (response) {// console.log(response)
      });
    }
  }, {
    key: "deserializeProfileToState",
    value: function deserializeProfileToState(profile_data) {} // On submit, assumes that editProfileModalValue and editProfileModalOptions are appropriately set.

  }, {
    key: "submitProfileEdit",
    value: function submitProfileEdit(piece_id) {
      console.log(piece_id);

      if (piece_id < 0 && this.state.editProfileModalValue == "Bio" || piece_id > 0 && this.state.profile_pieces_edits[piece_id]["PieceType"] == "Bio") {
        if (piece_id < 0) {
          this.state.editProfileModalOptions["Text"] = document.getElementById("profileBioEditForm-" + piece_id.toString()).value;
        } else {
          this.state.profile_pieces_edits[piece_id]["PieceData"]["Text"] = document.getElementById("profileBioEditForm-" + piece_id.toString()).value;
        }
      } else if (piece_id < 0 && this.state.editProfileModalValue == "MusicHighlight" || piece_id > 0 && this.state.profile_pieces_edits[piece_id]["PieceType"] == "MusicHighlight") {
        if (piece_id < 0) {
          if (this.state.editProfileModalOptions["Type"] == "Track") {
            this.state.editProfileModalOptions["Track"] = document.getElementById("exist-highlight-edit-track-track-" + piece_id.toString()).value;
            this.state.editProfileModalOptions["Album"] = document.getElementById("exist-highlight-edit-album-track-" + piece_id.toString()).value;
            this.state.editProfileModalOptions["Artist"] = document.getElementById("exist-highlight-edit-artist-track-" + piece_id.toString()).value;
          } else if (this.state.editProfileModalOptions["Type"] == "Album") {
            this.state.editProfileModalOptions["Album"] = document.getElementById("exist-highlight-edit-album-album-" + piece_id.toString()).value;
            this.state.editProfileModalOptions["Artist"] = document.getElementById("exist-highlight-edit-artist-album-" + piece_id.toString()).value;
          } else if (this.state.editProfileModalOptions["Type"] == "Artist") {
            this.state.editProfileModalOptions["Artist"] = document.getElementById("exist-highlight-edit-artist-artist-" + piece_id.toString()).value;
          }
        } else {
          if (this.state.profile_pieces_edits[piece_id]["PieceData"]["Type"] == "Track") {
            this.state.profile_pieces_edits[piece_id]["PieceData"]["Track"] = document.getElementById("exist-highlight-edit-track-track-" + piece_id.toString()).value;
            this.state.profile_pieces_edits[piece_id]["PieceData"]["Album"] = document.getElementById("exist-highlight-edit-album-track-" + piece_id.toString()).value;
            this.state.profile_pieces_edits[piece_id]["PieceData"]["Artist"] = document.getElementById("exist-highlight-edit-artist-track-" + piece_id.toString()).value;
          } else if (this.state.profile_pieces_edits[piece_id]["PieceData"]["Type"] == "Album") {
            this.state.profile_pieces_edits[piece_id]["PieceData"]["Album"] = document.getElementById("exist-highlight-edit-album-album-" + piece_id.toString()).value;
            this.state.profile_pieces_edits[piece_id]["PieceData"]["Artist"] = document.getElementById("exist-highlight-edit-artist-album-" + piece_id.toString()).value;
          } else if (this.state.profile_pieces_edits[piece_id]["PieceData"]["Type"] == "Artist") {
            this.state.profile_pieces_edits[piece_id]["PieceData"]["Artist"] = document.getElementById("exist-highlight-edit-artist-artist-" + piece_id.toString()).value;
          }
        }
      } // Submit the new profile piece, it returns an identifier.


      var json_piece = {};
      json_piece["PieceId"] = piece_id;

      if (piece_id < 0) {
        json_piece["PieceType"] = this.state.editProfileModalValue;
        json_piece["PieceData"] = this.state.editProfileModalOptions;
      } else {
        json_piece["PieceType"] = this.state.profile_pieces_edits[piece_id]["PieceType"];
        json_piece["PieceData"] = this.state.profile_pieces_edits[piece_id]["PieceData"];
      } // Pop all Id's from the piece data if the type is musichighlight


      if (json_piece["PieceType"] == "MusicHighlight") {
        delete json_piece["PieceData"].Artist_id;
        delete json_piece["PieceData"].Album_id;
        delete json_piece["PieceData"].Track_id;
      }

      if (piece_id >= 0) {
        json_piece["PieceId"] = piece_id;
      }

      var self = this;
      var request_endpoint = '/update/profile_piece';
      axios.post(request_endpoint, json_piece).then(function (response) {
        // Submit the new serialized profile.
        if (piece_id == -1) {
          self.state.profile_layout["Left"].push(response.data);
        } else if (piece_id == -2) {
          self.state.profile_layout["Right"].push(response.data);
        } // Update state internally once we have the piece_id


        self.state.profile_pieces[response.data] = json_piece;
        self.setState(self.state); // A new piece has been added.

        if (piece_id < 0) {
          self.serializeProfileFromState();
        }
      }); // Reset the add component modal.

      this.state.editProfileModalValue = "SelectComponent";
      this.setState(this.state); // Close the modal using jquery.

      var self = this;
      $(function () {
        $('#' + self.getModalTag(piece_id)).modal('hide');
      });
    }
  }, {
    key: "deleteProfilePiece",
    value: function deleteProfilePiece(piece_id) {
      var json_piece = {};
      json_piece["PieceId"] = piece_id;
      json_piece["PieceType"] = "Delete";
      json_piece["PieceData"] = "";
      var self = this;
      var request_endpoint = '/update/profile_piece';
      axios.post(request_endpoint, json_piece); // Garbage delete from layout.

      self.state.profile_pieces[piece_id] = undefined;
      var new_profile_left = [];
      var new_profile_right = [];

      for (var i = 0; i < this.state.profile_layout["Left"].length; ++i) {
        if (this.state.profile_layout["Left"][i] != piece_id) {
          new_profile_left.push(this.state.profile_layout["Left"][i]);
        }
      }

      for (var _i = 0; _i < this.state.profile_layout["Right"].length; ++_i) {
        if (this.state.profile_layout["Right"][_i] != piece_id) {
          new_profile_right.push(this.state.profile_layout["Right"][_i]);
        }
      }

      this.state.profile_layout["Left"] = new_profile_left;
      this.state.profile_layout["Right"] = new_profile_right;
      this.setState(this.state);
      self.serializeProfileFromState(); // Close the modal using jquery.

      var self = this;
      $(function () {
        $('#' + self.getModalTag(piece_id)).modal('hide');
      });
    }
  }, {
    key: "displayModalHelp",
    value: function displayModalHelp() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-edit-help"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
        className: "profile-edit-help-text"
      }, "Want to cancel your changes? Just click outside the edit box!"));
    }
  }, {
    key: "getModalTag",
    value: function getModalTag(piece_id) {
      return "profileEditModal" + piece_id.toString();
    }
  }, {
    key: "getNewComponent",
    value: function getNewComponent(piece_id) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        key: "new-profile-piece-group" + piece_id.toString(),
        className: "profile-component"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
        className: "profile-edit-button",
        "data-toggle": "modal",
        "data-target": "#" + this.getModalTag(piece_id)
      }, "Add Profile Piece"), this.getComponentModal(piece_id));
    } // The modal is set based on the profile piece's current options. We modify those directly unless this piece_id 
    // refers to a piece that doesn't exist (piece_id < 0)

  }, {
    key: "getComponentModal",
    value: function getComponentModal(piece_id) {
      var _this12 = this;

      var additionalOptions;
      var value;
      var options;
      var delete_button_div;

      if (piece_id >= 0) {
        // Create a copy in  default values for the piece.
        if (!(piece_id in this.state.profile_pieces_edits)) {
          this.state.profile_pieces_edits[piece_id] = {};
          this.state.profile_pieces_edits[piece_id]["PieceType"] = this.state.profile_pieces[piece_id]["PieceType"];
          this.state.profile_pieces_edits[piece_id]["PieceData"] = this.state.profile_pieces[piece_id]["PieceData"];
        }

        value = this.state.profile_pieces_edits[piece_id]["PieceType"];
        options = this.state.profile_pieces_edits[piece_id]["PieceData"];
        delete_button_div = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          className: "profile-edit-save",
          onClick: function onClick() {
            return _this12.deleteProfilePiece(piece_id);
          }
        }, "Delete");
      } else {
        value = this.state.editProfileModalValue;
        options = this.state.editProfileModalOptions;
        delete_button_div = "";
      }

      if (options == "SelectComponent") {
        additionalOptions = undefined;
      } else if (value == "TopTracks") {
        additionalOptions = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-options"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-button-row"
        }, delete_button_div, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          className: "profile-edit-save",
          onClick: function onClick() {
            return _this12.submitProfileEdit(piece_id);
          }
        }, "Save")));
      } else if (value == "TopAlbums") {
        additionalOptions = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-options"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-button-row"
        }, delete_button_div, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          className: "profile-edit-save",
          onClick: function onClick() {
            return _this12.submitProfileEdit(piece_id);
          }
        }, "Save")));
      } else if (value == "TopArtists") {
        additionalOptions = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-options"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-button-row"
        }, delete_button_div, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          className: "profile-edit-save",
          onClick: function onClick() {
            return _this12.submitProfileEdit(piece_id);
          }
        }, "Save")));
      } else if (value == "Bio") {
        if (!("Text" in options)) {
          options["Text"] = "";
        }

        additionalOptions = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-options"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-button-row"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", {
          id: "profileBioEditForm-" + piece_id.toString(),
          className: "bio-edit-form",
          type: "text",
          "max-length": "500",
          value: options["Text"],
          onChange: this.updateModalOption
        })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-button-row"
        }, delete_button_div, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          className: "profile-edit-save",
          onClick: function onClick() {
            return _this12.submitProfileEdit(piece_id);
          }
        }, "Save")));
      } else if (value == "ListenSummary") {
        additionalOptions = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-options"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-button-row"
        }, delete_button_div, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          className: "profile-edit-save",
          onClick: function onClick() {
            return _this12.submitProfileEdit(piece_id);
          }
        }, "Save")));
      } else if (value == "RecentListens") {
        // Initialize the default values for the modal options
        if (!("Number" in options)) {
          options["Number"] = "5";
        }

        additionalOptions = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-options"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-row"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
          className: "profile-edit-options-name"
        }, "Number of listens"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
          id: "recentListenCount-" + piece_id.toString(),
          onChange: this.updateModalOption,
          value: options["Number"]
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          value: "5"
        }, "5"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          value: "10"
        }, "10"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          value: "15"
        }, "15"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          value: "20"
        }, "20"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-button-row"
        }, delete_button_div, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          className: "profile-edit-save",
          onClick: function onClick() {
            return _this12.submitProfileEdit(piece_id);
          }
        }, "Save")));
      } else if (value == "MusicHighlight") {
        if (!("Type" in options)) {
          options["Type"] = "SelectType";
        }

        var highlightFields;

        if (options["Type"] == "SelectType") {
          highlightFields = "";
        } else if (options["Type"] == "Track") {
          highlightFields = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "music-highlight-group"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "profile-edit-row"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
            className: "profile-edit-options-name"
          }, "Artist"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
            id: "exist-highlight-edit-artist-track-" + piece_id.toString(),
            className: "highlight-edit-form",
            type: "text",
            "max-length": "100"
          })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "profile-edit-row"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
            className: "profile-edit-options-name"
          }, "Album"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
            id: "exist-highlight-edit-album-track-" + piece_id.toString(),
            className: "highlight-edit-form",
            type: "text",
            "max-length": "100"
          })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "profile-edit-row"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
            className: "profile-edit-options-name"
          }, "Track"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
            id: "exist-highlight-edit-track-track-" + piece_id.toString(),
            className: "highlight-edit-form",
            type: "text",
            "max-length": "100"
          })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "profile-edit-button-row"
          }, delete_button_div, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
            className: "profile-edit-save",
            onClick: function onClick() {
              return _this12.submitProfileEdit(piece_id);
            }
          }, "Save")));
        } else if (options["Type"] == "Album") {
          highlightFields = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "music-highlight-group"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "profile-edit-row"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
            className: "profile-edit-options-name"
          }, "Artist"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
            id: "exist-highlight-edit-artist-album-" + piece_id.toString(),
            className: "highlight-edit-form",
            type: "text",
            "max-length": "100"
          })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "profile-edit-row"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
            className: "profile-edit-options-name"
          }, "Album"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
            id: "exist-highlight-edit-album-album-" + piece_id.toString(),
            className: "highlight-edit-form",
            type: "text",
            "max-length": "100"
          })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "profile-edit-button-row"
          }, delete_button_div, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
            className: "profile-edit-save",
            onClick: function onClick() {
              return _this12.submitProfileEdit(piece_id);
            }
          }, "Save")));
        } else if (options["Type"] == "Artist") {
          highlightFields = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "music-highlight-group"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "profile-edit-row"
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
            className: "profile-edit-options-name"
          }, "Artist"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
            id: "exist-highlight-edit-artist-artist-" + piece_id.toString(),
            className: "highlight-edit-form",
            type: "text",
            "max-length": "100"
          })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: "profile-edit-button-row"
          }, delete_button_div, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
            className: "profile-edit-save",
            onClick: function onClick() {
              return _this12.submitProfileEdit(piece_id);
            }
          }, "Save")));
        }

        additionalOptions = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-options"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-edit-row"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
          className: "profile-edit-options-name"
        }, "Highlight Type"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
          id: "selectHighlightType-" + piece_id.toString(),
          onChange: this.updateModalOption,
          value: options["Type"]
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          value: "SelectType"
        }, "Select a highlight type..."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          value: "Track"
        }, "Track"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          value: "Album"
        }, "Album"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          value: "Artist"
        }, "Artist"))), highlightFields);
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        id: this.getModalTag(piece_id),
        className: "modal fade",
        role: "dialog"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "modal-dialog"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "modal-body profile-edit-modal"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "profile-edit-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
        className: "profile-edit-options-name"
      }, "Profile Piece"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
        id: "profileModalType-" + piece_id.toString(),
        onChange: this.updateEditProfileModal,
        value: value
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "SelectComponent"
      }, "Select a component..."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "TopTracks"
      }, "Top Tracks"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "TopAlbums"
      }, "Top Albums"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "TopArtists"
      }, "Top Artists"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Bio"
      }, "Bio"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "ListenSummary"
      }, "Listen Summary"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "RecentListens"
      }, "Recent Listens"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "MusicHighlight"
      }, "Music Highlight"))), additionalOptions, this.displayModalHelp()))));
    }
  }, {
    key: "getSettingsButtonForPiece",
    value: function getSettingsButtonForPiece(piece_id, x_off, y_off) {
      var settingsStyle = {
        right: x_off,
        top: y_off
      };

      if (this.state.isCurrentUser) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-settings-button-group",
          style: settingsStyle
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
          className: "fa fa-lg fa-cog profile-piece-settings-button",
          "aria-hidden": "true",
          "data-toggle": "modal",
          "data-target": "#" + this.getModalTag(piece_id)
        }));
      } else {
        return "";
      }
    }
  }, {
    key: "getProfilePieceComponent",
    value: function getProfilePieceComponent(piece_id, piece_data) {
      var key = "profile-piece-" + piece_id.toString();
      var props = {
        piece_id: piece_id
      };

      if (piece_data["PieceType"] == "TopTracks") {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-component"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TopTracks, props), this.getSettingsButtonForPiece(piece_id, "118px", "14px")), this.getComponentModal(piece_id));
      } else if (piece_data["PieceType"] == "TopAlbums") {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-component"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TopAlbums, props), this.getSettingsButtonForPiece(piece_id, "118px", "14px")), this.getComponentModal(piece_id));
      } else if (piece_data["PieceType"] == "TopArtists") {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-component"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TopArtists, props), this.getSettingsButtonForPiece(piece_id, "118px", "14px")), this.getComponentModal(piece_id));
      } else if (piece_data["PieceType"] == "Bio") {
        props["bio_text"] = piece_data["PieceData"]["Text"];
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-component"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Bio, props), this.getSettingsButtonForPiece(piece_id, 0, 0)), this.getComponentModal(piece_id));
      } else if (piece_data["PieceType"] == "ListenSummary") {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-component"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "To Implement")), this.getComponentModal(piece_id));
      } else if (piece_data["PieceType"] == "RecentListens") {
        props["count"] = piece_data["PieceData"]["Number"];
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-component"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RecentListens, props), this.getSettingsButtonForPiece(piece_id, 0, "14px")), this.getComponentModal(piece_id));
      } else if (piece_data["PieceType"] == "MusicHighlight") {
        props["type"] = piece_data["PieceData"]["Type"];

        if (piece_data["PieceData"]["Type"] == "Artist") {
          props["music_id"] = piece_data["PieceData"]["Artist_id"];
        } else if (piece_data["PieceData"]["Type"] == "Album") {
          props["music_id"] = piece_data["PieceData"]["Album_id"];
        } else if (piece_data["PieceData"]["Type"] == "Track") {
          props["music_id"] = piece_data["PieceData"]["Track_id"];
        }

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "profile-component"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MusicHighlight, props), this.getSettingsButtonForPiece(piece_id, "10px", "10px")), this.getComponentModal(piece_id));
      }
    }
  }, {
    key: "render",
    value: function render() {
      // Two column format. Left and right.
      var components_left = [];

      for (var i = 0; i < this.state.profile_layout["Left"].length; ++i) {
        var piece_id = this.state.profile_layout["Left"][i];

        if (piece_id in this.state.profile_pieces) {
          var piece_data = this.state.profile_pieces[piece_id];
          components_left.push(this.getProfilePieceComponent(piece_id, piece_data));
        }
      }

      var components_right = [];

      for (var _i2 = 0; _i2 < this.state.profile_layout["Right"].length; ++_i2) {
        var piece_id = this.state.profile_layout["Right"][_i2];

        if (piece_id in this.state.profile_pieces) {
          var piece_data = this.state.profile_pieces[piece_id];
          components_right.push(this.getProfilePieceComponent(piece_id, piece_data));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        key: "profile",
        className: "profile-data"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row profile-data-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        id: "col-left",
        className: "col-md-6 col-sm-6 col-xs-12"
      }, components_left, this.getNewComponent(-1)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        id: "col-right",
        className: "col-md-6 col-sm-6 col-xs-12"
      }, components_right, this.getNewComponent(-2))));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Render all the things


var domContainer = document.getElementById("profile");

if (domContainer != null) {
  ReactDOM.render(e(Profile), domContainer);
}

domContainer = document.getElementById("timezone-form");

if (domContainer != null) {
  ReactDOM.render(e(TimezoneForm), domContainer);
}

domContainer = document.getElementById("follow-button");

if (domContainer != null) {
  ReactDOM.render(e(FollowButton), domContainer);
}

domContainer = document.getElementById("profile-snapshot");

if (domContainer != null) {
  ReactDOM.render(e(ProfileSnapshot), domContainer);
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

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


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


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.6';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
  React.unstable_ConcurrentMode = undefined;
  React.unstable_Profiler = undefined;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map