import React, {Component} from 'react';
import {connect} from "react-redux";
import {updateTodoState, deleteTodo} from '../redux/actions'

import 'bootstrap/dist/css/bootstrap.css'
import '../style.css'

class TodoBody extends Component {


	render() {
		// 獲取redux中的任務數據，根據flag標識，篩選對應的內容
		let {data, flag} = this.props;
		data = data.filter(item => {
			let {state} = item;
			state = parseFloat(state);
			if (flag === 'complete') return state === 1;
			if (flag === 'uncomplete') return state === 0;
			return true;
		});

		// !是取反、!!轉boolean
		return (
			<div className='card-body'>
				<ul className='list-group'>
					{data.map((item, index) => {
						let {id, name, state} = item;
						state = parseFloat(state);
						return (
							<li className='list-group-item' key={index}>
								<input type="checkbox" name='todo'
								       checked={!!state}
								       onChange={e => {
									       // 更新todo狀態，是否完成
									       let newState = e.target.checked ? 1 : 0;
									       this.props.updateTodoState(id, newState);
								       }}

								/>
								<span className={state === 1 ? 'complete' : ''}>{id}. {name}</span>
								<a href="#" className='btn-danger'
								   onClick={e => {
									   // 確認刪除
									   const isConfirm = window.confirm('Are you sure to delete ?');
									   if (isConfirm) {
										   this.props.deleteTodo(id);
									   }
								   }}
								>Delete</a>
							</li>
						)
					})}

				</ul>
			</div>
		);
	}
}


export default connect(
	state => ({...state.todo}),
	{updateTodoState, deleteTodo}
)(TodoBody);
