import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
class EditFriend extends React.Component {
	constructor(props) {
		super(props);
	}
 	render() {
 		console.log(this.props);
 		return (
 			<div>Hello {this.props.match.params.friendId}</div>
 		)
 	}
}
function mapStateToProps(state) {
	return {
		friendsInfo: state.FriendList
	}
}
function mapDispatchToProps(dispatch) {
	return {
		editFriend: bindActionCreators(actions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(EditFriend);