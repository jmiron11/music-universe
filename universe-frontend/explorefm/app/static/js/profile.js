require("@babel/register");

'use strict';

const e = React.createElement;

class TopTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timespan: "month" };
  }

  updateTimespan = (event) => {
  	this.setState({ 
  		timespan: event.target.value 
  	})
  }

  displayTracks() {
    return this.state.timespan
  }

  updateData() {
    var pls = document.getElementById("pls");
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
    		<div id="pls"><h6>{ this.state.timespan }</h6></div>
    	</div>
    );
  }
}


const domContainer = document.getElementById("top-tracks")
ReactDOM.render(e(TopTracks), domContainer);