import React from 'react';
import TableRow from './TableRow';

export default class StatsTable extends React.Component {
  render() {
    return (
      <div>
		<table className="table">
		  	<thead>
		    	<tr>
		      		<th scope="col">Date</th>
		      		<th scope="col">Exercise</th>
		      		<th scope="col">Set #</th>
		      		<th scope="col">Reps</th>
		      		<th scope="col">Lbs</th>
		    	</tr>
		  	</thead>
			<tbody>
				{this.props.days.map((eventsThisDay, day) =>
          			<TableRow key={day}
          			day={day}
          			changeDay={this.props.changeDay}
          			count={eventsThisDay} />)}
			</tbody>
		</table>
      </div>
    );
  }
}
