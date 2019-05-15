function checkIsTodoExist(todos, match) {
    if (!todos.length) {
        return false;
    }
    let { params: { todoId } } = match;
    todoId = parseInt(todoId);
    if (!todoId || !isNaN) {
        return false;
    }
    const todo = todos.find(el => el.id === todoId);
    if (!todo) {
        return false;
    }
    return todo;
}

export default checkIsTodoExist;