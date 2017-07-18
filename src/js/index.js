import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import reducers from './reducers'
import FriendList from './containers/FriendList'
import EditFriend from './containers/EditFriend'
const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" render={() => (<FriendList text="Hi"/>)} />
				<Route path="/edit/:friendId" component={EditFriend}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('container')
)
