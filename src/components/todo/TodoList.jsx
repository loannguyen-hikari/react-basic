
const TodoList = (props) => {
const {todoList, handleDelete} = props

  const handleOnClickDelete = (id) => {
    handleDelete(id)
  }
  return (
    <div className="todo-list">
     <div>
      {todoList.map((todo) => {
          return(
          <div className="todo-item" key={todo.id}>
            <div>{todo.name}</div>
            <button onClick={() => {handleOnClickDelete(todo.id)}}>Delete</button>
          </div>)
          })}
     </div>
    </div>
  )
}

export default TodoList