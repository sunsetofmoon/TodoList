
function ToDo({ todos, toggle, removeTask }) {
    return (
        <div className="item-todo">
            <div className={todos.complete ? "item-text strike" : "item-text"} onClick={() => toggle(todos.id)}>
                {todos.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todos.id)}>
                X
            </div>
        </div >
    )
}

export default ToDo;