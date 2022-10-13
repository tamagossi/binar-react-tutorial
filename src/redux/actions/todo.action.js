import TODO_ACTION_TYPES from '../types/todo.type';

const setTodo = (todos) => {
	return {
		type: TODO_ACTION_TYPES.SET_TODO,
		payload: todos,
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
