import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions'

import 'bootstrap/dist/css/bootstrap.css'
import '../style.css'

class TodoHeader extends Component {

	constructor(props) {
		super(props);
	}


	// 向redux中追加一條新的todo
	/*
	todo結構：
	id: xxx
	name: 'xxx'
	state: 0未完成、1已完成
	 */
	keyUp = e => {
		if (e.keyCode === 13 || e.keyCode === 108) {
			const value = e.target.value.trim();
			if (value.length === 0) return;
			this.props.addTodo({
				name: value,
				state: 0,
			});
			e.target.value = '';
		}
	};

	render() {
		// 獲取todo列表
		const {data} = this.props;
		// 篩選未完成的todo，state為0的todo
		const todoNotDone = data.filter(item => (parseFloat(item['state']) === 0)).length;

		return (
			<div className='card-header'>
				<h5 className='card-title'>
					{/* 未完成的todolist：獲取所有的狀態信息，篩選出state為0的數組長度 */}
					TodoLists 【Not complete todolists <span className='count'>{todoNotDone}</span>】
				</h5>
				<input type="text" className='form-control'
				       placeholder='please enter the todo to be completed'
				       onKeyUp={this.keyUp}/>
			</div>
		);
	}
}

export default connect(
	state => ({...state.todo}),
	{addTodo}
)(TodoHeader);
