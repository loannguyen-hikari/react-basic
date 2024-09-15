
const TodoList = (props) => {
const {todoList} = props

  return (
    <div className="todo-list">
     <div>
      {todoList.map((todo) => {
          return(
          <div className="todo-item" key={todo.id}>
            <div>{todo.name}</div>
            <button>Delete</button>
          </div>)
          })}
     </div>
    </div>
  )
}

export default TodoList