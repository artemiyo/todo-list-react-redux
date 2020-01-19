export const getTodo = (todos, todoId) => {
	return todos.find(todo => todo.id === todoId)
}