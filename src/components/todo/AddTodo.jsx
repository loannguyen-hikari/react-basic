import { useState } from "react"

const AddTodo = (props) => {
  const [valueInput, setValueInput] = useState("Loan")
  const {addNewTodo} = props;

  const handleOnChange = (name) => {
    setValueInput(name)
  }

  const handleOnClick = () => {
    addNewTodo(valueInput)
  }

  return (
    <div className="add-todo">
      <input type="text" onChange={(event) => handleOnChange(event.target.value)}/>
      <button className="add-todo-btn" onClick={handleOnClick}>Add</button>
      <div>My input is {valueInput}</div>
    </div>
  )
}

export default AddTodo