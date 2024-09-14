
const TodoList = (props) => {
  return (
    <div className="todo-list">
     <div>
      {JSON.stringify(props.todoList)}
     </div>
    </div>
  )
}

export default TodoList