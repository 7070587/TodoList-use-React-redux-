

import {combineReducers} from 'redux';
import {ADD_TODO, FILTER_TODO, UPDATE_TODO_STATE, DELETE_TODO} from './actions-types'

const initState = {
	data: [],
	flag: 'all'
};

function todo(state = initState, action) {
	state = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		// 增加todo
		case ADD_TODO:
			// todo：傳遞近來需要增加todo的信息
			const {todo} = action;  // todo:name state
			// parseFloat(state.data[])
			// 找到最後一條的id --> state.data.length -1]['id']
			todo.id = state.data.length === 0 ? 1 : (parseFloat(state.data[state.data.length - 1]['id']) + 1);
			state.data.push(todo);
			return state;

		// 篩選todo
		case FILTER_TODO:
			state.flag = action.data;
			return state;

		// 更新todo
		case UPDATE_TODO_STATE:
			let {todoId, newState} = action;
			let currentItem = state.data.find(item => item.id === todoId);
			if (currentItem) {
				currentItem.state = newState;
			}
			return state;

		// 刪除todo
		case DELETE_TODO:
			let {deleteId} = action;
			state.data = state.data.filter(item => item.id !== deleteId);
			return state;

		default:
			return state;
	}
}

export default combineReducers({
	todo
});
