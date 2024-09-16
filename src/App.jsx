import "./components/todo/todo.css";
import AddTodo from "./components/todo/AddTodo";
import TodoList from "./components/todo/TodoList";
import Logo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleDelete = (deleteID) => {
    setTodoList(todoList.filter((todo) => !(todo.id === deleteID)));
  };

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <AddTodo addNewTodo={addNewTodo} />
        {todoList.length > 0 ? (
          <TodoList todoList={todoList} handleDelete={handleDelete} />
        ) : (
          <div className="todo-image">
            <img className="logo" src={Logo} alt="logo" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
