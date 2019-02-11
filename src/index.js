import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'

import store from './redux/store'
import TodoHeader from './components/TodoHeader'
import TodoBody from './components/TodoBody'
import TodoFooter from './components/TodoFooter'


ReactDOM.render(
	<Provider store={store}>
		<div className='card' style={{width: '50%', margin: '20px'}}>
			<TodoHeader/>
			<TodoBody/>
			<TodoFooter/>
		</div>
	</Provider>,
	document.getElementById('root'));

