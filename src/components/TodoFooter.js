import React, {Component} from 'react';
import {connect} from "react-redux";
import {filterTodo} from '../redux/actions'

import 'bootstrap/dist/css/bootstrap.css'
import '../style.css'

class TodoFooter extends Component {

	constructor(props) {
		super(props);

		// 自己構件展示按鈕的數據
		this.showData = [
			{text: 'All', flag: 'all'},
			{text: 'Complete', flag: 'complete'},
			{text: 'Not Complete', flag: 'uncomplete'}
		];
	}


	updateFilter = e => {
		let target = e.target;
		let targetTag = target.tagName;

		// // 合併點擊事件源，點擊li，等於點擊li裡面的a
		// if (targetTag === "LI") {
		// 	target = target.firstElementChild;
		// 	targetTag = target.tagName
		// }

		if (targetTag === "A") {
			// let text = 'all';
			let text = target.getAttribute('flag');
			const {filterTodo} = this.props;

			// 方法一
			// if (target.innerHTML === 'Complete') text = 'complete';
			// if (target.innerHTML === 'Not Complete') text = 'uncomplete';
			// //當前的篩選狀態和點擊的按鈕是一致的，沒有必要再重新篩選的狀態
			if (this.props.flag === text) return;
			filterTodo(text);

			// 方法二 
			// switch (target.innerHTML) {
			// 	case 'Complete':
			// 		text = 'complete';
			// 		return filterTodo(text);
			// 	case 'Not Complete':
			// 		text = 'uncomplete';
			// 		return filterTodo(text);
			// 	default:
			// 		return filterTodo(text);
			// }

		}
	};

	render() {
		const {flag} = this.props;
		return (
			<div className='card-footer'>
				<ul className="nav nav-pills" onClick={this.updateFilter}>

				{this.showData.map((item, index) => {
					const {text, flag:itemFlag} = item;
					return (
							<a className={itemFlag === flag ? 'nav-link nav-item active' : 'nav-link nav-item'}
							   href="#" flag={itemFlag} key={index}>{text}</a>
					)
				})}


				</ul>

			</div>
		);
	}
}


export default connect(
	state => ({...state.todo}),
	{filterTodo}
)(TodoFooter);
