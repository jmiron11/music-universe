'use strict';

const e = React.createElement;

class TopTracks extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { liked: false };
  }

  render() {
    return (
		<div class = "profile-section-header-timespan">
	        <h6>Top Tracks</h6>
	        <select class="timespan-form" id="rating" name="rating">
	            <option value="5">Last day</option>
	            <option value="4">Last week</option>
	            <option value="3" selected>Last month</option>
	            <option value="2">Last year</option>
	            <option value="1">All time</option>
	        </select>
    	</div>
    );
  }
}


const domContainer = document.getElementById("top-tracks")
ReactDOM.render(e(TopTracks), domContainer);

    	{/*<div class = "profile-section-header-timespan">
        <h6>Top Tracks</h6>
        <select class="timespan-form" id="rating" name="rating">
            <option value="5">Last day</option>
            <option value="4">Last week</option>
            <option value="3" selected>Last month</option>
            <option value="2">Last year</option>
            <option value="1">All time</option>
        </select>
    	</div>*/}