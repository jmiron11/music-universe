import React from 'react'
import axios from 'axios';


import { Line } from 'react-chartjs-2'


/* 
	Endpoints required:
		- Need to be able to retrieve aggregate number of listens with filter based on track, album, artist.
		- 

*/
export default class ListenChart extends React.Component {
	constructor(props) {
	    super(props);

	    var t_end_default = this.getSecondsSinceEpoch()
	    var t_start_default = this.getTimeOffsetByT(t_end_default, 2*7*24*60*60);
	    this.state = { 
	                    t_start: t_start_default,
	                    t_end: t_end_default,
	                   	timespan: 'day',
	                   	data: {
	                   		labels: [],
	                   		lineTension: 0,
	                   		datasets: [{
								// fillColor: "rgba(220,220,220,0.2)",
								strokeColor: "rgba(220,220,220,1)",
								pointColor: "rgba(220,220,220,1)",
								pointStrokeColor: "#fff",
								pointHighlightFill: "#fff",
								pointHighlightStroke: "rgba(220,220,220,1)",
	                   			data: []
	                   		}]
	                   	}
	                 };
  	}

    getSecondsSinceEpoch() {
	    var d = new Date();
	    return Math.floor(d.getTime() / 1000)
  	}

    getTimeOffsetByT(t, offset) {
    	return t - offset
  	}



  	updateChartBasedOnCurrentParams() {
		var request = '/user/' + user + '/searchable_listens'
    	request += '?t_start=' + this.state.t_start.toString()
    	request += '&t_end=' + this.state.t_end.toString()
    	request += '&timespan=' + this.state.timespan

    	var self = this
    	var labels = []
    	var data = []
    	axios.get(request).then(function(response) { 
    		var resp = response['data']
    		for(let i = 0; i < resp.length; ++i) {
    			labels.push(resp[i]['t'])
    			data.push(resp[i]['count'])
    		}

    		self.state.data.labels = labels
    		self.state.data.datasets[0].data = data
    		self.setState(self.state)
    	})
  	}

    componentDidMount(){
   		this.updateChartBasedOnCurrentParams()
  	}
	
	render() {
		var options = {
			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,

			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",

			//Number - Width of the grid lines
			scaleGridLineWidth : 1,

			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,

			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,

			//Boolean - Whether the line is curved between points
			bezierCurve : false,

			//Number - Tension of the bezier curve between points
			bezierCurveTension : 0.4,

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 4,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//Boolean - Whether to horizontally center the label and point dot inside the grid
			offsetGridLines : false,

			legend: {
            	display: false
         	},

			scales: {
			    yAxes: [{
			      	scaleLabel: {
			        	display: true,
			        	labelString: 'Time'
			     	}
			    }],
			    xAxes: [{
			      	scaleLabel: {
			        	display: true,
			        	labelString: 'Number of Listens'
			     	}
			    }]
			}  
		};

		return (
			<Line data={this.state.data} options={options}/>
		)
	}
}