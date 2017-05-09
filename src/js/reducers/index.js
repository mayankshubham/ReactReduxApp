import {combineReducers} from 'redux';
import FriendList from './friendList';

const allReducers = combineReducers({
	FriendList: FriendList  
})
export default allReducers;