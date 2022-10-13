import TODO_ACTION_TYPES from '../types/todo.type';

const initialState = {
	todos: [],
	todo: {},
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TODO_ACTION_TYPES.SET_TODO:
			return {
				...state,
				todos: action.payload,
			};
		case TODO_ACTION_TYPES.SET_SELECTED_TODO:
			return {
				...state,
				todo: action.payload,
			};
		default:
			return state;
	}
};

export default todoReducer;
