import React from 'react'
import ListenChart from './listen_chart.jsx'

export default class Explorer extends React.Component {

  render() {
    return (
    	<div className="explorer-area">
    		<h1>The one and only chart</h1>
    		<div className="explorer-chart">
	    		<ListenChart />
	    	</div>
    	</div>
    )
  }
}