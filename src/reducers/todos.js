const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text + ' test2',
					completed: false
				}
			];
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if(todo.id === action.id) {
					return Object.assign({}, todo, { completed: !todo.completed });
				}
				return todo;
			});
		default:
			return state;
	}
};
  
export default todos;