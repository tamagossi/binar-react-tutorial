import TODO_ACTION_TYPES from '../types/todo.type';
import axios from 'axios';

// const setTodo = (todos) => {
// 	return {
// 		type: TODO_ACTION_TYPES.SET_TODO,
// 		payload: todos,
// 	};
// };

const setTodo = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: TODO_ACTION_TYPES.SET_TODO_BEGIN });

			const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

			dispatch({ type: TODO_ACTION_TYPES.SET_TODO, payload: response.data });
			dispatch({ type: TODO_ACTION_TYPES.SET_TODO_FINISH });
		} catch (error) {
			dispatch({
				type: TODO_ACTION_TYPES.SET_TODO_ERROR,
				payload: error.message,
			});
		}
	};
};

const setSelectedTodo = (todo) => {
	return {
		type: TODO_ACTION_TYPES.SET_SELECTED_TODO,
		payload: todo,
	};
};

const TODO_ACTIONS = { setTodo, setSelectedTodo };

export default TODO_ACTIONS;
