import TODO_ACTION_TYPES from '../types/todo.type';

const initialState = {
	fethingTodoErrorMessage: '',
	isFethingTodoError: false,
	isLoadingTodo: false,
	todo: {},
	todos: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TODO_ACTION_TYPES.SET_TODO_BEGIN:
			return {
				...state,
				isLoadingTodo: true,
				isFethingTodoError: false,
			};
		case TODO_ACTION_TYPES.SET_TODO:
			return {
				...state,
				todos: action.payload,
			};
		case TODO_ACTION_TYPES.SET_TODO_FINISH:
			return {
				...state,
				isLoadingTodo: true,
			};
		case TODO_ACTION_TYPES.SET_TODO_ERROR:
			return {
				...state,
				fethingTodoErrorMessage: action.payload,
				isFethingTodoError: true,
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
