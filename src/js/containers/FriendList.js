import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom';

class FriendList extends React.Component {

   constructor(props) {
      super(props);
      
   };
   componentDidMount() {
   		console.log('cdm called');
   		setInterval( () => this.tick(), 1000)

   }
   componentWillUnmount() {
   		console.log('unmount called');
   }
   tick = () => {
       console.log('tick called');

   }
   render() {

   	  console.log(this.props.friendsInfo.data, this.props);
        return (
       		<div>
       			<table>
       				<thead>
       					<tr>
       						<td>Name</td>
       						<td>Phone No.</td>
       						<td>Email</td>
       						<td>Work</td>
       						<td>City</td>
       						<td>Edit</td>
       					</tr>
       				</thead>
       				<tbody>
       				{this.props.friendsInfo && this.props.friendsInfo.data.map((data) => {
       					console.log(data)
	       				return(
	       					<tr key={data.key}>
	       						<td>{data.name}</td>
	       						<td>{data.phone}</td>
	       						<td>{data.email}</td>
	       						<td>{data.work}</td>
	       						<td>{data.city}</td>
	       						<td><Link to={`/edit/${data.key}`}>Edit</Link></td>
	       					</tr>
	       				)
	       			})}	
       				</tbody>
       			</table>
       		</div>
       	)
     }
}

function mapStateToProps(state) {
	return {
		friendsInfo: state.FriendList
	}
}

export default connect(mapStateToProps)(FriendList);
